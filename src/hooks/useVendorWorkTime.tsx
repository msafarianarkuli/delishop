import {useEffect, useMemo, useState} from "react";
import {IOrderCompleteDeliverTime} from "view/orderComplete/context/OrderCompleteProvider";
import dayjs from "dayjs";
import {IGetVendorsDetailVendorOpenHours} from "types/interfaceVendorDetail";
import {number2Digits} from "utils/utils";

interface IUseVendorTime {
  open_hours?: IGetVendorsDetailVendorOpenHours;
}

function useVendorWorkTime(props: IUseVendorTime) {
  const {open_hours} = props;
  const [time, setTime] = useState<IOrderCompleteDeliverTime[]>([]);
  const [error, setError] = useState("");

  const openHours = useMemo(() => open_hours || null, [open_hours]);

  const hours = useMemo(() => {
    setError("");
    let result: IOrderCompleteDeliverTime[] = [];
    const day = dayjs().format("dd").toLowerCase() as keyof IGetVendorsDetailVendorOpenHours;
    if (openHours) {
      const today = openHours[day];
      if (today !== "close") {
        const todayHour = dayjs().get("hour");
        const splitPeriod = today.split(",");
        splitPeriod.forEach((item) => {
          const period = item.split("-");
          let HStart = "";
          let MStart = "";
          let HEnd = "";
          let MEnd = "";
          period.forEach((value, index) => {
            const tmp = value.split(":");
            if (index === 0) {
              HStart = tmp[0];
              MStart = tmp[1] || "0";
            } else if (index === 1) {
              HEnd = tmp[0];
              MEnd = tmp[1] || "0";
            }
          });
          const diff = +HEnd - +HStart;
          const hasBetween = todayHour >= +HStart && todayHour < +HEnd;
          if (!isNaN(diff) && diff > 0 && hasBetween) {
            const tmp = Array.from(new Array(diff), (_, i) => {
              const tmp = +HStart + i;
              const MEndTime = diff - 1 > i ? MStart : MEnd;
              const next = tmp + 1;
              return {
                isTemp: false,
                from: number2Digits(tmp) + ":" + number2Digits(+MStart),
                to: number2Digits(next) + ":" + number2Digits(+MEndTime),
              };
            });
            result = result.concat(tmp);
          }
        });
      } else {
        setError("امروز تعطیل می باشد");
      }
    }
    return result;
  }, [openHours]);

  useEffect(() => {
    const basicDate = "1991-07-30";
    const todayHour = dayjs().get("hour");
    const todayMin = dayjs().get("minute");
    const todayTimestamp = dayjs(`${basicDate} ${todayHour}:${todayMin}`).valueOf();
    let tmpTimes: IOrderCompleteDeliverTime[] = [];
    if (hours.length) {
      const tmp = hours.filter((value) => {
        const tempHour = dayjs(`${basicDate} ${value.from}`).subtract(30, "minute").valueOf();
        return tempHour > todayTimestamp;
      });
      if (tmp.length) {
        tmpTimes = [{isTemp: true, from: "", to: ""}, ...tmp];
      }
    }
    if (!tmpTimes.length) {
      setError("هنوز باز نشده است");
    }
    setTime(tmpTimes);
  }, [hours]);

  return {time, error};
}

export default useVendorWorkTime;

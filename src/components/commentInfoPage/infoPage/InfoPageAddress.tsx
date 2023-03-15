import React, {Fragment, useMemo} from "react";
import dayjs from "dayjs";
import {IGetVendorsDetailVendorOpenHours} from "types/interfaceVendorDetail";
import {IconClockSolid, IconLocation} from "assets/icons";

export interface IInfoPageAddress {
  open: number;
  openHours?: IGetVendorsDetailVendorOpenHours;
  address: string;
}

function InfoPageAddress(props: IInfoPageAddress) {
  const {openHours, open, address} = props;

  const openTitle = useMemo(() => (open ? "باز" : "بسته"), [open]);
  const hours = useMemo(() => {
    const result: {from: string; to: string}[] = [];
    const day = dayjs().format("dd").toLowerCase() as keyof IGetVendorsDetailVendorOpenHours;
    // const open_hours = data?.vendor?.open_hours;
    if (openHours) {
      const today = openHours[day];
      if (today !== "close") {
        const split1 = today.split(",");
        split1.forEach((item) => {
          const tmp = item.split("-");
          const from = tmp[0].search(":") === -1 ? `${tmp[0]}:00` : tmp[0];
          const to = tmp[1].search(":") === -1 ? `${tmp[1]}:00` : tmp[1];
          result.push({from, to});
        });
      }
    }
    return result;
  }, [openHours]);

  return (
    <div className="px-screenSpace border-b border-borderColor text-[13px] text-textColor py-7">
      <div className="flex items-center">
        <IconLocation className="w-6 h-6 ml-1" />
        <span>{address}</span>
      </div>
      <div className="flex items-center mt-7">
        <IconClockSolid className="w-5 h-5 ml-2" />
        <span className="text-primary ml-1">{openTitle}، </span>
        {hours.length ? <span>امروز از</span> : null}
        {hours.map((item, index) => {
          return (
            <Fragment key={index}>
              {index > 0 ? <span>-</span> : null}
              <span className="mx-1">
                ساعت {item.from} تا {item.to}
              </span>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default InfoPageAddress;

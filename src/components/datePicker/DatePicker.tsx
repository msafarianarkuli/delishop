import {Calendar, CalendarProps, DayValue} from "@hassanmojab/react-modern-calendar-datepicker";
import {CustomInput, CustomModal} from "components/index";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import styles from "components/datePicker/datePicker.module.scss";
import classNames from "classnames";
import {MouseEventHandler, useMemo, useState} from "react";
import {ICustomInput} from "components/customInput/CustomInput";
import {IconClose} from "assets/icons";

export type TDatePickInputProps = Omit<ICustomInput, "readOnly" | "value" | "onChange" | "prefix" | "id">;

export interface IDatePicker extends Omit<CalendarProps<DayValue>, "locale"> {
  id: string;
  value: DayValue;
  inputProps?: TDatePickInputProps;
  onCancel?: MouseEventHandler;
}

function DatePicker(props: IDatePicker) {
  const {id, value, calendarClassName = "", onChange, inputProps, onCancel, ...rest} = props;
  const [open, setOpen] = useState(false);

  const classNameCalender = classNames({
    [styles.date_picker_calender_container]: true,
    [calendarClassName]: calendarClassName,
  });

  const inputValue = useMemo(() => {
    let text = "";
    if (value) {
      text = value.year + "/" + value.month + "/" + value.day;
    }
    return text;
  }, [value]);

  return (
    <>
      <CustomInput
        id={id}
        value={inputValue}
        readOnly
        {...inputProps}
        prefix={
          value ? (
            <button onClick={onCancel}>
              <IconClose className="w-3 h-3 text-iconColor ml-1" />
            </button>
          ) : (
            <span />
          )
        }
        onClick={(e) => {
          setOpen(true);
          inputProps?.onClick?.(e);
        }}
      />
      <CustomModal
        open={open}
        classNameContainer={styles.date_picker_container}
        classNameBody="p-0 flex justify-center"
        onCancel={() => setOpen(false)}
        body={
          <Calendar
            {...rest}
            locale="fa"
            calendarClassName={classNameCalender}
            value={value}
            onChange={(day) => {
              setOpen(false);
              onChange?.(day);
            }}
          />
        }
      />
    </>
  );
}

export default DatePicker;

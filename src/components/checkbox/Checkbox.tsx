import classNames from "classnames";
import styles from "components/checkbox/checkbox.module.scss";
import {IconTick} from "assets/icons";

export interface ICheckbox {
  type?: "checkbox" | "radio";
  id: string;
  label?: string;
  value: boolean;
  onChange: (value: boolean) => void;
  labelRight?: boolean;
  classNameLabel?: string;
  classNameContainer?: string;
}

function Checkbox(props: ICheckbox) {
  const {
    type = "checkbox",
    id,
    label,
    value,
    classNameLabel,
    classNameContainer = "",
    onChange,
    labelRight = false,
  } = props;

  const container = classNames({
    "flex items-center cursor-pointer select-none": true,
    "flex-row-reverse": !labelRight,
    [classNameContainer]: classNameContainer,
  });

  return (
    <label className={container}>
      {label ? <span className={classNameLabel}>{label}</span> : null}
      <input
        id={id}
        name={id}
        type="checkbox"
        className="hidden"
        onChange={() => {
          onChange(!value);
        }}
      />
      <div className={type === "checkbox" ? styles.checkbox : styles.radio}>
        {value ? (
          type === "checkbox" ? (
            <IconTick className="w-5 h-auto" />
          ) : (
            <div className={styles.radio_circle} />
          )
        ) : null}
      </div>
    </label>
  );
}

export default Checkbox;
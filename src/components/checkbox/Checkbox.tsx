import classNames from "classnames";
import styles from "components/checkbox/checkbox.module.scss";

export interface IRadioButton {
  id: string;
  label?: string;
  value: boolean;
  onChange: (value: boolean) => void;
  labelRight?: boolean;
  classNameLabel?: string;
  classNameContainer?: string;
}

function Checkbox(props: IRadioButton) {
  const {id, label, value, classNameLabel, classNameContainer = "", onChange, labelRight = false} = props;

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
      <div className={styles.checkbox}>{value ? <div className={styles.checkbox_circle} /> : null}</div>
    </label>
  );
}

export default Checkbox;

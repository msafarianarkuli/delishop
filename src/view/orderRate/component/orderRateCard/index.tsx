import {RegisterOptions} from "react-hook-form/dist/types/validator";
import {useController, useFormContext} from "react-hook-form";
import ReactSlider from "react-slider";
import {IconStar} from "assets/icons";
import styles from "view/orderRate/component/orderRateCard/orderRateCard.module.scss";

interface IOrderRateCard {
  id: string;
  title: string;
  rules?: Omit<RegisterOptions, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
}

function OrderRateCard(props: IOrderRateCard) {
  const {title, id, rules} = props;
  const {control} = useFormContext();
  const {
    field,
    fieldState: {error},
  } = useController({
    name: id,
    control,
    rules,
  });

  return (
    <div className={styles.order_rate_card_container}>
      <div className="text-[16px] font-semibold">{title}</div>
      <div className="text-[25px] font-light">{field.value}</div>
      <ReactSlider
        min={0}
        max={5}
        step={0.1}
        className="rate_slider mb-3"
        trackClassName="rate_slider_track"
        renderThumb={(props) => {
          return (
            <div {...props}>
              <IconStar className="w-6 h-6 text-primary" />
            </div>
          );
        }}
        value={field.value}
        onChange={(value) => {
          field.onChange(value);
        }}
      />
      {error?.message ? <div className="text-[13px] text-error font-normal mt-2">{error.message}</div> : null}
    </div>
  );
}

export default OrderRateCard;

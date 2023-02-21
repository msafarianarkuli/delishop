import {useController, useFormContext} from "react-hook-form";
import {Switch} from "antd";
import classNames from "classnames";
import styles from "view/supermarketCategory/supermarketCategory.module.scss";

function SupermarketCategoryFilterHasCoin() {
  const {control} = useFormContext();
  const {field} = useController({
    control,
    name: "hasCoin",
  });
  const container = classNames({
    [styles.supermarket_category_filter_box]: true,
    "flex items-center justify-between mt-3 px-5 py-4": true,
  });
  return (
    <div className={container}>
      <div className="text-[13px]">فقط کالاهای سکه دار</div>
      <div>
        <Switch
          size="default"
          checked={field.value}
          onChange={(checked) => field.onChange(checked)}
          className="supermarket_switch"
        />
      </div>
    </div>
  );
}

export default SupermarketCategoryFilterHasCoin;

import React, {useCallback, useRef, useState} from "react";
import {IconRoundedDown, IconRoundedTop} from "assets/icons";
import {Checkbox} from "components";
import {useController, useFormContext} from "react-hook-form";
import classNames from "classnames";

const initialHeight = 60;

interface ISupermarketCategoryFilterCollapseDataItem {
  id: string;
  title: string;
}

export type TSupermarketCategoryFilterCollapseData = ISupermarketCategoryFilterCollapseDataItem[];

interface ISupermarketCategoryFilterCollapse {
  id: string;
  title: string;
  data: TSupermarketCategoryFilterCollapseData;
  className?: string;
}

function SupermarketCategoryFilterCollapse(props: ISupermarketCategoryFilterCollapse) {
  const {id, data, className = "", title} = props;
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(initialHeight);
  const {control} = useFormContext();
  const {field} = useController({
    name: id,
    control,
    defaultValue: [],
  });

  const onClick = useCallback(() => {
    const div = ref.current as HTMLDivElement;
    const tmpHeight = div.scrollHeight;
    const paddingBottom = 15;
    if (height > initialHeight) {
      setHeight(initialHeight);
    } else {
      setHeight(tmpHeight + initialHeight + paddingBottom);
    }
  }, [height]);

  const container = classNames({
    "inner_box rounded-[15px] p-0 transition-height duration-200 ease-linear overflow-hidden": true,
    [className]: className,
  });

  return (
    <div className={container} style={{height}}>
      <button type="button" onClick={onClick} className="flex w-full items-center justify-between h-[60px] px-5">
        <div className="text-[15px]">{title}</div>
        {height > initialHeight ? (
          <IconRoundedTop className="w-5 h-5 text-iconColor" />
        ) : (
          <IconRoundedDown className="w-5 h-5 text-iconColor" />
        )}
      </button>
      <div ref={ref} className="border-t border-borderColor mx-3 px-2 pt-3">
        {data.map((item, index) => {
          return (
            <Checkbox
              key={index}
              classNameContainer="justify-end mb-2"
              classNameLabel="mr-2"
              id={item.id.toString()}
              label={item.title}
              value={field.value.some((value: ISupermarketCategoryFilterCollapseDataItem) => value?.id === item.id)}
              onChange={(value) => {
                if (value) {
                  field.onChange([...field.value, item]);
                } else {
                  const tmp = field.value.filter(
                    (value: ISupermarketCategoryFilterCollapseDataItem) => value.id !== item.id
                  );
                  field.onChange(tmp);
                }
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SupermarketCategoryFilterCollapse;

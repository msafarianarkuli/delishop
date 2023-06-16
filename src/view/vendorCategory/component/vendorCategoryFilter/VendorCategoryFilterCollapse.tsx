import React, {useCallback, useRef, useState} from "react";
import {useController, useFormContext} from "react-hook-form";
import classNames from "classnames";
import {IconRoundedDown, IconRoundedTop} from "assets/icons";
import {Checkbox} from "components";

const initialHeight = 60;

interface IVendorCategoryFilterCollapseDataItem {
  id: string;
  title: string;
}

export type TVendorCategoryFilterCollapseData = IVendorCategoryFilterCollapseDataItem[];

interface IVendorCategoryFilterCollapse {
  id: string;
  title: string;
  data: TVendorCategoryFilterCollapseData;
  className?: string;
}

function VendorCategoryFilterCollapse(props: IVendorCategoryFilterCollapse) {
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
              value={field.value.some((value: IVendorCategoryFilterCollapseDataItem) => value?.id === item.id)}
              onChange={(value) => {
                if (value) {
                  field.onChange([...field.value, item]);
                } else {
                  const tmp = field.value.filter(
                    (value: IVendorCategoryFilterCollapseDataItem) => value.id !== item.id
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

export default VendorCategoryFilterCollapse;

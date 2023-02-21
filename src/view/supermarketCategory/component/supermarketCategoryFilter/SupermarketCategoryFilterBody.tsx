import {FormProvider, useForm} from "react-hook-form";
import useSupermarketCategoryFilter from "view/supermarketCategory/component/context/useSupermarketCategoryFilter";
import {createLog} from "utils/utils";
import SupermarketCategoryFilterCollapse, {
  TSupermarketCategoryFilterCollapseData,
} from "view/supermarketCategory/component/supermarketCategoryFilter/supermarketCategoryFilterCollapse";
import SupermarketCategoryFilterHasCoin from "view/supermarketCategory/component/supermarketCategoryFilter/SupermarketCategoryFilterHasCoin";
import SupermarketCategoryFilterPrice from "view/supermarketCategory/component/supermarketCategoryFilter/supermarketCategoryFilterPrice";
import useSupermarketCategoryFilterAction from "view/supermarketCategory/component/context/useSupermarketCategoryFilterAction";
import {
  setSupermarketCategoryFilterFormData,
  setSupermarketCategoryFilterOpen,
} from "view/supermarketCategory/component/context/SupermarketCategoryFilterProvider";

export interface ISupermarketCategoryFilterForm {
  hasCoin: boolean;
  category: TSupermarketCategoryFilterCollapseData;
  type: TSupermarketCategoryFilterCollapseData;
  brand: TSupermarketCategoryFilterCollapseData;
  price: [number, number];
}

const data = [
  {
    id: "1",
    title: "چای سیاه",
  },
  {
    id: "2",
    title: "چای سبز",
  },
  {
    id: "3",
    title: "دمنوش",
  },
];

function SupermarketCategoryFilterBody() {
  const {formData} = useSupermarketCategoryFilter();
  const disptach = useSupermarketCategoryFilterAction();
  const methods = useForm<ISupermarketCategoryFilterForm>({
    defaultValues: formData,
  });
  const {handleSubmit} = methods;

  async function onSubmit(payload: ISupermarketCategoryFilterForm) {
    createLog("payload", payload);
    disptach(setSupermarketCategoryFilterFormData(payload));
    disptach(setSupermarketCategoryFilterOpen(false));
  }

  return (
    <FormProvider {...methods}>
      <form id="categoryFilter" onSubmit={handleSubmit(onSubmit)}>
        <SupermarketCategoryFilterCollapse title="دسته بندی" id="category" data={data} />
        <SupermarketCategoryFilterCollapse title="برند" id="brand" data={data} className="my-3" />
        <SupermarketCategoryFilterCollapse title="نوع" id="type" data={data} />
        <SupermarketCategoryFilterHasCoin />
        <SupermarketCategoryFilterPrice />
      </form>
    </FormProvider>
  );
}

export default SupermarketCategoryFilterBody;

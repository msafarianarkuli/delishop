import {FormProvider, useForm} from "react-hook-form";
import {
  setVendorCategoryFilterFormData,
  setVendorCategoryFilterOpen,
  useVendorCategoryFilter,
  useVendorCategoryFilterAction,
} from "view/vendorCategory/context/VendorCategoryFilterProvider";
import VendorCategoryFilterCollapse, {
  TVendorCategoryFilterCollapseData,
} from "view/vendorCategory/component/vendorCategoryFilter/VendorCategoryFilterCollapse";
import VendorCategoryFilterHasCoin from "view/vendorCategory/component/vendorCategoryFilter/VendorCategoryFilterHasCoin";
import VendorCategoryFilterPrice from "view/vendorCategory/component/vendorCategoryFilter/VendorCategoryFilterPrice";

export interface IVendorCategoryFilterForm {
  hasCoin: boolean;
  category: TVendorCategoryFilterCollapseData;
  type: TVendorCategoryFilterCollapseData;
  brand: TVendorCategoryFilterCollapseData;
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

function VendorCategoryFilterBody() {
  const {formData} = useVendorCategoryFilter();
  const dispatch = useVendorCategoryFilterAction();
  const methods = useForm<IVendorCategoryFilterForm>({
    defaultValues: formData,
  });
  const {handleSubmit} = methods;

  async function onSubmit(payload: IVendorCategoryFilterForm) {
    console.log("payload", payload);
    dispatch(setVendorCategoryFilterFormData(payload));
    dispatch(setVendorCategoryFilterOpen(false));
  }

  return (
    <FormProvider {...methods}>
      <form id="categoryFilter" onSubmit={handleSubmit(onSubmit)}>
        <VendorCategoryFilterCollapse title="دسته بندی" id="category" data={data} />
        <VendorCategoryFilterCollapse title="برند" id="brand" data={data} className="my-3" />
        <VendorCategoryFilterCollapse title="نوع" id="type" data={data} />
        <VendorCategoryFilterHasCoin />
        <VendorCategoryFilterPrice />
      </form>
    </FormProvider>
  );
}

export default VendorCategoryFilterBody;

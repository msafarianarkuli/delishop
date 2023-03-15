import {FormProvider, useForm} from "react-hook-form";
import {createLog} from "utils/utils";
import {IMapPoint} from "components/map/Map";
import AddressCreateFormInput from "view/addressCreate/component/AddressCreateFormInput";
import AddressCreateMap from "view/addressCreate/component/AddressCreateMap";
import AddressCreateFormSubmit from "view/addressCreate/component/AddressCreateFormSubmit";
import {axiosService} from "utils/axiosService";
import {API} from "api/const";
import {useSession} from "next-auth/react";
import {useQueryClient} from "react-query";
import usePathnameQuery from "hooks/usePathnameQuery";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {setAddressMap} from "redux/addressMap/addressMapReducer";
import {Method} from "axios";
import {QUERY_KEY_USER_ADDRESSES} from "api/getUserAddresses";

export interface IAddressCreateForm {
  location: IMapPoint;
  title: string;
  address: string;
  description: string;
  tel: string;
}

interface IAddressFormCreateBody {
  longitude: number;
  latitude: number;
  tel: string;
  address: string;
  description: string;
  title: string;
}

interface IAddressFormCreateRes {
  data: {
    message: string;
  };
}

function AddressCreateForm({defaultValues, isEdit}: {defaultValues?: IAddressCreateForm; isEdit?: boolean}) {
  const {data} = useSession();
  const queryClient = useQueryClient();
  const router = useRouter();
  const {querySearch} = usePathnameQuery();
  const dispatch = useDispatch();
  const methods = useForm<IAddressCreateForm>({
    defaultValues,
  });
  const {handleSubmit} = methods;

  async function onSubmit(payload: IAddressCreateForm) {
    const body: IAddressFormCreateBody = {
      latitude: payload.location.lat,
      longitude: payload.location.lng,
      title: payload.title.trim(),
      address: payload.address.trim(),
      description: payload.description.trim(),
      tel: payload.tel.trim(),
    };
    try {
      let url = API.CREATE_USER_ADDRESS;
      let method: Method = "post";
      const id = router.query.id;
      if (isEdit && id && !Array.isArray(id)) {
        url = API.UPDATE_USER_ADDRESS.replace("{id}", id);
        method = "put";
      }
      const res = await axiosService<IAddressFormCreateRes, IAddressFormCreateBody>({
        url,
        method,
        body,
        token: data?.user.token,
      });
      createLog("AddressCreateForm res", res);
      await queryClient.invalidateQueries(QUERY_KEY_USER_ADDRESSES);
      dispatch(setAddressMap({location: null, locationData: null}));
      await router.push(`/address${querySearch}`);
    } catch (e) {
      createLog("AddressCreateForm error", e);
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AddressCreateMap />
        <AddressCreateFormInput
          id="title"
          label="عنوان آدرس"
          classNameContainer="mb-7"
          placeholder="خانه"
          rules={{
            validate: (value) => {
              if (!value) return "عنوان آدرس را وارد کنید";
              return true;
            },
          }}
        />
        <AddressCreateFormInput
          id="address"
          label="آدرس کامل"
          classNameContainer="mb-7"
          placeholder="تهران، منطقه 2"
          rules={{
            validate: (value) => {
              if (!value) return "آدرس کامل را وارد کنید";
              return true;
            },
          }}
        />
        <AddressCreateFormInput
          id="description"
          label="جزئیات آدرس"
          classNameContainer="mb-7"
          placeholder="پلاک 56 واحد مدیریت"
          rules={{
            validate: (value) => {
              if (!value) return "جزئیات آدرس را وارد کنید";
              return true;
            },
          }}
        />
        <AddressCreateFormInput
          id="tel"
          label="شماره تماس ثابت"
          classNameContainer="mb-7"
          placeholder="0212345678"
          numerical
          className="dir-ltr"
          rules={{
            validate: (value) => {
              if (!value) return "شماره تماس ثابت را وارد کنید";
              return true;
            },
          }}
        />
        <AddressCreateFormSubmit />
      </form>
    </FormProvider>
  );
}

export default AddressCreateForm;

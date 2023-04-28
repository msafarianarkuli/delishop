import {CustomModal} from "components";
import {Button} from "antd";
import {MouseEventHandler, useCallback, useState} from "react";
import useTypeColor from "hooks/useTypeColor";
import classNames from "classnames";
import {
  setAddressDeleteClose,
  useAddressDelete,
  useAddressDeleteAction,
} from "view/address/context/AddressDeleteProvider";
import {useDispatch, useSelector} from "react-redux";
import {selectAddressMap, setUserAddress} from "redux/addressMap/addressMapReducer";
import {axiosService} from "utils/axiosService";
import {API} from "api/const";
import {useSession} from "next-auth/react";
import {createLog} from "utils/utils";
import {useQueryClient} from "react-query";
import {useAddressData} from "view/address/context/AddressDataProvider";
import {QUERY_KEY_USER_ADDRESSES} from "api/getUserAddresses";

interface AddressDeleteModalBody {
  loading: boolean;
  onClickOk: MouseEventHandler;
  onClickCancel: MouseEventHandler;
}

function AddressDeleteModalBody(props: AddressDeleteModalBody) {
  const {onClickOk, onClickCancel, loading} = props;
  const type = useTypeColor();
  const container = classNames({
    "modal-submit-btn w-full ml-5": true,
    "submit-btn": type === "default",
    "submit-btn-supermarket": type === "supermarket",
  });

  return (
    <>
      <div className="text-center py-8">می خواهید آدرس مورد نظر را حذف کنید؟</div>
      <div className="flex items-center">
        <Button loading={loading} onClick={onClickOk} type="primary" className={container}>
          حذف
        </Button>
        <Button loading={loading} onClick={onClickCancel} className="secondary-btn w-full">
          خیر
        </Button>
      </div>
    </>
  );
}

function AddressDeleteModal() {
  // const {open, onClickOk, onClickCancel} = props;
  const {open, data} = useAddressDelete();
  const dispatch = useAddressDeleteAction();
  const {userAddress} = useSelector(selectAddressMap);
  const {data: userData, status} = useSession();
  const dispatchRedux = useDispatch();
  const queryClient = useQueryClient();
  const {data: addressList} = useAddressData();
  const [isLoading, setIsLoading] = useState(false);

  const onClickCancel = useCallback(() => {
    if (!isLoading) {
      dispatch(setAddressDeleteClose());
    }
  }, [dispatch, isLoading]);

  const onClickOk = useCallback(() => {
    const id = data?.id;
    if (status === "authenticated" && id) {
      setIsLoading(true);
      const url = API.DELETE_USER_ADDRESS.replace("{id}", id.toString());
      axiosService({url, method: "delete", token: userData?.user.token})
        .then((res) => {
          createLog("AddressDeleteModal err", res);
          queryClient.invalidateQueries(QUERY_KEY_USER_ADDRESSES);
          if (id === userAddress?.id) {
            const tmp = addressList?.filter((item) => item.id !== id);
            if (tmp?.length) {
              dispatchRedux(setUserAddress(tmp[0]));
            }
          }
          dispatch(setAddressDeleteClose());
        })
        .catch((err) => createLog("AddressDeleteModal err", err))
        .finally(() => setIsLoading(false));
    }
  }, [addressList, data?.id, dispatch, dispatchRedux, queryClient, status, userAddress?.id, userData?.user.token]);

  return (
    <>
      <CustomModal
        onCancel={onClickCancel}
        open={open}
        header="حذف آدرس"
        classNameHeader="justify-center"
        body={<AddressDeleteModalBody loading={isLoading} onClickCancel={onClickCancel} onClickOk={onClickOk} />}
      />
    </>
  );
}

export default AddressDeleteModal;

import {CustomModal} from "components";
import {Button} from "antd";
import {MouseEventHandler, useCallback} from "react";
import useTypeColor from "hooks/useTypeColor";
import classNames from "classnames";
import {
  setAddressDeleteClose,
  useAddressDelete,
  useAddressDeleteAction,
} from "view/address/context/AddressDeleteProvider";

interface IAddressDeleteModal {
  open: boolean;
  onClickOk: MouseEventHandler;
  onClickCancel: MouseEventHandler;
}

function AddressDeleteModalBody(props: Omit<IAddressDeleteModal, "open">) {
  const {onClickOk, onClickCancel} = props;
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
        <Button onClick={onClickOk} type="primary" className={container}>
          حذف
        </Button>
        <Button onClick={onClickCancel} className="secondary-btn w-full">
          خیر
        </Button>
      </div>
    </>
  );
}

function AddressDeleteModal() {
  // const {open, onClickOk, onClickCancel} = props;
  const {open} = useAddressDelete();
  const dispatch = useAddressDeleteAction();

  const onClickCancel = useCallback(() => {
    dispatch(setAddressDeleteClose());
  }, [dispatch]);

  return (
    <>
      <CustomModal
        onCancel={onClickCancel}
        open={open}
        header="حذف آدرس"
        classNameHeader="justify-center"
        body={<AddressDeleteModalBody onClickCancel={onClickCancel} onClickOk={onClickCancel} />}
      />
    </>
  );
}

export default AddressDeleteModal;

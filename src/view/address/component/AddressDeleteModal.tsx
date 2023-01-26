import {CustomModal} from "components";
import {Button} from "antd";
import {MouseEventHandler} from "react";

interface IAddressDeleteModal {
  open: boolean;
  onClickOk: MouseEventHandler;
  onClickCancel: MouseEventHandler;
}

function AddressDeleteModalBody(props: Omit<IAddressDeleteModal, "open">) {
  const {onClickOk, onClickCancel} = props;
  return (
    <>
      <div className="text-center py-8">می خواهید آدرس مورد نظر را حذف کنید؟</div>
      <div className="flex items-center">
        <Button onClick={onClickOk} type="primary" className="submit-btn modal-submit-btn w-full ml-5">
          حذف
        </Button>
        <Button onClick={onClickCancel} className="secondary-btn w-full">
          خیر
        </Button>
      </div>
    </>
  );
}

function AddressDeleteModal(props: IAddressDeleteModal) {
  const {open, onClickOk, onClickCancel} = props;
  return (
    <>
      <CustomModal
        onCancel={onClickCancel}
        open={open}
        header="حذف آدرس"
        classNameHeader="justify-center"
        body={<AddressDeleteModalBody onClickCancel={onClickCancel} onClickOk={onClickOk} />}
      />
    </>
  );
}

export default AddressDeleteModal;

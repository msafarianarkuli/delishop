import AddressCreateForm from "view/addressCreate/component/AddressCreateForm";
import AddressCreateHeader from "view/addressCreate/component/AddressCreateHeader";
import {createLog} from "utils/utils";

interface IAddressCreate {
  isEdit?: boolean;
}

function AddressCreate({isEdit}: IAddressCreate) {
  createLog("AddressCreate isEdit", isEdit);
  return (
    <>
      <AddressCreateHeader />
      <div className="px-screenSpace mt-headerNormal">
        <AddressCreateForm />
      </div>
    </>
  );
}

export default AddressCreate;

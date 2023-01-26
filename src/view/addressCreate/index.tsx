import React from "react";
import AddressCreateForm from "view/addressCreate/component/AddressCreateForm";
import AddressCreateHeader from "view/addressCreate/component/AddressCreateHeader";

function AddressCreate() {
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

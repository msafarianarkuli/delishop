import AddressHeader from "view/address/component/AddressHeader";
import AddressAdd from "view/address/component/AddressAdd";
import AddressCard from "view/address/component/addressCard/AddressCard";
import AddressDeleteModal from "view/address/component/AddressDeleteModal";
import {useState} from "react";

const arr = Array.from(new Array(5), (_, i) => i + 1);

function Address() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <AddressHeader />
      <div className="mt-headerNormal px-screenSpace">
        <AddressAdd />
        <div>
          {arr.map((item) => {
            return (
              <AddressCard
                key={item}
                id={item.toString()}
                title="خانه"
                address="تهران، جاده مخصوص تهران کرج خیابان ملک پلاک 5"
                onClickDelete={() => setModal(true)}
              />
            );
          })}
        </div>
      </div>
      <AddressDeleteModal open={modal} onClickOk={() => setModal(false)} onClickCancel={() => setModal(false)} />
    </>
  );
}

export default Address;

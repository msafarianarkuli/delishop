import AddressMapSearchHeader from "view/addressMapSearch/component/AddressMapSearchHeader";
import AddressMapSearchInput from "view/addressMapSearch/component/AddressMapSearchInput";
import AddressMapSearchCard from "view/addressMapSearch/component/AddressMapSearchCard";

const arr = Array.from(new Array(10), (_, i) => i + 1);

function AddressMapSearch() {
  return (
    <>
      <AddressMapSearchHeader />
      <div className="px-screenSpace mt-headerNormal">
        <AddressMapSearchInput />
        <div>
          {arr.map((item) => {
            return (
              <AddressMapSearchCard
                key={item}
                text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AddressMapSearch;

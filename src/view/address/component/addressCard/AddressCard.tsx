import {Button} from "antd";
import {IconDeleteAddress, IconDeleteAddressLight, IconEditAddress, IconEditAddressLight} from "assets/icons";
import {useRouter} from "next/router";
import styles from "view/address/component/addressCard/addressCard.module.scss";
import {MouseEventHandler} from "react";
import classNames from "classnames";
import usePathnameQuery from "hooks/usePathnameQuery";
import useTypeColor from "hooks/useTypeColor";

interface IAddressCard {
  title: string;
  address: string;
  id: string;
  onClick: MouseEventHandler;
  onClickDelete: MouseEventHandler;
  selected?: boolean;
}

function AddressCard(props: IAddressCard) {
  const {title, address, onClickDelete, id, selected, onClick} = props;
  const router = useRouter();
  const {querySearch} = usePathnameQuery();
  const type = useTypeColor();
  const container = classNames({
    [styles.address_card_container]: true,
    [styles.address_card_container_selected]: selected && type === "default",
    [styles.address_card_container_selected_supermarket]: selected && type === "supermarket",
    [styles.address_card_container_unselected]: !selected,
  });
  return (
    <div onClick={onClick} className={container}>
      <div className="text-[16px] font-semibold w-1/6 text-center">{title}</div>
      <div className="flex flex-1 text-[13px] font-light px-6">{address}</div>
      <div className="flex flex-col items-center justify-center">
        <Button onClick={onClickDelete} className="w-5 h-5 border-0 rounded-none p-0 shadow-none">
          {selected ? <IconDeleteAddressLight className="w-5 h-5" /> : <IconDeleteAddress className="w-5 h-5" />}
        </Button>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/address/create/${id}${querySearch}`);
          }}
          className="w-4 h-4 border-0 rounded-none p-0 mt-4 shadow-none"
        >
          {selected ? <IconEditAddressLight className="w-4 h-4" /> : <IconEditAddress className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  );
}

export default AddressCard;

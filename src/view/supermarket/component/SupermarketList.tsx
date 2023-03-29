import SuperMarketCard from "view/supermarket/component/supermarketCard";
import Link from "next/link";
import {useSupermarketData} from "view/supermarket/context/SuperMarketDataProvider";
import {IGetVendorsRes} from "api/getVendors";
import React from "react";

function SupermarketList() {
  const {data, isLoading} = useSupermarketData();
  return (
    <div className="mt-5">
      {isLoading ? <div>loading ...</div> : null}
      {!isLoading && !data?.vendors?.length ? <div>موردی یافت نشد</div> : null}
      <SupermarketShowList data={data} />
    </div>
  );
}

function SupermarketShowList({data}: {data?: IGetVendorsRes}) {
  return (
    <>
      {data?.vendors.map((item, index) => {
        return (
          <Link key={index} href={`/supermarket/${item.id}`}>
            <SuperMarketCard
              title={item.name}
              deliveryPrice={60000}
              coin={item.point}
              rate={item.rate}
              image={item.logo}
            />
          </Link>
        );
      })}
    </>
  );
}

export default SupermarketList;

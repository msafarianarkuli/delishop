import {createContext, ReactNode, useContext} from "react";

// @ts-ignore
const initialState: any = [];

const AdvertisementDataContext = createContext(initialState);

function AdvertisementDataProvider({children}: {children: ReactNode}) {
  const result = [
    {
      id: 1,
      title: "string",
      status: "string",
      price: 1,
      contact: "string",
      description: "string",
      main_img: "string",
      img_2: "string",
      img_3: "string",
      img_4: "string",
      show: 1,
      created_at: "string",
      updated_at: "string",
      type: 1,
      link: "string",
    },
  ];

  return <AdvertisementDataContext.Provider value={result}>{children}</AdvertisementDataContext.Provider>;
}

export default AdvertisementDataProvider;

export function useAdvertisementData() {
  return useContext(AdvertisementDataContext);
}

export interface IGetAdRes {
  data: IGetAdData;
}

interface IGetAdData {
  ads: TGetAdDataAds;
  totalCount: number;
}

export type TGetAdDataAds = IGetAdDataAdsItems[];

export interface IGetAdDataAdsItems {
  id: number;
  title: string;
  status: string;
  price: number;
  contact: string;
  description: string;
  main_img: string;
  img_2: string;
  img_3: string;
  img_4: string;
  show: 1;
  created_at: string;
  updated_at: string;
  type: number;
  link: string;
}

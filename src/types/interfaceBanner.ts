export interface IGetBannerRes {
  data: IGetBannerData;
}

interface IGetBannerData {
  banners: IGetBannerDataBanners;
  totalCount: number;
}

export type IGetBannerDataBanners = IGetBannerDataBannersItems[];

interface IGetBannerDataBannersItems {
  id: number;
  title: string;
  main_img: string;
  link: string;
}

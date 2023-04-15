export interface IGetBannerRes {
  data: IGetBannerData;
}

interface IGetBannerData {
  banners: TGetBannerDataBanners;
  totalCount: number;
}

export type TGetBannerDataBanners = IGetBannerDataBannersItems[];

interface IGetBannerDataBannersItems {
  id: number;
  title: string;
  main_img: string;
  link: string;
}

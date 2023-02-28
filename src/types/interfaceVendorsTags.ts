export interface IGetVendorsTagsRes {
  data: TGetVendorsTagsData;
}

export type TGetVendorsTagsData = IGetVendorsTagsDataItem[];

export interface IGetVendorsTagsDataItem {
  id: number;
  name: string;
  displayname: string;
  logo?: string;
  created_at?: string;
  updated_at?: string;
}

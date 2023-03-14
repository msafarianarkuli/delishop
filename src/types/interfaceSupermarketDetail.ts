import {IGetVendorDetailRegions, IGetVendorsDetailVendor} from "types/interfaceVendorDetail";

export interface ISupermarketDetailRes {
  data: IGetSupermarketDetailData;
}

export interface IGetSupermarketDetailData {
  vendor: IGetVendorsDetailVendor;
  menus: IGetSupermarketDetailMenu;
  regions: IGetVendorDetailRegions[];
}

export interface IGetSupermarketDetailMenu {
  groups: IGetSupermarketDetailMenusGroups[];
}

export interface IGetSupermarketDetailMenusGroups {
  id: number;
  name: string;
  displayname: string;
  logo?: string;
  sub_groups: TGetSupermarketDetailMenusGroupsSubgroups;
}

export type TGetSupermarketDetailMenusGroupsSubgroups = IGetSupermarketDetailMenusGroupsSubgroupsItems[] | null;

export interface IGetSupermarketDetailMenusGroupsSubgroupsItems {
  id: number;
  name: string;
  displayname: string;
  logo_igu?: string;
  mothergroup_fid: number;
  market: number;
  sub_groups: TGetSupermarketDetailMenusGroupsSubgroups;
}

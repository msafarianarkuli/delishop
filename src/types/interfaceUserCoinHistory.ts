export interface IUserCoinHistoryRes {
  data: IUserCoinHistoryData;
}

export interface IUserCoinHistoryData {
  points_history: TUserCoinHistoryDataPointsHistory;
  totalCount: number;
}

export type TUserCoinHistoryDataPointsHistory = IUserCoinHistoryDataPointsHistoryItems[];

interface IUserCoinHistoryDataPointsHistoryItems {
  id: number;
  user_fid: number;
  type: number;
  point: number;
  description: string;
  created_at: string;
  updated_at: string;
  point_type: IUserCoinHistoryDataPointsHistoryItemsPointType;
}

export interface IUserCoinHistoryDataPointsHistoryItemsPointType {
  id: number;
  name: string;
  displayname: string;
  value: number;
  coupon: number;
  discription: string;
  created_at: string | number;
  updated_at: string | number;
  active: number;
}

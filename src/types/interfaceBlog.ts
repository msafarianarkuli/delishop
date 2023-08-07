interface IData {
  id: number;
  title: string;
  description: string;
}
export interface IBlog {
  id: string;
  blog: IData[];
  title: string;
  description: string;
  image: string;
  mainImage: string;
}

export type WineType = {
  id: number;
  name: string;
  year: number;
  winery: string;
  region: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
  comments: {
    id: number;
    username: string;
    content: string;
  }[];
  rating: number;
};

export type CommentType = {
  id: number;
  username: string;
  content: string;
};

export enum OrderType {
  name = "name",
  year = "year",
  price = "price",
  quantity = "quantity",
}

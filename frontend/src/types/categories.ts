import IProduct from "./products";

export interface ICategory {
  id: string;
  name: string;
  subCategories?: ICategory[];
  parentCategories?: ICategory[];
  products: IProduct[];
}

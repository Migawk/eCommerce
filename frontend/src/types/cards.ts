export interface ICard {
  timeout: Date;
  discount?: number;
  price: number;
  photo: string;

  id: number;
  name: string;
  description: string;

  rating: number;
  ratingCount: number;
}

export interface ILeaflet {
  title: string;
  description: string;
  link: string;
  img: string;
  color: string;
}

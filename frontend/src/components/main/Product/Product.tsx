import IProduct from "../../../types/products.ts";
import styles from "./product.module.sass";
import { z } from "zod";

interface IProductElement {
  data: IProduct;
}

export default function ProductElement({data}: IProductElement) {
  const parse = z.object({
    id: z.string(),
    name: z.string(),
    price: z.number(),
    colors: z.array(z.string()),
    countLeft: z.number(),
    countSold: z.number(),
    description: z.array(z.string()),
    photos: z.array(z.string()),
    size: z.array(z.string())
  }).safeParse(data);
  if(!parse.success) return bad;
  return (
    <div>
      {data.photos && <img src={data.photos[0]}/>}
      <div className={styles.info}>
        <div className={styles.infoLeft}>
          {data.name}
          {data.description[0].slice(0, 32)}
        </div>
        <div className={styles.infoRight}>
          heart
        </div>
      </div>
      <div className={styles.rate}>
        ({data._count.reviews})
      </div>
      <div className={styles.price}>
        ${data.price}
      </div>
    </div>
  )
}

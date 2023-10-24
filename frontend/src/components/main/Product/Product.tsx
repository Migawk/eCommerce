import IProduct from "../../../types/products.ts";
import styles from "./product.module.sass";
import Heart from "../../../assets/svgElements/HeartSVG.tsx";
import starA from "../../../assets/svg/starActive.svg";

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
    size: z.array(z.string()),
    _count: z.object({
      reviews: z.number()
    })
  }).safeParse(data);

  if(!parse.success) return <div>bad</div>;
  return (
    <div className={styles.card}>
      {data.photos && <img src={"http://localhost:3000/cdn/"+data.photos[0]}/>}
      <div className={styles.cardInfo}>
        <div className={styles.info}>
          <div className={styles.infoLeft}>
            <div className={styles.infoName}>{data.name}</div>
            <div className={styles.infoDescription}>{data.description[0].slice(0, 32)}</div>
          </div>
          <div className={styles.infoRight}>
            <Heart color="28303F"/>
          </div>
        </div>
        <div className={styles.rate}>
          <div>
            <img src={starA} />
            <img src={starA} />
            <img src={starA} />
            <img src={starA} />
            <img src={starA} />
          </div>
          <div>
            ({data._count.reviews})
          </div>
        </div>
        <div className={styles.price}>
          <div className={styles.priceActually}>
            $ {data.discount ? data.discount : data.price}
          </div>
          { data.discount && <del className={styles.priceDiscount}>${data.price}</del>}
          { data.discount && <div className={styles.priceDiscountPercents}>
            -{Math.round((1-data.discount/data.price)*100)}%
          </div> }
        </div>
      </div>
    </div>
  )
}

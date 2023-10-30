import styles from "./card.module.sass";
import { Link } from "react-router-dom";
import { ICard } from "../../../types/cards.ts";
import Button from "../Button/Button.tsx";
import box from "../../../assets/svg/box.svg";

interface I {
  type: "tiny" | "big" | "tall"
  data: ICard
}
export default function Card(
  {
    type,
    data
  }: I
) {

  if(type === "big") return (
    <div className={styles.card2}>
      <div className={styles.card2Cover}>
        <div className={styles.card2Panel}>
          <Button style="tag" size="tiny" img={box}>New Arivals</Button>
        </div>
        <Link className={styles.card1Image} to="#">
          <img src={data.photo} alt={data.description} height="auto"/>
        </Link>
      </div>
      <div className={styles.card2Info}>
        <div className={styles.card2Text}>
          <div className={styles.card2Title}>{data.name}</div>
          <div className={styles.card2Descr}>{data.description}</div>
        </div>
        <div>
          <Button style="white">${data.price} Shop Now</Button>
        </div>
      </div>
    </div>
  )

  // #1
  return (
    <div className={styles.card1}>
      <div>
        <span className={styles.card1Deal}>{"Deal of the Day".toUpperCase()}</span>
      </div>
      <Link className={styles.card1Image} to="#">
        <img src={data.photo} alt={data.description} width="241" height="auto"/>
      </Link>
      <div className={styles.card1Bottom}>
        <div className={styles.card1BottomTop}>
          <div className={styles.card1Name}>
            {data.name}
          </div>
          <div className={styles.card1Des}>
            {data.description}
          </div>
        </div>
        <div className={styles.card1BottomBottom}>
          <div>
            {data.rating}({data.ratingCount})
          </div>
          <div className={styles.card1Offer}>
            <span className={styles.card1Price}>${data.discount}</span>
            <span className={styles.card1Discount}>${data.price}</span>
            {typeof data.discount === "number" ? <div className={styles.card1DiscountBox}>
              -&nbsp;{Math.round((data.discount/data.price as any).toFixed(2)*100)}%
            </div> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

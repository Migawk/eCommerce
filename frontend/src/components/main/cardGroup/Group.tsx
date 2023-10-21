import { Link } from "react-router-dom";
import { ICard } from "../../../types/cards.ts";
import Card from "../Card/Card.tsx";
import styles from "./group.module.sass";
interface IGroup {
  name: string;
  link: string;

  cards: ICard[];
  type?: "tiny" | "big" | "tall";
}
export default function Group({name, link, cards, type="tiny"}: IGroup) {
  console.log(cards);
  return (
    <section className={styles.flashSales}>
      <div className={styles.flashTop}>
        <h2>{name}</h2>
        <Link to={link}>View all</Link>
      </div>
      <div className={styles.cards}>
        {
          cards.map((product: ICard) => {
            return (
              <Card
                key={product.id}
                type={type}
                data={product}
              />
            )
          })
        }
      </div>
    </section>
  )
}

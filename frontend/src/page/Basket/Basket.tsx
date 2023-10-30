import styles from "./basket.module.sass";

import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { useItems } from "/src/store/main.ts";

import garbage from "/src/assets/svg/garbage.svg";

import Quantity from "/src/components/main/Quantity/Quantity";

function ProductCard({data}) {
  const [ product, setProduct ] = useState(data);
  const { removeItem, setItems, items } = useItems(state => state);

  return (
    <div className={styles.item}>
      <div className={styles.itemInfo}>
        <img
          className={styles.itemImage}
          src={"http://localhost:3000/cdn/"+product.photos[0]}
          width={58}
          height={70}/>
        <div className={styles.itemInfoName}>
          <div>{product.name}</div>
          <div>Color: </div>
        </div>
      </div>
      <div>${product.price-.01}</div>
      <div>
        <Quantity
          number={product.quantity}
          min={1}
          max={product.countLeft}
          onChange={(el) => {
            const rawItems = [...items];
            rawItems.find(value => value.id === product.id).quantity = el;
            setItems(rawItems);
          }}/>
      </div>
      <div>${((product.price-.01)*product.quantity).toFixed(2)}</div>
      <button className={styles.garbage} onClick={() => {
        const ind = items.findIndex(iProd => iProd.id === product.id);
        if(items.length === 1) return setItems([]);
        if(ind === -1) return;
        removeItem(ind);
      }}>
        <img src={garbage}/>
      </button>
    </div>
  )
}

export default function Basket() {
  const items = useItems((state) => state.items);
  return (
    <>
      <Helmet>
        <title>
          Basket {items === null ? "" : "| " + items.length.toString()}
        </title>
      </Helmet>
      <main className={styles.main}>
        <article>
          <section>
            { items === null && <h1>There is empty list!</h1>}
            {
              items !== null && <div>
                <h2 className={styles.title}><span>Card</span><span className={styles.titleLength}>{items.length}</span></h2>
                <div className={styles.itemsList}>
                  {items.map(item => {
                    if(!item) return <div>Fail</div>;
                    return <ProductCard data={item} key={item.id}/>
                  })}
                </div>
              </div>
            }
          </section>
        </article>
      </main>
    </>
  )
}

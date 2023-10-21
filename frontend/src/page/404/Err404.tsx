import image from "../../assets/png/notFound.png";
import purse from "../../assets/png/purse.png";
import arrowLeft from "../../assets/svg/arrowLeft.svg";
import arrowRight from "../../assets/svg/arrowRight.svg";

import styles from "./err.module.sass";

import Panel from "./Panel.tsx";
import Card from "../../components/main/Card/Card.tsx";
import { useState, useEffect } from "react";

import { fromEvent } from "rxjs";

export default function Err404() {
  const products = [
    {
      timeout: new Date(Date.now() + Math.random()*20000),
      discount: 69.99,
      price: 129.99,
      photo: purse,

      id: 1,
      name: "Tonny Black",
      description: "Shoulder bag-White-Plain",

      rating: 4,
      ratingCount: 58,
    },
    {
      timeout: new Date(Date.now() + Math.random()*20000),
      discount: 69.99,
      price: 129.99,
      photo: purse,

      id: 2,
      name: "Tonny Black",
      description: "Shoulder bag-White-Plain",

      rating: 4,
      ratingCount: 58,
    },
    {
      timeout: new Date(Date.now() + Math.random()*20000),
      discount: 69.99,
      price: 129.99,
      photo: purse,

      id: 3,
      name: "Tonny Black",
      description: "Shoulder bag-White-Plain",

      rating: 4,
      ratingCount: 58,
    },
    {
      timeout: new Date(Date.now() + Math.random()*20000),
      discount: 69.99,
      price: 129.99,
      photo: purse,

      id: 4,
      name: "Tonny Black",
      description: "Shoulder bag-White-Plain",

      rating: 4,
      ratingCount: 58,
    },
  ];

  const [len, setLen] = useState<number>(0);

  useEffect(() => {

    const resize = () => setLen(Math.round((window.innerWidth*.8)/300));
    resize();

    const ev = fromEvent(window, "resize");

    ev.subscribe(() => resize());

  }, []);

  return (
    <main>
      <article>
        <section className={styles.err}>
          <img src={image}/>
          <Panel/>
        </section>
        <section className={styles.slider}>
          <button className={styles.arrow}>
            <img src={arrowLeft}/>
          </button>
          <div className={styles.list}>
            {
              products.slice(0, len)
                .map(el =>
                  <Card type="tiny" data={el} key={el.name}/>
                )
            }
          </div>
          <button className={styles.arrow}>
            <img src={arrowRight}/>
          </button>
        </section>
      </article>
    </main>
  )
}

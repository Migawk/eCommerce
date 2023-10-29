import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import IProduct from "../../types/products.ts";

import ProductElement from "../../components/main/Product/Product.tsx";
import styles from "./favorite.module.sass";

export default function Favourite() {
  const [fav, setFav] = useState<IProduct[] | null>(null);

  useEffect(() => {
    const token = {token: document.cookie.split("=")[1]};
    fetch("http://localhost:3000/auth/me", {
      method: "POST",
      body: JSON.stringify(token),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json()).then((res) => {
      if(res.favProducts.length === 0) return;
      setFav(res.favProducts);
    });
  }, []);
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <Link>Back to website</Link>
      </nav>
      <article>
        <section>
          { fav && fav.map((product) => {
            return <ProductElement key={product.id} data={product} isFavorited={true}/>
          }) }
        </section>
      </article>
    </main>
  )
}

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ProductElement from "../../components/main/Product/Product.tsx";

import IProduct from "../../types/products.ts";

import styles from "./favorite.module.sass";

export default function Favourite() {
  const [fav, setFav] = useState<IProduct[] | null | "err">(null);

  useEffect(() => {
    const token = {token: document.cookie.split("=")[1]};
    if(!token.token) return setFav("err");
    fetch("http://localhost:3000/auth/me", {
      method: "POST",
      body: JSON.stringify(token),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json()).then((res) => {
      if(!res.favProducts && res.favProducts.length === 0) return;
      setFav(res.favProducts);
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <main className={styles.main}>
        <nav className={styles.nav}>
          <Link>Back to website</Link>
        </nav>
        <article>
          { fav !== "err" && <section>
            { fav ? fav.map((product) => {
              return <ProductElement key={product.id} data={product} isFavorited={true}/>
            }) : <h1>You've no one favorite Product!</h1>}
          </section> }
          {
            fav === "err" && <section>
              <h1>You're not authorized!</h1>
              <p>Only authorized users can have favorite products.</p>
            </section>
          }
        </article>
      </main>
    </>
  )
}

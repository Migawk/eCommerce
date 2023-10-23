import styles from "./category.module.sass";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Navigation from "../../components/main/Navigation/Navigation.tsx";
import ProductElement from "../../components/main/Product/Product.tsx";

export default function Category() {
  const {id} = useParams();
  const [category, setCategory] = useState<"pending" | {status: string, message: string} | ICategory>("pending");

  useEffect(() => {
    fetch("http://localhost:3000/category/"+id)
      .then(res => res.json())
      .then(res => {
        if(!res) return setCategory({status: "Bad Request", message: "There isn't any content"});
        if("message" in res) return setCategory({status: "Bad Request", message});
        setCategory(res);
      });
  }, []);

  useEffect(() => {
    console.log(category);
  }, [category]);

  if(category === "pending") return <main>
      <h1>Loading...</h1>
    </main>;
  if(typeof category !== "string" && "message" in category) return <div className={styles.message}>
      <h1>{category.status}</h1>
      <h2>{category.message}</h2>
    </div>;

  return (
    <main>
      <article>
        <section>
          <Navigation row={
            [
              {name: "Homepage", link: "/"},
              {name: category.parentCategories[0].name, link: "/category/"+category.parentCategories[0].id},
              {name: category.name, link: "/category/"+category.id},
            ]
          }/>
        </section>
        <section className={styles.categoryInfo}>
          <div className={styles.categoryInfoDetails}>
            <h2>
              {category.name}
            </h2>
            <span>
              {category.products.length} items
            </span>
          </div>
          <div>
          </div>
        </section>
        <section className={styles.sectionProducts}>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarWrapper}>
              <button>All Categories</button>
              <h4>Brand</h4>
              <input type="text" placeholder="search"/>
            </div>
            <div className={styles.sidebarWrapper}>
              <h4>Color</h4>
            </div>
            <div className={styles.sidebarWrapper}>
              <h4>Size</h4>
            </div>
            <div className={styles.sidebarWrapper}>
              <h4>Most popular</h4>
              <div>
              1 2 3 4 5
              </div>
            </div>
            <div className={styles.sidebarWrapper}>
              <h4>Price</h4>
              <div>
                <div>Minimun</div>
                <div>Maximum</div>
              </div>
            </div>
            20 products found
          </aside>
          <div>
          {
            category.products.map(product => {
              return <ProductElement data={product}/>
            })
          }
          </div>
        </section>
      </article>
    </main>
  );
}

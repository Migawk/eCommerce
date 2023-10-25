import styles from "./category.module.sass";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import starD from "../../assets/svg/star.svg";
import starA from "../../assets/svg/starActive.svg";

import Navigation from "../../components/main/Navigation/Navigation.tsx";
import ProductElement from "../../components/main/Product/Product.tsx";

import _ from "lodash";

interface ISortParams {
  colors: string[]
  size: string[]
  price: [number, number] // min, max
}
export default function Category() {
  const {id} = useParams();
  const [category, setCategory] = useState<"pending" | {status: string, message: string} | ICategory>("pending");

  const [sortParams, setParams] = useState<ISortParams>({});

  useEffect(() => {
    fetch("http://localhost:3000/category/"+id)
      .then(res => res.json())
      .then(res => {
        if(!res) return setCategory({status: "Bad Request", message: "There isn't any content"});
        if("message" in res) return setCategory({status: "Bad Request", message});
        if(res.products.length === 0) return setCategory(
          {
            products: [],
            parentCategories: res.parentCategories,
            subCategories: res.subCategories
          }
        );

        setCategory(res);

        const sort = res.products.map(product => {
          return {
            size: product.size,
            colors: product.colors,
            price: product.price
          }
        });

        const min = _.minBy(sort, (o) => o.price).price;
        const max = _.maxBy(sort, (o) => o.price).price;
        setParams({
          colors: Array.from(new Set(sort.map(param => param.colors).flat(3))),
          size: Array.from(new Set(sort.map(param => param.size).flat(3))),
          price: [min, max]
        });
      }).catch(error => {
        setCategory({status: "Problem", message: error.toString()});
      });
  }, []);

  if(category === "pending") return (<main>
      <h1>Loading...</h1>
    </main>);
  if(typeof category !== "string" && "message" in category) return (<div className={styles.message}>
      <h1>{category.status}</h1>
      <h2>{category.message}</h2>
    </div>);

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
        { category.products.length ? <><section className={styles.categoryInfo}>
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
              <div className={styles.sortList}>
                {
                  sortParams.colors && sortParams.colors.map((color) => {
                    return <div key={color} style={{background: color}} className={styles.color}></div>
                  })
                }
              </div>
            </div>
            <div className={styles.sidebarWrapper}>
              <h4>Size</h4>
              <div className={styles.sortList}>
                {
                  sortParams.size && sortParams.size.map((size) => {
                    const [quant, isAviable] = size.split(",");
                    return <button key={quant} className={styles.size}>{quant}</button>
                  })
                }
              </div>
            </div>
            <div className={styles.sidebarWrapper}>
              <h4>Most popular</h4>
              <div>
                <div>
                  <img src={starA}/>
                  <img src={starA}/>
                  <img src={starA}/>
                  <img src={starA}/>
                  <img src={starA}/>
                </div>
                <div>
                  <img src={starA}/>
                  <img src={starA}/>
                  <img src={starA}/>
                  <img src={starA}/>
                  <img src={starD}/>
                </div>
                <div>
                  <img src={starA}/>
                  <img src={starA}/>
                  <img src={starA}/>
                  <img src={starD}/>
                  <img src={starD}/>
                </div>
                <div>
                  <img src={starA}/>
                  <img src={starA}/>
                  <img src={starD}/>
                  <img src={starD}/>
                  <img src={starD}/>
                </div>
                <div>
                  <img src={starA}/>
                  <img src={starD}/>
                  <img src={starD}/>
                  <img src={starD}/>
                  <img src={starD}/>
                </div>
              </div>
            </div>
            <div className={styles.sidebarWrapper}>
              <h4>Price</h4>
              <div className={styles.sidebarPrice}>
                <div>Minimum {sortParams.price[0]}</div>
                <div>Maximum {sortParams.price[1]}</div>
              </div>
            </div>
            20 products found
          </aside>
          <div className={styles.categoryProducts}>
          {
            category.products.map(product => {
              return <ProductElement key={product.id} data={product}/>
            })
          }
          </div>
        </section></> : <div>It's an empty list</div>}
      </article>
    </main>
  );
}

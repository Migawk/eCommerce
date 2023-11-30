import styles from "./category.module.sass";
import IProduct from "../../types/products.ts";

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import starD from "../../assets/svg/star.svg";
import starA from "../../assets/svg/starActive.svg";
import check from "../../assets/svg/check.svg";
import glass from "../../assets/svg/glass.svg";

import Navigation from "../../components/main/Navigation/Navigation.tsx";
import ProductElement from "../../components/main/Product/Product.tsx";
import categories from "../../assets/svg/categoriesDots.svg";

import _ from "lodash";
import { ICategory } from "../../types/categories.ts";

interface ISortParams {
  colors: null | { color: string | null, selected: boolean }[]
  size: null | { size: string, selected: boolean }[]
  popularity: null | { stars: number, selected: boolean }[]
  price: null | [number, number] // min, max
}

interface ISorting {
  size: string[]
  colors: string[]
  price: number
}

export default function Category() {
  const { id } = useParams();
  const [category, setCategory] = useState<"pending" | { status: string, message: string } | ICategory>("pending");
  const [products, setProducts] = useState<null | { show: IProduct[], list: IProduct[] }>(null);

  const [sortParams, setParams] = useState<ISortParams>({
    colors: null,
    size: null,
    popularity: null,
    price: null,
  })

  function toSort() {
    if (category === "pending" || "status" in category || !sortParams) return;
    const params = Object.fromEntries(Object.entries(sortParams).map(el => {
      return [el[0], el[1].filter((param: any) => param.selected)]
    }).filter(el => el !== undefined));

    const rawProducts = category.products.filter(el => {
      const colors = el.colors.map(color => {
        return params.colors.findIndex((el: {color: string}) => el.color == color) !== -1
      });
      return colors.indexOf(true) !== -1;
    });
    return rawProducts;
  }

  useEffect(() => {
    setProducts((pr: any) => { return { ...pr, show: toSort() } });
  }, [sortParams]);

  useEffect(() => {
    fetch("http://localhost:3000/category/" + id)
      .then(res => res.json())
      .then((res: ICategory | { message: string }) => {
        if (!res) return setCategory({ status: "Bad Request", message: "There isn't any content" });
        if ("message" in res) return setCategory({ status: "Bad Request", message: res.message });
        if (res.products.length === 0) return setCategory({ status: "Empty", message: "List is empty" });

        setCategory(res);
        setProducts({ show: res.products, list: res.products });

        const sort: ISorting[] = res.products.map((product: IProduct) => {
          return {
            size: product.size,
            colors: product.colors,
            price: product.price
          }
        });

        const min = (_.minBy(sort, (o: ISorting) => o.price) as ISorting).price;
        const max = (_.maxBy(sort, (o: ISorting) => o.price) as ISorting).price;

        setParams({
          colors: _.uniqBy(sort.map((param: any) => { return { color: param.colors[0], selected: false } }), 'color'),
          size: _.uniqBy(sort.map((param: any) => { return { size: param.size[0], selected: false } }), (o) => o.size.split(",")[0]),
          popularity: [
            { stars: 5, selected: false },
            { stars: 4, selected: false },
            { stars: 3, selected: false },
            { stars: 2, selected: false },
            { stars: 1, selected: false },
          ],
          price: [min, max]
        });
      }).catch(error => {
        setCategory({ status: "Problem", message: error.toString() });
      });
  }, [id]);

  if (category === "pending") return (
    <>
      <Helmet>
        <title>Loading</title>
      </Helmet>
      <main>
        <h1>Loading...</h1>
      </main>
    </>
  )
  if (typeof category !== "string" && "message" in category) return (
    <>
      <Helmet>
        <title>Category | Error</title>
      </Helmet>
      <div className={styles.message}>
        <h1>{category.status}</h1>
        <h2>{category.message}</h2>
      </div>
    </>
  );

  let row = [
    { name: "Homepage", link: "/" },
    null,
    { name: category.name, link: "/category/" + category.id },
  ];

  if (category.parentCategories && category.parentCategories[0]) {
    row[1] = { name: category.parentCategories[0].name, link: "/category/" + category.parentCategories[0].id };
  } else {
    row = row.filter(e => e !== null);
  }

  return (
    <>
      <Helmet>
        <title>Category | {category.name}</title>
      </Helmet>
      <main>
        <article>
          <section className={styles.nav}>
            <Navigation row={
              row
            } />
          </section>
          {category.subCategories && <section className={styles.categorySubcategories}>
            {
              category.subCategories.map(cat => {
                return <Link to={"/category/" + cat.id} key={cat.id} className={styles.categorySubcategoriesElement}>
                  {cat.products[0]?.photos[0] && <div>
                    <img
                      src={"http://localhost:3000/cdn/" + cat.products[0]?.photos[0]}
                      width="256" />
                  </div>}
                  <p>{cat.name}</p>
                </Link>
              })
            }
          </section>}
          {sortParams && products && products.list.length ? <><section className={styles.categoryInfo}>
            <div className={styles.categoryInfoDetails}>
              <h2>
                {category.name}
              </h2>
              <span>
                {products.list.length} items
              </span>
            </div>
            <div>
            </div>
          </section>
            <section className={styles.sectionProducts}>
              <aside className={styles.sidebar}>
                <div className={styles.sidebarWrapper}>
                  <button className={styles.categoriesButton}>
                    <img src={categories} />
                    <span>All Categories</span>
                  </button>
                  <div className={styles.brand}>
                    <div className={styles.brandTop}>
                      <h4>BRAND</h4>
                    </div>
                    <div className={styles.brandBottom}>
                      <input type="text" placeholder="Search" />
                      <button><img src={glass} /></button>
                    </div>
                  </div>
                </div>
                <div className={styles.sidebarWrapper}>
                  <h4>Color</h4>
                  <div className={styles.sortList}>
                    {
                      sortParams.colors && sortParams.colors?.map((color) => {
                        if (!color) return;
                        return <div
                          key={color.color}
                          style={{ background: color.color! }}
                          className={styles.color}
                          onClick={() => {
                            setParams((pr) => {
                              const index = [...pr.colors!].indexOf(color);
                              const colors = [...pr.colors!];
                              colors[index] = { color: color.color, selected: ![...pr.colors!][index].selected };
                              return { ...pr, colors }
                            })
                          }}>
                          {color.selected && <img src={check} />}</div>
                      })
                    }
                  </div>
                </div>
                <div className={styles.sidebarWrapper}>
                  <h4>Size</h4>
                  <div className={styles.sortList}>
                    {
                      sortParams.size && sortParams.size.map((size) => {
                        const [quant] = size.size.split(",")[0];
                        return <button
                          key={quant}
                          className={size.selected ? styles.sizeSelected : styles.size}
                          onClick={() => {
                            setParams((pr) => {
                              const index = [...pr.size!].indexOf(size);
                              const sizes = [...pr.size!];
                              sizes[index] = { size: size.size, selected: ![...pr.size!][index].selected };
                              return { ...pr, size: sizes }
                            })
                          }}
                        >{quant}</button>
                      })
                    }
                  </div>
                </div>
                <div className={styles.sidebarWrapper}>
                  <h4>Most popular</h4>
                  <div>
                    <div>
                      <img src={starA} />
                      <img src={starA} />
                      <img src={starA} />
                      <img src={starA} />
                      <img src={starA} />
                    </div>
                    <div>
                      <img src={starA} />
                      <img src={starA} />
                      <img src={starA} />
                      <img src={starA} />
                      <img src={starD} />
                    </div>
                    <div>
                      <img src={starA} />
                      <img src={starA} />
                      <img src={starA} />
                      <img src={starD} />
                      <img src={starD} />
                    </div>
                    <div>
                      <img src={starA} />
                      <img src={starA} />
                      <img src={starD} />
                      <img src={starD} />
                      <img src={starD} />
                    </div>
                    <div>
                      <img src={starA} />
                      <img src={starD} />
                      <img src={starD} />
                      <img src={starD} />
                      <img src={starD} />
                    </div>
                  </div>
                </div>
                <div className={styles.sidebarWrapper}>
                  <h4>Price</h4>
                  <div className={styles.sidebarPrice}>
                    {
                      sortParams.price && <>
                        <div>Minimum {sortParams.price[0]}</div>
                        <div>Maximum {sortParams.price[1]}</div>
                      </>
                    }
                  </div>
                </div>
                {products.show.length ? products.show.length : products.list.length} products found
              </aside>
              <div className={styles.categoryProducts}>
                {
                  (products.show.length ? products.show : products.list).map(product => {
                    return <ProductElement key={product.id} data={product} />
                  })
                }
              </div>
            </section></> : <div>It's an empty list</div>}
        </article>
      </main>
    </>
  );
}

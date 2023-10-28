import styles from "./menu.module.sass";
import SubCategory from "./components/subCategory.tsx";
import Banner from "./components/Banner.tsx";
import { useEffect, useState } from "react";
import { fromEvent } from 'rxjs';

export default function ProductNavigation() {
  const [choosed, setChoosed] = useState<{num: number, left: number}>({num: 0, left: 0});
  useEffect(() => {
    const ev = fromEvent(document, 'mouseover');

    ev.subscribe((e: any) => {
      const target: {id: string, parentNode: {id: string}} | null = e.target as any;
      if(!target) return;
      if(target.id === "subCategory" || target.id === "ignore") return; // if hovered on panel, interrupt
      let id;

      if(!target.id) {
        if(!target.parentNode.id) return;
        const parent = target.parentNode.id.split(" ");
        if(parent[0] === "category") id = parent;
      } else {
        const node = target.id.split(" ");
        if(node[0] === "category") id = node;
      }

      if(!id) return setChoosed({num: 0, left: 0});
      if(id[0] === "category") {
        const size = 1250+90;
        const position = e.clientX+size > window.innerWidth ? window.innerWidth - size : e.clientX;
        setChoosed({num: Number(id[1]), left: position});
      } else {
        setChoosed({num: 0, left: 0});
      }
    });
  }, []);

  return (
      <>
        <nav>
          <ul className={styles.list}>
            {choosed.num > 0 ? <SubCategory left={choosed.left}/> : null}
            <li id="category 1">
          	  <a
                className={styles.element}
                id="category 1"
                href='/category/cebcb66f-94a9-47f7-80e6-39ffc7ee1bdd'>
                Woman
              </a>
            </li>
            <li id="category 2">
              <button className={styles.element}>
                Male
              </button>
            </li>
            <li id="category 3"><button className={styles.element}>Mother-Child</button></li>
            <li id="category 4"><button className={styles.element}>Home & Furniture</button></li>
            <li id="category 5"><button className={styles.element}>Super market</button></li>
            <li id="category 6"><button className={styles.element}>Cosmetics</button></li>
            <li id="category 7"><button className={styles.element}>Shoe & Bag</button></li>
            <li id="category 8"><button className={styles.element}>Electronic</button></li>
            <li id="category 9"><button className={styles.element}>Sport & Outdoor</button></li>
            <li id="category 10">
              <button className={styles.element}>Best seller</button>
            </li>
          </ul>
        </nav>
        <Banner/>
      </>
    )
}

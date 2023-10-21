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
      if(!target || !target.id) return;
      if(target.id === "subCategory" || target.parentNode.id === "category") return;

      if(!target.parentNode.id) return setChoosed({num: 0, left: 0});

      if(target.parentNode.id.split(" ")[0] === "category") {
        const size = 1250+90;
        const position = e.clientX+size > window.innerWidth ? window.innerWidth - size : e.clientX;
        setChoosed({num: e.target.parentNode.id.split(" ")[1], left: position});
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
          	  <button className={styles.element}>
                Woman
              </button>
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

import { Link } from "react-router-dom";
import arrowRight from "../../../assets/svg/arrowRight.svg";
import styles from "./nav.module.sass";

interface INav {
    row: { name: string, link: string }[];
}
export default function Navigation({ row }: INav) {

  const list = row.filter(el => el.name !== undefined );

  return (
    <nav className={styles.nav}>
      {list.map((el, i) => {
         // However it doesnt edits.
        return (
          <div className={styles.row} key={i}>
            <a href={el.link}>{el.name}</a>
            {i !== list.length-1 ? <img src={arrowRight} className={styles.arrow}/> : null}
          </div>
        )
      })}
    </nav>
  )
}

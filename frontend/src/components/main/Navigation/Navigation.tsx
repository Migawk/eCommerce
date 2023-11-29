import { Link } from "react-router-dom";
import arrowRight from "../../../assets/svg/arrowRight.svg";
import styles from "./nav.module.sass";

interface INav {
    row: ({ name: string, link: string } | null)[];
}
export default function Navigation({ row }: INav) {

  const list = row.filter(el => el && el.name !== undefined );

  return (
    <nav className={styles.nav}>
      {list.map((el, i) => {
         // However it doesnt edits.
        if(!el) return;
        return (
          <div className={styles.row} key={i}>
            <Link to={el.link}>{el.name}</Link>
            {i !== list.length-1 ? <img src={arrowRight} className={styles.arrow}/> : null}
          </div>
        )
      })}
    </nav>
  )
}

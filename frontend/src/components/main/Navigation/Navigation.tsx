import { Link } from "react-router-dom";
import arrowRight from "../../../assets/svg/arrowRight.svg";
import styles from "./nav.module.sass";

interface INav {
    row: { name: string, link: string }[];
}
export default function Navigation({ row }: INav) {
    return <nav className={styles.nav}>
        {row.map((el, i) => {
            return <div className={styles.row} key={el.name}>
            <Link to={el.link}>{el.name}</Link>
            {i !== row.length-1 ? <img src={arrowRight} className={styles.arrow}/> : null}
            </div>
        })}
    </nav>
}
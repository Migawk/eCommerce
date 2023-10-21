import styles from "./err.module.sass";
import { useLocation } from "react-router-dom";
import warn from "../../assets/svg/warn.svg";

function Msg({children}: {children: React.ReactNode}) {
  return (
    <div className={styles.info}>
      <div>
        <img src={warn}/>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default function Panel() {
  const q = useLocation();
  const res = new URLSearchParams(q.search).get("q");
  return (
    <div className={styles.panel}>
      <div className={styles.header}>No results were found for searching " {res} ".</div>
      <div className={styles.messages}>
        <Msg>We recommend you to search different clear key words to get the best result.</Msg>
        <Msg>You can see the most related purchased products bellow.</Msg>
      </div>
    </div>
  )
}

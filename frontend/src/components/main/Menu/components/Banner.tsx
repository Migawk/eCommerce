import styles from "../menu.module.sass";
import women from "../../../../assets/jpg/women.jpg";
import Button from "../../Button/Button.tsx";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerImg}>
        <img src={women}/>
        <div className={styles.bannerWindow}>
          <div className={styles.bannerWindowContent}>
            <span>Summer Essentials</span>
            <span className="textOff">20% off</span>
          </div>
          <div className={styles.bannerWindowInfo}>19 Jul-30 Jul</div>
        </div>
      </div>
      <div className={styles.bannerInfo}>
        <div className={styles.bannerContent}>
          <div className={styles.bannerTitle}>{"Kimonos, Caftans & Pareos".toUpperCase()}</div>
          <div className={styles.bannerSubTitle}>Poolside glam included From $4.99</div>
          <Button>Shop now</Button>
        </div>
      </div>
    </div>
  )
}

import styles from "./slider.module.sass";
import arrowLeft from "../../../assets/svg/arrowLeft.svg";
import arrowRight from "../../../assets/svg/arrowRight.svg";
import iPhone from "../../../assets/png/Iphone.png";

export default function Slider() {
  return (
    <div className={styles.slider}>
      <div className={styles.arrow}>
        <button>
          <img src={arrowLeft}/>
        </button>
      </div>

      <div className={styles.sliderInfo}>
        <div className={styles.sliderText}>
          <h1>MagSafe</h1>
          <h2>Snap on a magnetic case, wallet, or both. And get faster wireless charging.</h2>
        </div>
      </div>
      <div className={styles.sliderImage}>
        <img src={iPhone}/>
      </div>
      <div className={styles.arrow}>
        <button>
          <img src={arrowRight}/>
        </button>
      </div>
    </div>
  )
}

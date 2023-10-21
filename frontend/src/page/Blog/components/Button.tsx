import arrow from "../../../assets/svg/longArrowRight.svg";

import styles from "../blog.module.sass";

interface IButton {
  children: React.ReactNode;
  style?: "blue" | "";
}

export default function Button({children, style=""}: IButton) {
  return (
    <button className={[styles.button, styles[style]].join(" ")}>
      {children}
      <img src={arrow}/>
    </button>
  )
}

import styles from "./button.module.css";

interface IButton {
  style?: "blue" | "ocean" | "sky" | "dark" | "gray" | "tag" | "white";
  size?: "tiny" | "medium";
  disabled?: boolean;
  img?: "box" | "add" | string;
  children: React.ReactNode;
}
export default function Button({style="blue", disabled, img, children, size="medium"}: IButton) {
  return (
    <button disabled={disabled} className={
      [styles.button, styles[style], size != "medium" ? styles["tiny"] : ""].join(" ")
    }>
      {img ? <img src={img}/> : null}
      <span className={styles.buttonText}>{children}</span>
      {style === "white" ? <div className={styles.animation}>
        <div className={styles.animationAbs}></div>
      </div> : null}
    </button>
  )
}

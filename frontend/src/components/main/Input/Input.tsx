import sendSVG from "../../../assets/svg/send.svg";
import styles from "./input.module.sass";

interface IInput {
  holder: string;
  type?: "password" | "email" | "text";
}

export default function Input({holder, type="text"}: IInput) {
  return (
    <div className={styles.input}>
      <input
        className={styles.field}
        placeholder={holder}
        type={type}
        minLength={3}
      />
      <button className={styles.button}>
        <img src={sendSVG}/>
      </button>
    </div>
  )
}

import sendSVG from "../../../assets/svg/send.svg";
import styles from "./input.module.sass";

interface IInput {
  holder: string;
  type?: "password" | "email" | "text";
  border?: boolean;
  isButton?: boolean;
  label?: string | undefined;
  isRequired?: boolean;
}

export default function Input({holder, type="text", border=false, isButton=false, label=undefined, isRequired=false}: IInput) {
  return (
    <div className={styles.input}>
      <label>
        {label && <p>{label}{isRequired && <sup className={styles.star}>*</sup>}</p>}
        <input
          className={[styles.field, border ? styles.border : ""].join(" ")}
          placeholder={holder}
          type={type}
          minLength={3}
          required={isRequired}
        />
      </label>
      {isButton && <button className={styles.button}>
        <img src={sendSVG}/>
      </button>}
    </div>
  )
}

import { useState } from "react";
import styles from "./quantity.module.sass";

interface IQuantity {
    min?: number;
    max: number;
    name: string;
}

export default function Quantity({ min = 0, max, name }: IQuantity) {
    const [value, setValue] = useState<number>(1);

    function increase() {
        if (value + 1 > max) return;
        setValue(pr => ++pr);
    }
    function decrease() {
        if (value - 1 < min) return;
        setValue(pr => --pr);
    }
    return (
        <div className={styles.quantity}>
            <button
                disabled={value <= min}
                onClick={() => decrease()}
                className={[styles.decrease, styles.button].join(" ")}
            >-
            </button>
            <span className={styles.value}>{value}</span>
            <input type="text" value={value} hidden name={name} readOnly/>
            <button
                disabled={value >= max}
                onClick={() => increase()}
                className={[styles.increase, styles.button].join(" ")}
            >+</button>
        </div>
    )
}
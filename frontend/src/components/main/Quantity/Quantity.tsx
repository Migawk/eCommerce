import { useState } from "react";
import styles from "./quantity.module.sass";

interface IQuantity {
    number?: number;
    min?: number;
    max: number;
    name: string;
    onChange?: any;
}

export default function Quantity({ number=1, min = 0, max, name, onChange }: IQuantity) {
    const [value, setValue] = useState<number>(number);

    function increase() {
        if (value + 1 > max) return;
        onChange ? onChange(value+1) : null;
        setValue(pr => ++pr);
    }
    function decrease() {
        if (value - 1 < min) return;
        onChange ? onChange(value-1) : null;
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

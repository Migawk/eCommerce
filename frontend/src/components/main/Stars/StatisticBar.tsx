import styles from "./stars.module.sass";

interface IBar {
    name: string
    bit: number
    wholeNumber: number
}
export default function StatisticBar({ name, bit, wholeNumber }: IBar) {
    return (
        <div className={styles.statistic}>
            <div className="name">{name}</div>
            <div className={styles.bar}>
                <div className={styles.shower} style={{width: (bit / wholeNumber * 100).toFixed(2)+"%"}}>
                </div>
            </div>
            <div className="statistic">{(bit / wholeNumber * 100).toFixed(0)}%</div>
        </div>
    )
}
import { replaceAll, toMD } from "../../../helpers/string";
import IProduct from "../../../types/products";
import styles from "../product.module.sass";

export default function Details({ product }: { product: IProduct }) {
    return (
        <section className={styles.chapterDetails}>
            {
                product.description.map((piece: string) => {
                    return <p
                        key={piece}
                        dangerouslySetInnerHTML={
                            {
                                __html:
                                    toMD(replaceAll(piece, "\\n", "\n")),
                                // There is \\n instead of \n.
                            }
                        }
                    ></p>
                })
            }
        </section>
    )
}
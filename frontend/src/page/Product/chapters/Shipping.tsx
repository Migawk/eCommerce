import { IShipping } from "../../../types/products";
import styles from "../product.module.sass";
import paypal from "../../../assets/png/paypal.png";
import mastercard from "../../../assets/png/mastercard.png";
import bitcoin from "../../../assets/png/bitcoin.png";

export default function Shipping({ shipping }: { shipping: IShipping[] }) {
    return (
        <section className={styles.chapterShipping} id="shippingElement">
            <div className={styles.shippingWay}>
              <p className={styles.shippingTitle}>Shipping</p>
              <p className={styles.shippingText}>Calculate the shipping cost by region</p>
              <div className={styles.shippingSelection}>
                <p className={styles.shippingText}>Shipping to</p>
                <select>
                  <option>Sydney</option>
                  <option>Perth</option>
                  <option>Adelaide</option>
                  <option>Colac</option>
                  <option>Darwin</option>
                </select>
              </div>
              <div className={styles.shippingTableCenter}>
                <table cellSpacing={28}>
                    <tbody className={styles.shippingTable}>
                        <tr>
                            <th>Shipping Company</th>
                            <th>Shipping Cost</th>
                            <th>Estimated Delivery Time</th>
                            <th>Packet Insurance</th>
                        </tr>
                        {
                            shipping.map(ship => {
                                return <tr key={ship.id}>
                                    <td>
                                        {ship.logo && <img src={"http://localhost:3000/cdn/" + ship.logo} />}
                                    </td>
                                    <td>${ship.price}</td>
                                    <td>{ship.duration} days</td>
                                    <td>
                                        <label className={styles.shippingInsurance}>
                                            <input type="checkbox" disabled={!ship.insurance} />
                                            {ship.insurance ? "Avialable" : "Unavialable"}
                                        </label>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
              </div>
            </div>
            <div className={styles.shippingPayment}>
                <div>
                    <p className={styles.shippingTitle}>Payment</p>
                    <p className={styles.shippingText}>Payment methods supported with our platform</p>
                </div>
                <div className={styles.shippingPaymentMethod}>
                    <img src={paypal} alt="Pay using PayPal" />
                    <img src={mastercard} alt="Pay using MasterCard" />
                    <img src={bitcoin} alt="Pay using Bitcoin" />
                </div>
            </div>
        </section>
    )
}

import styles from "./basket.module.sass";

import { Helmet } from "react-helmet";
import { IItemsStore, useItems } from "../../store/main.ts";

import garbage from "/src/assets/svg/garbage.svg";
import bag from "/src/assets/svg/bag.svg";

import Quantity from "../../components/main/Quantity/Quantity";
import IProduct from "../../types/products.ts";
import Button from "../../components/main/Button/Button.tsx";
import { Link } from "react-router-dom";

function ProductCard({ data }: { data: IProduct }) {
  const product = data;
  const { removeItem, setItems, items } = useItems(state => (state as IItemsStore));

  return (
    <div className={styles.item}>
      <div className={styles.itemInfo}>
        <img
          className={styles.itemImage}
          src={"http://localhost:3000/cdn/" + product.photos[0]}
          width={58}
          height={70} />
        <div className={styles.itemInfoName}>
          <div>{product.name}</div>
          <div className={styles.itemColor}>
            <span>Color:</span>
            <div style={{ background: product.colors[0] }}></div>
          </div>
        </div>
      </div>
      <div>${product.price - .01}</div>
      <div>
        <Quantity
          name="count"
          number={product.quantity}
          min={1}
          max={product.countLeft}
          onChange={(el: number) => {
            const rawItems: IProduct[] = [...items!];
            rawItems.find(value => value.id === product.id).quantity = el;
            setItems(rawItems);
          }} />
      </div>
      <div>${((product.price - .01) * product.quantity).toFixed(2)}</div>
      <button className={styles.garbage} onClick={() => {
        const ind = items!.findIndex(iProd => iProd.id === product.id);
        if (items!.length === 1) return setItems([]);
        if (ind === -1) return;
        removeItem(ind);
      }}>
        <img src={garbage} />
      </button>
    </div>
  )
}

export default function Basket() {
  const items = useItems((state) => (state as IItemsStore).items);
  const price = items?.reduce((acc, item) => { return acc + item.price * item.quantity }, 0);

  return (
    <>
      <Helmet>
        <title>
          Basket {items === null ? "" : "| " + items.length.toString()}
        </title>
      </Helmet>
      <main className={styles.main}>
        <article className={styles.article}>
          <section>
            {items === null && <h1>There is empty list!</h1>}
            {
              items !== null && <div>
                <h2 className={styles.title}><span>Card</span><span className={styles.titleLength}>{items.length}</span></h2>
                <div className={styles.itemsList}>
                  {items.map(item => {
                    if (!item) return <div>Fail</div>;
                    return <ProductCard data={item} key={item.id} />
                  })}
                </div>
              </div>
            }
          </section>
          <aside>
            <div className={styles.sidebar}>
              <b>Order Summary</b>
              <div className={styles.sidebarOptions}>
                <div className={styles.sidebarOption}>
                  <p>Price</p>
                  <p>${price}.00</p>
                </div>
                <div className={styles.sidebarOption}>
                  <p>Shipping</p>
                  <p>$0.00</p>
                </div>
                <div className={styles.sidebarOption}>
                  <p>Tax</p>
                  <p>$4.99</p>
                </div>
                <div className={styles.sidebarOption}>
                  <p>Discount Price</p>
                  <p>$0.00</p>
                </div>
                <div className={styles.sidebarOption}>
                  <label>
                    <input type="checkbox" name="isGifted" />
                    <span>Pack in a Gift Box</span>
                  </label>
                  <p></p>
                </div>
                <div className={styles.sidebarOption}>
                  <p></p>
                  <p></p>
                </div>
              </div>
              <hr />
              <div className={styles.sidebarOptions}>
                <div className={styles.sidebarOption}>
                  <p><b>Total Price</b></p>
                  <p><b>${(price ?? 0) + 5}.00</b></p>
                </div>
                <Link to="/checkout" className={styles.sidebarCheckout}>
                  <Button style="dark">
                    <img src={bag} /> Checkout
                  </Button>
                </Link>
              </div>
            </div>
            <div className={styles.coupon}>
              <input type="text" placeholder="Enter coupon code" />
              <Button>Login and Apply code</Button>
            </div>
          </aside>
        </article>
      </main>
    </>
  )
}

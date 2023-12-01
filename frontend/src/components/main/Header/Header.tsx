import logo from "../../../assets/png/Logo.png";
import instagram from "../../../assets/svg/instagram.svg";
import telegram from "../../../assets/svg/telegram.svg";
import facebook from "../../../assets/svg/facebook.svg";
import glass from "../../../assets/svg/glass.svg";
import user from "../../../assets/svg/user.svg";
import heart from "../../../assets/svg/heart.svg";
import card from "../../../assets/svg/card.svg";
import categories from "../../../assets/svg/categories.svg";
import manCosm from "../../../assets/png/man-cosm.png";

import styles from "./Header.module.sass";
import _ from "lodash";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useItems } from "../../../store/main.ts";
import { useUser } from "../../../store/user.ts";
import Button from "../Button/Button";
import IProduct from "../../../types/products.ts";

export default function Header() {
  const [isShowBasket, setShowBasket] = useState<boolean>(false);
  const itemList = useItems(state => state.items);
  const remove = useItems(state => state.removeItem);
  const userState = useUser(state => state.user);

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <Link className={styles.logo} to="/">
            <div className="ico"><img src={logo} /></div>
            <div className="text">Luminae</div>
          </Link>
          <div className={styles.search}>
            <input type="text" placeholder="Search Products" className={styles.searchInput} />
            <select className={styles.searchSelect}>
              <option value="all">All Categories</option>
              <option value="clothes">Clothes</option>
              <option value="shoes">Shoes</option>
            </select>
            <button className={styles.searchButton}><img src={glass} /></button>
          </div>
        </div>
        <div className={styles.topRight}>
          <nav>
            <ul>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contacts">Contact us</Link></li>
              <li><Link to="/support">Help & support</Link></li>
            </ul>
          </nav>
          <div className={styles.contacts}>
            <button><img alt="contact us in instagram" src={instagram} /></button>
            <button><img alt="contact us in facebook" src={facebook} /></button>
            <button><img alt="contact us in telegram" src={telegram} /></button>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomLeft}>
          <button className={styles.categories}>
            <img src={categories} />
            <span>Categories</span>
          </button>
          <div className={styles.selects}>
            <select>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
            </select>
            <select>
              <option value="en">English</option>
              <option value="sp">Spanish</option>
            </select>
          </div>
        </div>
        <div className={styles.bottomCenter}>
          <div className={styles.ann}>
            <div className="image">
              <img src={manCosm} alt="man cosmetic" />
            </div>
            <div className="text">
              <div className={styles.annHead}>Weekly Men's Toiletries Coupons.</div>
              <div className={styles.annDesc}>We extend exclusive discounts to our male clientele</div>
            </div>
          </div>
        </div>
        <div className={styles.bottomRight}>
          <Link to={userState === null ? "/authorization" : "/customer"}>
            <img src={user} />
            {userState === null ? "Sign in" : userState.name}
          </Link>
          <Link to="/favorites">
            <img src={heart} />
            <span>Favorites</span>
          </Link>
          <Link
            to={"/basket"}
            onMouseEnter={() => setShowBasket(true)}
            onMouseLeave={() => setShowBasket(false)}
          >
            <img src={card} />
            <span>Card</span>
            {itemList !== null && <div className={styles.countOrders}>{itemList.length}</div>}
            {
              itemList !== null ?
                <div className={styles.basketPos}>
                  <div className={
                    styles.basketField
                  }>
                    <div className={[isShowBasket ? styles.basketActive : styles.basketInactive, styles.basketAnim].join(" ")}>
                      <div className={styles.basket}>
                        <div>
                          {
                            itemList.map(item => {
                              return (
                                <div
                                  key={item.id}
                                  className={styles.basketElement}>
                                  <Link to={"/products/" + item.id}>
                                    <img
                                      src={"http://localhost:3000/cdn/" + item.photos[0]}
                                      alt="image"
                                      className={styles.basketElementImage} />
                                  </Link>
                                  <div className={styles.basketElementText}>
                                    <Link
                                      to={"/product/" + item.id}
                                      className={styles.basketElementTitle}>
                                      {item.name}
                                    </Link>
                                    <div className={styles.basketElementPrice}>
                                      <span>
                                        ${item.price * item.quantity}
                                        <span className={styles.basketElementPriceQuantity}>(x{item.quantity})</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              )
                            })
                          }
                        </div>
                        <div>
                          Total: <b>${_.sumBy(itemList, (prod: IProduct) => prod.price * prod.quantity).toFixed(2)}</b>
                        </div>
                        {<div className={styles.buttons}>
                          <Button size="tiny">View bag</Button>
                          <Link to="/checkout"><Button size="tiny" style="gray">Check out</Button></Link>
                        </div>}
                      </div>
                    </div>
                  </div>
                </div>
                : null
            }
          </Link>
        </div>
      </div>
    </header>
  )
}

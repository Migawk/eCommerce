import logo from "../../../assets/png/Logo.png";
import instagram from "../../../assets/svg/instagram.svg"
import telegram from "../../../assets/svg/telegram.svg"
import facebook from "../../../assets/svg/facebook.svg"
import glass from "../../../assets/svg/glass.svg"
import user from "../../../assets/svg/user.svg"
import heart from "../../../assets/svg/heart.svg"
import card from "../../../assets/svg/card.svg"
import categories from "../../../assets/svg/categories.svg"
import manCosm from "../../../assets/png/man-cosm.png"

import styles from "./Header.module.sass"

import { Link } from "react-router-dom";
import { useState } from "react";
import { useItems } from "../../../store/main.ts";

export default function Header() {
  const [isShowBasket, setShowBasket] = useState<boolean>(false);
  const itemList = useItems(state => state.items);
  const remove = useItems(state => state.removeItem);

    return (
        <header className={styles.header}>
            <div className={styles.top}>
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
                    <button>
                        <img src={user} />
                        <span>Sign in</span>
                    </button>
                    <button>
                        <img src={heart} />
                        <span>Favorite</span>
                    </button>
                    <button
                      onMouseEnter={(e) => setShowBasket(true)}
                      onMouseLeave={(e) => setShowBasket(false)}
                    >
                        <img src={card} />
                        <span>Card</span>
                        <div className={styles.countOrders}>{itemList.length}</div>
                        {
                          isShowBasket ? <div className={styles.basketPos}>
                          <div className={styles.basketField}>
                            <div className={styles.basket}>
                            <div>
                              {
                                itemList.map(item => {
                                  return (
                                    <div
                                      key={item.id}
                                      className={styles.basketElement}>
                                      <Link to={"/products/"+item.id}>
                                        <img
                                          src=""
                                          alt="image"
                                          className={styles.basketElementImage}/>
                                      </Link>
                                      <div className={styles.basketElementText}>
                                        <Link
                                          to={"/products/"+item.id}
                                          className={styles.basketElementTitle}>
                                          {item.name}
                                        </Link>
                                        <div className={styles.basketElementPrice}>
                                          ${item.price}
                                        </div>
                                      </div>
                                    </div>
                                  )
                                })
                              }
                            </div>
                            <div>Total: <b>$137.09</b></div>
                            </div>
                          </div>
                          </div> : null
                        }
                    </button>
                </div>
            </div>
        </header>
    )
}

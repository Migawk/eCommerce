import styles from "./about.module.sass";

import Button from "../../components/main/Button/Button";
import { Helmet } from "react-helmet";

import quotes from "../../assets/svg/quotes.svg";
import team from "../../assets/jpg/team.jpg";
import geo from "../../assets/svg/geo.svg";
import women from "../../assets/jpg/women.jpg";

import shop from "../../assets/svg/shop.svg";
import discount from "../../assets/svg/discount.svg";
import cargo from "../../assets/svg/cargo.svg";
import support from "../../assets/svg/support.svg";
import user from "../../assets/svg/user.svg";
import mail from "../../assets/svg/mail.svg";

export default function About() {
    return (
        <>
          <Helmet>
            <title>
              About
            </title>
          </Helmet>
          <main className={styles.main}>
              <nav>
                  Nav
              </nav>
              <div className={styles.wrapper}>
                  <div className={styles.text}>
                      <p className={styles.know}>Let's get to know Luminae</p>
                      <h1 className={styles.title}>Providing the best experience to make your <span className={styles.titleBlue}>Online Shopping</span></h1>
                      <div className={styles.description}>
                          At Luminae, we are more than just an online store – we are your ultimate destination for an unparalleled shopping experience. Our journey began with a simple yet powerful idea: to create a platform that not only offers a wide array of products but also fosters a sense of community and connection among our customers.
                      </div>
                      <div className={styles.stats}>
                          <div className={styles.stat}>
                              <div className="num">20+</div>
                              <div className="name">Shopping category</div>
                          </div>
                          <div className={styles.stat}>
                              <div className="num">10+</div>
                              <div className="name">Different Territory</div>
                          </div>
                          <div className={styles.stat}>
                              <div className="num">4M+</div>
                              <div className="name">Happy Client</div>
                          </div>
                      </div>
                  </div>
                  <div className="info">
                      <div className={styles.infoBox}>
                          <div className={styles.quotes}>
                              <div className={styles.quotesBorder}>
                                  <img src={quotes} />
                              </div>
                          </div>
                          <span className={styles.infoText}>We have made many people satisfied with our Platform</span>
                      </div>
                  </div>
              </div>
              <div className={styles.wrapper}>
                  <div className={styles.text}>
                      <p className={styles.know}>Know our service</p>
                      <h1 className={styles.title}>We offer the best service that will <span className={styles.titleBlue}>make it easier</span></h1>
                      <div className={styles.description}>
                          Discover unparalleled convenience with our top-tier service, designed to make your shopping experience smoother than ever.Experience shopping made effortless through our exceptional service that puts your needs at the forefront.
                          Elevate your shopping journey with our unmatched service, redefining convenience and satisfaction.
                      </div>
                      <div className={styles.cards}>
                          <div className={styles.card}>
                              <div className={styles.cardImg}>
                                  <img src={shop} />
                              </div>
                              <div className={styles.cardName}>Full category shop</div>
                              <div className={styles.cardDescription}>Explore our comprehensive online store where you'll find a diverse range of products across multiple categories, all curated to cater to your various needs and ...</div>
                              <Button style="blue">Read more</Button>
                          </div>
                          <div className={styles.card}>
                              <div className={styles.cardImg}>
                                  <img src={discount} />
                              </div>
                              <div className={styles.cardName}>Extraordinary discount</div>
                              <div className={styles.cardDescription}>
                                  Experience unparalleled savings on a wide selection of premium products that enhance your lifestyle without compromising on quality...
                              </div>
                              <Button style="blue">Read more</Button>
                          </div>
                          <div className={styles.card}>
                              <div className={styles.cardImg}>
                                  <img src={cargo} />
                              </div>
                              <div className={styles.cardName}>Free Cargo</div>
                              <div className={styles.cardDescription}>
                                  Enjoy the convenience of free cargo services, ensuring your purchases are delivered right to your doorstep without any additional cost. Experience seamless...
                              </div>
                              <Button>Read more</Button>
                          </div>
                          <div className={styles.card}>
                              <div className={styles.cardImg}>
                                  <img src={support} />
                              </div>
                              <div className={styles.cardName}>24-hour customer service</div>
                              <div className={styles.cardDescription}>
                                  Our commitment to exceptional customer care means our 24-hour customer service team is always available to assist you, ensuring your inquiries and concerns...
                              </div>
                              <Button>Read more</Button>
                          </div>
                      </div>
                  </div>
                  <div className={styles.info}>
                      <div className={styles.infoField}>
                          <img src={team} alt="websites team" />
                          <button className={styles.geo}>
                              <img src={geo} />
                              <span>Melbourne ,Australia</span>
                          </button>
                      </div>
                  </div>
              </div>
              <div className={styles.leaflet}>
                  <div className={styles.leafletForm}>
                      <h1 className={styles.leafletTitle}>
                          Tell us about your <span className={styles.leafletTitleGold}>Concerns</span>
                      </h1>
                      <form action="#" className={styles.form}>
                          <label className={styles.field}>
                              <div className={styles.fieldText}>Your Name</div>
                              <div className={styles.fieldContent}>
                                  <img src={user} />
                                  <input type="text" placeholder="Enter Your Name here"/>
                              </div>
                          </label>
                          <label className={styles.field}>
                              <div className={styles.fieldText}>Email</div>
                              <div className={styles.fieldContent}>
                                  <img src={mail} />
                                  <input type="text" placeholder="Enter Your Email here"/>
                              </div>
                          </label>
                          <label className={styles.field}>
                              <div className={styles.fieldText}>Description</div>
                              <textarea name="" placeholder="Tell us about your concerns"></textarea>
                          </label>
                          <Button>Send</Button>
                      </form>
                  </div>
                  <div className={styles.leafletImg}>
                      <img src={women} className={styles.img}/>
                  </div>
              </div>
          </main>
        </>
    )
}

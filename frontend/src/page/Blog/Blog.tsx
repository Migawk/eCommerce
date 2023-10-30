import cover from "../../assets/jpg/blog/cover.jpg";
import cover2 from "../../assets/jpg/blog/cover2.jpg";
import blond from "../../assets/jpg/blog/blond.jpg";
import man from "../../assets/jpg/blog/man.jpg";
import oclocks from "../../assets/jpg/blog/oclocks.jpg";
import phone from "../../assets/jpg/blog/phone.jpg";
import quotesAvatar from "../../assets/jpg/blog/quotesAvatar.jpg";
import set1 from "../../assets/jpg/blog/set1.jpg";
import set2 from "../../assets/jpg/blog/set2.jpg";
import set3 from "../../assets/jpg/blog/set3.jpg";
import set4 from "../../assets/jpg/blog/set4.jpg";

import clock from "../../assets/svg/clock.svg";
import heart from "../../assets/svg/heartFilled.svg";
import comment from "../../assets/svg/comment.svg";

import { Helmet } from "react-helmet"
import Button from "./components/Button";
import styles from "./blog.module.sass";

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog | Main</title>
      </Helmet>
      <main>
        <div className={styles.cover}>
          <div className={styles.coverInfo}>
            <div className={styles.bookmark}>
            </div>
            <div className={styles.post}>
              <h1>
                Stunning barefooted woman of 2023
              </h1>
              <p>
                In the heart of a chic urban studio, the atmosphere buzzed with
                excitement as a trendy fur coat took center stage during a vibrant
                photoshoot.
              </p>
              <div className={styles.postInfo}>
                <div className={styles.postPublish}>
                  <img src={clock} />
                  <span>20 July 2023</span>
                </div>
                <div className={styles.postLikes}>
                  <img src={heart} />
                  <span>830</span>
                </div>
                <div className={styles.postComments}>
                  <img src={comment} />
                  <span>19</span>
                </div>
              </div>
              <Button>Read more</Button>
              <div className={styles.slides}></div>
            </div>
          </div>
          <img src={cover} className={styles.coverImage} />
        </div>
        <article className={styles.article}>
          <div className={styles.blogs}>
            <section className={styles.blogWrapperFirst}>
              <div className={styles.WrapperBig}>
                <div className={styles.WrapperBigInfo}>
                  <h3>
                    Stylish woman in summer outfit isolated posing in fashion trend isolated
                  </h3>
                  <p>
                    In this captivating scene, a stylish woman stands confidently
                    against a pristine backdrop, capturing the essence of summer's
                    allure. Bathed in the gentle sunlight, she emanates an air of
                    effortless chic. Her outfit is a harmonious blend of
                    contemporary trends and timeless elegance, perfectly attuned
                    to the vibrant season.
                  </p>
                  <Button style="blue">Read more</Button>
                </div>
                <img src={cover2} />
              </div>
              <div className={styles.WrapperShort}>
                <img src={blond}/>
              </div>
              <div className={styles.WrapperNews}>
                <img src={man} className={styles.newsImage}/>
                <div className={styles.news}>
                  <div className={styles.newsHeading}>
                    Fashion
                  </div>
                  <div className={styles.newsTitle}>
                    Stylish young man out in town
                  </div>
                  <div className={styles.newsDescription}>
                    In the heart of the bustling city, a stylish young man
                    navigates the urban landscape with an air of contemporary
                    confidence. His ensemble effortlessly captures the essence
                    of city chic...
                  </div>
                  <div className={styles.newsFooter}>
                    <div className={styles.newsWritten}>
                      3 hours ago
                    </div>
                    <div className={styles.newsComments}>
                      <img src={comment} />
                      <span>21</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.WrapperNews}>
                <img src={oclocks} className={styles.newsImage}/>
                <div className={styles.news}>
                  <div className={styles.newsHeading}>
                    tech
                  </div>
                  <div className={styles.newsTitle}>
                  Aptkdoe Smartwatch Women Men
                  </div>
                  <div className={styles.newsDescription}>
                  It seems like you've mentioned "Aptkdoe Smartwatch"
                  in combination with "Women" and "Men." However, as
                  of my last knowledge update in September 2021, I don't
                  have specific...
                  </div>
                  <div className={styles.newsFooter}>
                    <div className={styles.newsWritten}>
                      4 hours ago
                    </div>
                    <div className={styles.newsComments}>
                      <img src={comment} />
                      <span>56</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.WrapperNews}>
                <img src={phone}  className={styles.newsImage}/>
                <div className={styles.news}>
                  <div className={styles.newsHeading}>
                    tech
                  </div>
                  <div className={styles.newsTitle}>
                  Anker 325 power bank
                  </div>
                  <div className={styles.newsDescription}>
                  Anker 325 power bank, 20000mAh external battery
                  PowerIQ technology USB-C port, enormous energy
                  density, compatible with iPhone, Samsung Galaxy,
                  iPad and more...
                  </div>
                  <div className={styles.newsFooter}>
                    <div className={styles.newsWritten}>
                      4 hours ago
                    </div>
                    <div className={styles.newsComments}>
                      <img src={comment} />
                      <span>10</span>
                    </div>
                  </div>
                </div>
              </div>
              <aside className={styles.blogAsider}>
                <div className={styles.blogQuote}>
                  <h2>Wireless Earbuds</h2>
                  <p>"I've been using the XYZ Wireless Earbuds for a few weeks now, and they've completely...</p>
                  <div className={styles.blogQuoteAuthor}>
                    <div>
                      <img src={quotesAvatar} className={styles.blogQuoteAuthorAvatar}/>
                    </div>
                    <div className={styles.blogQuoteAuthorStatus}>
                      <p>Nina Markez</p>
                      <p>Programmer</p>
                    </div>
                  </div>

                </div>
                <div className={styles.blogQuote}>
                  <h2>Wireless Earbuds</h2>
                  <p>"I've been using the XYZ Wireless Earbuds for a few weeks now, and they've completely...</p>
                  <div className={styles.blogQuoteAuthor}>
                    <div>
                      <img src={quotesAvatar} className={styles.blogQuoteAuthorAvatar}/>
                    </div>
                    <div className={styles.blogQuoteAuthorStatus}>
                      <p>Nina Markez</p>
                      <p>Programmer</p>
                    </div>
                  </div>

                </div>
                <div className={styles.blogQuote}>
                  <h2>Wireless Earbuds</h2>
                  <p>"I've been using the XYZ Wireless Earbuds for a few weeks now, and they've completely...</p>
                  <div className={styles.blogQuoteAuthor}>
                    <div>
                      <img src={quotesAvatar} className={styles.blogQuoteAuthorAvatar}/>
                    </div>
                    <div className={styles.blogQuoteAuthorStatus}>
                      <p>Nina Markez</p>
                      <p>Programmer</p>
                    </div>
                  </div>

                </div>
                <div className={styles.blogQuote}>
                  <h2>Wireless Earbuds</h2>
                  <p>"I've been using the XYZ Wireless Earbuds for a few weeks now, and they've completely...</p>
                  <div className={styles.blogQuoteAuthor}>
                    <div>
                      <img src={quotesAvatar} className={styles.blogQuoteAuthorAvatar}/>
                    </div>
                    <div className={styles.blogQuoteAuthorStatus}>
                      <p>Nina Markez</p>
                      <p>Programmer</p>
                    </div>
                  </div>

                </div>
              </aside>
            </section>
            <section className={styles.blogHeadTopic}>
              <h2>"Unveiling Timeless Elegance: Exploring the Allure of Vintage Fashion"</h2>
              <p>The Essence of Time Travel<br/>
    Vintage fashion allows us to transcend eras, stepping into the shoes of those who came before us. Each piece tells a story, offering a glimpse into the cultural and societal norms of its time. From the flapper dresses of the 1920s that embodied the spirit of rebellion to the tailored suits of the 1960s that epitomized sophistication, every era has its signature style waiting to be revived.
    Quality Beyond Compare<br/>
    One of the hallmarks of vintage fashion is the unparalleled craftsmanship that went into creating garments that stood the test of time. In a world where fast fashion often prioritizes quantity over quality, vintage pieces remind us of an era when attention to detail and durability were paramount. The feel of a vintage silk dress or the weight of a hand-sewn coat is a testament to the dedication of artisans of yesteryears.
    Eclectic Personal Style<br/>
    Embracing vintage fashion allows us to curate a wardrobe that's uniquely ours. Mixing and matching vintage pieces with contemporary items creates a personal style that defies categorization. From pairing a 1970s bohemian blouse with modern jeans to accessorizing a little black dress with vintage brooches, the possibilities are endless and the results are often strikingly original.
    Sustainable Chic<br/>
    As the world embraces sustainability, vintage fashion takes center stage as a prime example of eco-conscious style. Choosing pre-loved clothing not only reduces the demand for new production but also breathes new life into garments that might otherwise be forgotten. It's a nod to slow fashion, a movement that encourages thoughtful consumption and reduces the impact on the environment.
              </p>
            </section>
            <section className={styles.gallery}>
              <img src={set1} className={styles.galleryGreatest}/>
              <img src={set2} className={styles.gallerySmall}/>
              <img src={set3} className={styles.gallerySmall}/>
              <img src={set4} className={styles.gallerySmall}/>
            </section>
          </div>
        </article>
      </main>
    </>
  )
}

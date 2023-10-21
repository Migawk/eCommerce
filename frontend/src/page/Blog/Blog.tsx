import cover from "../../assets/jpg/blog/cover.jpg";
import cover2 from "../../assets/jpg/blog/cover2.jpg";
import blond from "../../assets/jpg/blog/blond.jpg";
import man from "../../assets/jpg/blog/man.jpg";
import oclocks from "../../assets/jpg/blog/oclocks.jpg";
import phone from "../../assets/jpg/blog/phone.jpg";

import clock from "../../assets/svg/clock.svg";
import heart from "../../assets/svg/heartFilled.svg";
import comment from "../../assets/svg/comment.svg";

import Button from "./components/Button";
import styles from "./blog.module.sass";

export default function Blog() {
  return (
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
      <article>
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
          </section>
          <aside>
          </aside>
        </div>
      </article>
    </main>
  )
}

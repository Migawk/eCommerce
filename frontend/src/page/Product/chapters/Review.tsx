import Button from "../../../components/main/Button/Button";
import { IReview } from "../../../types/products";
import styles from "../product.module.sass";
import star from "../../../assets/svg/star.svg";
import starActive from "../../../assets/svg/starActive.svg";
import StatisticBar from "../../../components/main/Stars/StatisticBar";

export default function Reviews({ reviews }: { reviews: IReview[] }) {
    return (
        <section>
            <div className={styles.chapterReviews}>
                <div className={styles.reviewHeader}>
                    <div><b>Total review rate</b></div>
                    <div className={styles.reviewHeaderInfo}>
                        <p>Average rating ({reviews.length} reviews & 125 rating)</p>
                    </div>
                    <Button style="gray">Write a customer review</Button>
                </div>
                <div className={styles.reviewStatistics}>
                    <StatisticBar name="5 Stars" bit={86} wholeNumber={120} />
                    <StatisticBar name="4 Stars" bit={20} wholeNumber={120} />
                    <StatisticBar name="3 Stars" bit={10} wholeNumber={120} />
                    <StatisticBar name="2 Stars" bit={1} wholeNumber={120} />
                    <StatisticBar name="1 Stars" bit={3} wholeNumber={120} />
                </div>
            </div>
            <div>
                {
                    reviews.map(review => {
                        return <div key={review.user.id} className={styles.review}>
                            <div className={styles.reviewTop}>
                                <div className={styles.reviewRate}>
                                    <img src={starActive} />
                                    <img src={starActive} />
                                    <img src={starActive} />
                                    <img src={starActive} />
                                    <img src={star} />
                                </div>
                                <div className={styles.reviewFieldName}>By {review.user.name}</div>
                            </div>
                            <div className={styles.reviewFields}>
                                <div className={styles.reviewField}>
                                    <div className={styles.reviewFieldName}>Advantages</div>
                                    <div className={styles.reviewFieldValue}>{review.adventages}</div>
                                </div>
                                <div className={styles.reviewField}>
                                    <div className={styles.reviewFieldName}>Disadvantages</div>
                                    <div className={styles.reviewFieldValue}>{review.disadventages}</div>
                                </div>
                                <div className={styles.reviewField}>
                                    <div className={styles.reviewFieldName}>Review</div>
                                    <div className={styles.reviewFieldValue}>{review.description}</div>
                                </div>
                            </div>
                        </div>;
                    })
                }
            </div>
        </section >
    )
}
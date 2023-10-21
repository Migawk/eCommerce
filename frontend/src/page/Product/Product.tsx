import styles from "./product.module.sass";

import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

import Navigation from "../../components/main/Navigation/Navigation";
import Details from "./chapters/Details";
import Err404 from "../404/Err404";

import IProduct, { IReview } from "../../types/products";
import Quantity from "../../components/main/Quantity/Quantity";
import Button from "../../components/main/Button/Button";
import heart from "../../assets/svg/heartFilled.svg";

import { createPortal } from "react-dom";
import Reviews from "./chapters/Review";
import Shipping from "./chapters/Shipping";

export default function ProductPage() {
    const { id } = useParams();

    const [product, setProduct] = useState<undefined | 404 | IProduct>(undefined);
    const [photos, setPhotos] = useState<string[]>([]);
    const [reviews, setReviews] = useState<IReview[]>([]);
    const [choosed, setChoosed] = useState<number>(0);
    const [chapter, setChapter] = useState<"details" | "reviews" | "shipping">("details");
    const [isModal, setModal] = useState<boolean>(false);

    useEffect(() => {
        if (product) return;
        fetch("http://localhost:3000/product/" + id)
            .then(res => res.json())
            .then((res: { message: number | string } | IProduct) => {
                if ("message" in res) {
                    setProduct(404);
                } else {
                    setProduct(res);
                    res.photos.forEach(photo => {
                        fetch("http://localhost:3000/cdn/" + photo)
                            .then(res => res.blob())
                            .then((res) => {
                                setPhotos(prS => prS.concat([URL.createObjectURL(res)]));
                            });
                    });
                    fetch("http://localhost:3000/product/"+id+"/reviews")
                        .then(res => res.json())
                        .then(res => {
                            setReviews(res);
                        });

                }
            });
    }, []);

    if (!product) return <h1>Loading...</h1>;
    if (!id || product === 404) return <Err404 />;
    if (photos.length < product.photos.length) return <h1>Loading..</h1>;
    return (
        <main className={styles.main}>
            <Navigation row={
                [
                    { name: "Homepage", link: "/" },
                    { name: "Products", link: "/" },
                    { name: product.name, link: "/product/" + product.id }
                ]
            } />
            <article className={styles.article}>
                <section className={styles.photo}>
                    <div className={styles.list}>
                        {
                            photos.map((photo, ind) => {
                                return <img
                                    key={photo}
                                    src={photo}
                                    width={128}
                                    height={192}
                                    className={ind === choosed ? styles.listChoosed : undefined}
                                    onClick={() => setChoosed(ind)} />
                            })
                        }
                    </div>
                    <div
                        className={styles.choosedPhoto}
                        onClick={() => setModal(pr => !pr)}>
                        <img
                            src={photos[choosed]}
                            height={664}
                            width={500}
                        />
                    </div>
                    {
                        isModal ?
                            createPortal(<div className={styles.choosedPhotoModal} onClick={() => setModal(pr => !pr)}>
                                <img
                                    src={photos[choosed]}
                                    height={664}
                                    width={500}
                                />
                            </div>, document.body)
                            : null
                    }
                </section>
                <section className={styles.info}>
                    <div className={styles.infoTop}>
                        <div className={styles.infoTopLeft}>
                            <h1>{product.name}</h1>
                            <h2>${product.price - 0.01}</h2>
                        </div>
                        <div className={styles.infoTopRight}>
                            <button className={styles.infoTopButton}>
                                <img src={heart} />
                            </button>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <div className={styles.size}>
                            <div className={styles.sizeText}>Size</div>
                            <div className={styles.sizeFields}>
                                {product.size.map(size => {
                                    const handled = size.split(", ") as [string, string];
                                    const isAviable: boolean = handled[1] === "AVIABLE";

                                    return <button
                                        key={size}
                                        disabled={!isAviable}
                                        className={isAviable ? styles.sizeAviable : styles.sizeDisabled}
                                    >{handled[0]}</button>;
                                })}
                            </div>
                        </div>
                        <div className={styles.color}>
                            <div className={styles.colorText}>Color</div>
                            <div className={styles.colorFields}>
                                {product.colors.map(color => {
                                    return (
                                        <div style={{ background: color }}>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={styles.shipping}>
                            <div className={styles.shippingText}>Shipping</div>
                        </div>
                        <div className={styles.quantity}>
                            <div className={styles.quantityText}>Quantity</div>
                            <div className={styles.quantityFields}>
                                <Quantity name="count" min={1} max={product.countLeft} />
                                <span>{product.countLeft} available / {product.countSold} sold</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.check}>
                        <div className={styles.checkPrice}>${product.price - .01}
                        </div>
                        <div className={styles.checkInsurance}>
                            <button className={styles.checkAdd}>+</button>
                            <p>
                                Add shipping insurance for $9
                                <span className={styles.checkInsuranceSmall}>
                                    ( declared value  only if the package gets lost,
                                    stolen or damaged.)
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <Button><div onClick={() => setChapter("shipping")}>Shop Now</div></Button>
                        <Button style="gray">Add to Basket</Button>
                    </div>
                </section>
            </article>
            <article className={styles.chapters}>
                <section className={styles.chaptersButtons}>
                    <button
                        disabled={chapter === "details"}
                        onClick={() => setChapter("details")}
                    >PRODUCT DETAILS</button>
                    <button
                        disabled={chapter === "reviews"}
                        onClick={() => setChapter("reviews")}
                    >REVIEWS ({product._count.reviews})</button>
                    <button
                        disabled={chapter === "shipping"}
                        onClick={() => setChapter("shipping")
                        }>SHIPPING & PAYMENT</button>
                </section>
                {chapter == "details" ?
                    <Details product={product}/>
                    : null}
                {chapter == "reviews" ?
                    <Reviews reviews={reviews}/>
                    : null}
                {chapter == "shipping" ?
                    <Shipping shipping={product.shipping}/> : null
                }
            </article>
            <article className={styles.offerFooter}>
                <section>
                    <h3>YOU MIGHT ALSO LIKE</h3>
                    <div className="list">listOfClothes</div>
                </section>
            </article>
        </main>
    )
}
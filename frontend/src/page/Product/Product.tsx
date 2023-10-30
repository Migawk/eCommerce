import styles from "./product.module.sass";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useItems } from "../../store/main.ts";
import { createPortal } from "react-dom";

import Navigation from "../../components/main/Navigation/Navigation";
import Details from "./chapters/Details";
import Err404 from "../404/Err404";
import { Helmet } from "react-helmet"
import Quantity from "../../components/main/Quantity/Quantity";
import Button from "../../components/main/Button/Button";

import Reviews from "./chapters/Review";
import Shipping from "./chapters/Shipping";

import IProduct, { IReview } from "../../types/products";

import heart from "../../assets/svg/heartFilled.svg";


export default function ProductPage() {
    const { id } = useParams();

    const [product, setProduct] = useState<undefined | 404 | IProduct>(undefined);
    const [photos, setPhotos] = useState<string[]>([]);
    const [reviews, setReviews] = useState<IReview[]>([]);
    const [choosed, setChoosed] = useState<number>(0);
    const [chapter, setChapter] = useState<"details" | "reviews" | "shipping">("details");
    const [isModal, setModal] = useState<boolean>(false);
    const [quantity, setQuantity] = useState<number>(1);

    const add = useItems((state) => state.addItem);
    const list = useItems((state) => state.items);

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
      <>
        <Helmet>
          <title>Product | {product.name}</title>
        </Helmet>
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
                                    const isAvailable: boolean = handled[1] === "AVAILABLE";

                                    return <button
                                        key={size}
                                        disabled={!isAvailable}
                                        className={isAvailable ? styles.sizeAviable : styles.sizeDisabled}
                                    >{handled[0]}</button>;
                                })}
                            </div>
                        </div>
                        <div className={styles.color}>
                            <div className={styles.colorText}>Color</div>
                            <div className={styles.colorFields}>
                                {product.colors.map(color => {
                                    return (
                                        <div style={{ background: color }} key={color}>
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
                                <Quantity name="count" min={1} max={product.countLeft} onChange={setQuantity}/>
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
                        <Button><div onClick={() => {
                          setChapter("shipping");
                          setTimeout(() => {
                            const elem = document.getElementById("chapters").scrollIntoView();
                          }, 250); // It works only if you touch text
                        }}>Shop Now</div></Button>
                        <Button style="gray">
                        <div onClick={() => {
                          add({...product, quantity});
                        }}>Add to Basket</div>
                        </Button>
                    </div>
                </section>
            </article>
            <article className={styles.chapters} id="chapters">
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
      </>
    )
}

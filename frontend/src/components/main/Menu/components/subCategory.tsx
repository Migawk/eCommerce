import styles from "../menu.module.sass";
import woman from "../../../../assets/jpg/woman.jpg";
import lodash from "lodash";

export default function SubCategory({left}: {left: number}) {
	const rawCategories: { name: string, items: { name: string, link: string }[] }[] = [
		{
			name: "Shoe & Bag",
			items: [
				{
					name: "Casual Shoes",
					link: "/category/shoe-bag/casual"
				},
				{
					name: "Boots",
					link: "/category/shoe-bag/boots"
				},
				{
					name: "Sandals",
					link: "/category/shoe-bag/sandals"
				},
				{
					name: "Slippers",
					link: "/category/shoe-bag/slippers"
				}
			]
		},
		{
			name: "Luxury & Designer",
			items: [
				{
					name: "Towels",
					link: "/category/luxury-design/towels"
				},
				{
					name: "Bathroom Scale",
					link: "/category/luxury-design/bath"
				},
				{
					name: "Bath Maths",
					link: "/category/luxury-design/bath-math"
				},
				{
					name: "Shower Caps",
					link: "/category/luxury-design/shower"
				}
			]
		},
		{
			name: "Home Textile",
			items: [
				{
					name: "Bedding",
					link: "/category/home/bedding"
				},
				{
					name: "pillows",
					link: "/category/home/pillows"
				},
				{
					name: "Handkerchief Towels",
					link: "/category/home/towels"
				},
				{
					name: "Curtain",
					link: "/category/home/curtain"
				}
			]
		},
		{
			name: "Cosmetics",
			items: [
				{
					name: "Shampoo and Conditioner",
					link: "/category/cosmetics/shampoo-conditioner"
				}
			]
		},
		{
			name: "Party Supplies",
			items: [
				{
					name: "Event & Party",
					link: "/category/party/events"
				},
				{
					name: "Christmas",
					link: "/category/party/christmas"
				},
				{
					name: "Artificial Decorations",
					link: "/category/party/decor"
				},
				{
					name: "Wedding",
					link: "/category/party/wedding"
				}
			]
		},
		{
			name: "Sport & Outdoors",
			items: [
				{
					name: "Team Sports",
					link: "/category/sport/team"
				},
				{
					name: "Water Sports",
					link: "/category/sport/water"
				},
				{
					name: "Outdoor Recreation",
					link: "/category/sport/outdoor"
				},
				{
					name: "Fitness Equipment",
					link: "/category/sport/fitness"
				}
			]
		},
		{
			name: "Clothes",
			items: [
				{
					name: "Bottoms",
					link: "/category/clothes/bottoms"
				},
				{
					name: "Women's Clothing",
					link: "/category/clothes/women"
				},
				{
					name: "T-Shirts and Tops",
					link: "/category/clothes/t-shirt"
				},
				{
					name: "Dresses",
					link: "/category/clothes/dress"
				},
				{
					name: "Outerwear",
					link: "/category/clothes/outwear"
				},
				{
					name: "Formal Wear",
					link: "/category/clothes/formal"
				},
				{
					name: "Casual Wear",
					link: "/category/clothes/casual"
				},
				{
					name: "Seasonal Collections",
					link: "/category/clothes/season"
				},
				{
					name: "Sports Bras",
					link: "/category/clothes/sport-bras"
				},
				{
					name: "Workout Tops",
					link: "/category/clothes/workout"
				},
				{
					name: "Fall Wardrobe",
					link: "/category/clothes/fall"
				},
			]
		}
	]

	const categories = lodash.chunk(rawCategories,2);
	return (
		<div className={styles.subCategory} id="subCategory" style={{left: left + "px"}}>
			<div className={styles.navigation} id="ignore">
					{
						categories.map(el => {
							return (
								<div className={styles.group} id="ignore">
									{el.map(category => {
										return (
											<div id="ignore">
												<h2 className={styles.categoryName} id="ignore">{category.name}</h2>
												<ul className={styles.items} id="ignore">
													{
														category.items.map(subCategory => {
															return (
																<li id="ignore">
																	{subCategory.name}
																</li>
															)
														})
													}
												</ul>
											</div>
										)
									})}
								</div>
							)
						})
					}
					<div className="photo">
						<img src={woman} alt="A photo" />
					</div>
			</div>
		</div>
	)
}

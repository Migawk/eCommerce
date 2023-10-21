import Group from "../../components/main/cardGroup/Group.tsx";
import Leaflet from "../../components/main/Card/components/Leaflets.tsx";
import Slider from  "../../components/main/Slider/Slider.tsx";
import { ILeaflet } from "../../types/cards.ts";

import leafWoman from "../../assets/jpg/leafwoman.jpg";
import leafWoman2 from "../../assets/jpg/leafwoman2.jpg";
import leafWoman3 from "../../assets/jpg/leafwoman3.jpg";
import leafWoman4 from "../../assets/jpg/leafwoman4.jpg";
import trend1 from "../../assets/jpg/trend1.jpg";
import trend2 from "../../assets/jpg/trend2.jpg";
import trend3 from "../../assets/jpg/trend3.jpg";
import purse from "../../assets/png/purse.png";

export default function Main() {

  const products = [
    {
      timeout: new Date(Date.now()+Math.random()*200000),
      discount: 69.99,
      price: 129.99,
      photo: purse,

      id: 1,
      name: "Tonny Black",
      description: "Shoulder bag-White-Plain",

      rating: 4,
      ratingCount: 58,
    },
    {
      timeout: new Date(Date.now()+Math.random()*200000),
      discount: 69.99,
      price: 129.99,
      photo: purse,

      id: 2,
      name: "Tonny Black",
      description: "Shoulder bag-White-Plain",

      rating: 4,
      ratingCount: 58,
    },
    {
      timeout: new Date(Date.now()+Math.random()*200000),
      discount: 69.99,
      price: 129.99,
      photo: purse,

      id: 3,
      name: "Tonny Black",
      description: "Shoulder bag-White-Plain",

      rating: 4,
      ratingCount: 58,
    },
    {
      timeout: new Date(Date.now()+Math.random()*200000),
      discount: 69.99,
      price: 129.99,
      photo: purse,

      id: 4,
      name: "Tonny Black",
      description: "Shoulder bag-White-Plain",

      rating: 4,
      ratingCount: 58,
    },
  ]
  const trends = [
    {
      timeout: new Date(Date.now()+Math.random()*200000),
      price: 89.99,
      photo: trend1,

      id: 1,
      name: "Cool & Sexy Calvin Klein",
      description: "Dotted dress-Casual",

      rating: 4,
      ratingCount: 58,
    },
    {
      timeout: new Date(Date.now()+Math.random()*200000),
      price: 89.99,
      photo: trend2,

      id: 2,
      name: "Cool & Sexy Calvin Klein",
      description: "Dotted dress-Casual",

      rating: 4,
      ratingCount: 58,
    },
    {
      timeout: new Date(Date.now()+Math.random()*200000),
      price: 89.99,
      photo: trend3,

      id: 3,
      name: "Tonny Black",
      description: "Shoulder bag-White-Plain",

      rating: 4,
      ratingCount: 58,
    },


  ]
  const leaflets: ILeaflet[][] = [
    [
      {
        title: "Never-Ending Summer",
        description: "Throwback Shirts & all-day dressed",
        link: "#",
        img: leafWoman2,
        color: "#BF2E3B"
      },
      {
        title: "The most famous sport brands",
        description: "Get in gym essentials",
        link: "#",
        img: leafWoman,
        color: "#1D5159"
      },
    ],
    [
      {
        title: "The Pinky Barbie Edition",
        description: "Lets play dress up",
        link: "#",
        img: leafWoman3,
        color: "#D11FB5"
      },
      {
        title: "Best Sellers Everyone Love",
        description: "poolside glam include",
        link: "#",
        img: leafWoman4,
        color: "#0186C4"
      },
    ],
  ]

  return (
    <main>
      <article>
        <Group
          name="Flash Sales"
          link="#"
          cards={products}
        />
        <Group
          name="Trending must-haves"
          link="#"
          cards={trends}
          type="big"/>
        <Group name="Top100" link="#" cards={products}/>
        {leaflets[0] ? <Leaflet data={leaflets[0] as any}/> : null}
        <Slider/>
        {leaflets[1] ? <Leaflet data={leaflets[1] as any}/> : null}x
      </article>
    </main>
  )
}

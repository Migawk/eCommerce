import styles from "../card.module.sass";
import { Link } from "react-router-dom";
import { ILeaflet } from "../../../../types/cards.ts";

function Leaflet({title, description, link, img, color}: ILeaflet) {
  return (
    <div className={styles.leaflet} style={{background: color}}>
      <div className={styles.leafletInfo}>
        <div className={styles.leafletTop}>
          <h1>{title}</h1>
          <h2>{description}</h2>
        </div>
        <Link to={link} className={styles.leafletLink}>Explore all category</Link>
      </div>
      <img src={img}/>
    </div>
  )
}

export default function Leaflets({data}: {data: [ILeaflet, ILeaflet]}) {
  if(data === undefined) return <div>Couldn't to load</div>;
  return (
    <div className={styles.leaflets}>
      {
        data.map(leaflet => { // however, there are only 2 leaflets, look at params type.
          return (
            <Leaflet
              title={leaflet.title}
              description={leaflet.description}
              link={leaflet.link}
              img={leaflet.img}
              color={leaflet.color}
            />
          )
        })
      }
    </div>
  )
}

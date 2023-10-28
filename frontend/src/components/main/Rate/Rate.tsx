import starA from "../../../assets/svg/starActive.svg";
import star from "../../../assets/svg/star.svg";

export default function Rate({stars}: {stars: number}) {
  return (
    <>
      {
        Array.from({length: stars}, (val, ind) => {
          return <img src={starA} key={ind}/>
        })
      }
      {
        Array.from({length: 5-stars}, (val, ind) => {
          return <img src={star} key={ind}/>
        })
      }

    </>
  )
}

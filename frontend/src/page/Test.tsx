import { replaceAll, toMD } from "../helpers/string";

export default function Test() {
    console.log(replaceAll("12\\n3\\n5\\n7\\n", "\\n", "<br/>"));
    return (
        <p dangerouslySetInnerHTML={{ __html: toMD(replaceAll("12\\n3\\n5\\n7\\n", "\\n", "<br/>")) }}></p>
        // <Quantity name="count" min={1} max={25}/>
    )
}
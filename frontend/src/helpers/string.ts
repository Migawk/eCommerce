import _ from "lodash";
import { marked } from "marked";

export function replaceAll(text: string, pattern: string, replacement: string) {
    const formated = _.replace(text, pattern, replacement);
    if(_.includes(formated, pattern)) return replaceAll(formated, pattern, replacement);
    return formated;
}
export function toMD(text: string) {
    return marked.parse(text);
}
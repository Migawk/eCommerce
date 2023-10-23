/**
  * @name ManyToMany_parser
  * @description "uses for writing connections."
  * @example
  *   MtMParser(["1234", "1235"], "id");
  *   // [{"id": "1234"}, {"id": "1235"}]
  * @return [{"name": "array[n]"}]
*/
export function MtMParser(array: string[], name: string) {
  return array.map(el => {
    const obj = {};
    obj[name] = el;
    return obj;
  })
}

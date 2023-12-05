export const myObject = {
  a: 1,
  b: 2,
  c: 3,
};
type Keys = keyof typeof myObject;
// [a,b,c]
function getObjectKeys<O extends Record<string, any>>(obj: O): (keyof O)[] {
  return Object.keys(obj) as (keyof O)[];
}
getObjectKeys(myObject).forEach((key) => {
  console.log(myObject[key]);
  // console.log(myObject["x"]);
});

export const getDeepValue = <
  Obj extends Record<string, any>,
  FirstKey extends keyof Obj,
  SecondKey extends keyof Obj[FirstKey]
>(
  obj: Obj,
  firstKey: FirstKey,
  secondKey: SecondKey
) => {
  return obj[firstKey][secondKey];
};
const obj = {
  bar: {
    d: 2,
  },
};
// obj[key] -> obj["bar"]
type ObjKeys = keyof typeof obj;
const result = getDeepValue(obj, "bar", "d");
console.log("file: 4.get-deep-value-object-solution.ts:20 ~ result:", result);
// result = 2

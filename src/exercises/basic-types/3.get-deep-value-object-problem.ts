export const getDeepValue = <Obj, FirstKey extends keyof Obj, SecondKey>(
  obj: Obj,
  firstKey: FirstKey,
  secondKey: SecondKey
) => {
  return {} as any;
};
const obj = {
  bar: {
    d: 2,
  },
};
const result = getDeepValue(obj, "bar", "d");

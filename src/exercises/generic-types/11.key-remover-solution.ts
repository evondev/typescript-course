export const makeKeyRemover =
  <K extends string>(keys: K[]) =>
  <O extends Record<string, any>>(obj: O): Omit<O, K> => {
    return obj;
  };

const keyRemover = makeKeyRemover(["a"]);

const newObject = keyRemover({ a: 1, b: 2, c: 3 });
console.log(newObject.b);
console.log(newObject.c);

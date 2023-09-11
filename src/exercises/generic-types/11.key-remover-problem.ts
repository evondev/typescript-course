export const makeKeyRemover = () => () => {};

const keyRemover = makeKeyRemover(["a", "b"]);

const newObject = keyRemover({ a: 1, b: 2, c: 3 });

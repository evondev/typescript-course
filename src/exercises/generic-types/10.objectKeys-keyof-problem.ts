export const myObject = {
  a: 1,
  b: 2,
  c: 3,
};

Object.keys(myObject).forEach((key) => {
  console.log(myObject[key]);
});

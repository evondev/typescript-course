const fruitCount = {
  apple: 1,
  pear: 4,
  banana: 26,
};

type SingleFruitCount = unknown;
// type SingleFruitCount =
//   | {
//       apple: number;
//     }
//   | {
//       banana: number;
//     }
//   | {
//       pear: number;
//     };
const singleFruitCount: SingleFruitCount = {
  banana: 12,
};

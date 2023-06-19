const fetchingCars = () => {
  return Promise.resolve({
    id: 1,
    name: "BMW",
    price: "$100000",
    color: "blue",
  });
};
type FetchingCars = unknown;
/* Expected
type FetchingCars = {
  id: number;
  name: string;
  price: string;
  color: string;
}*/
export {};

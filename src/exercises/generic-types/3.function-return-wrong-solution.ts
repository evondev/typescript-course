type User = {
  id: number;
  kind: string;
};
type DemoA = {
  id: 1;
  kind: "admin";
  age: number;
  book: "reactjs";
} extends {
  id: 1;
  kind: "admin";
}
  ? true
  : false;
function makeCustomer<T extends User>(u: T): T {
  // Below error, why?
  return {
    ...u,
    id: u.id,
    kind: "customer",
  };
}
export {};

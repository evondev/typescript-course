// 1. Required<Type>
type Books = {
  name?: string;
  price?: number;
  image?: string;
};
type BooksRequired = Required<Books>;
const book1: Books = {
  name: "Harry Potter",
};
const book2: BooksRequired = {
  name: "Harry Potter",
  price: 2000,
  image: "https://source.unsplash.com/random",
};
// 2. Pick<Type, Keys>
type BookOption = Pick<Required<Books>, "name" | "image">;
const book3: BookOption = {
  name: "Harry",
  image: "https://source.unsplash.com/random",
};
// 3. Partial<Type>
const book4: Partial<BooksRequired> = {};
// 4. Readonly<Type>
const book5: Readonly<Books> = {
  name: "Harry potter",
};
// book5.name = "evondev";
// 5. Record<Keys, Type>
type CatObj = Record<
  "boo" | "baa",
  {
    name: string;
    age: number;
  }
>;
const myCat: CatObj = {
  boo: {
    name: "boo",
    age: 1,
  },
  baa: {
    name: "boo",
    age: 1,
  },
};
// 6: Omit<Type, Keys>
type BookOption2 = Omit<Required<Books>, "name" | "image">;
const book6: BookOption2 = {
  price: 1000,
  // ❌ image: ""
};

export {};

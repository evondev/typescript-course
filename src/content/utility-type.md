# ReturnType<Type>

- Type truyền vào phải là function
- Dùng để lấy ra type của return function

```ts
function sum(a: number, b: number): number {
  return a + b;
}
function logMyName(): string {
  return "evondev";
}
type SumF = ReturnType<typeof sum>; // number
type LogMyNameF = ReturnType<typeof logMyName>; // string
```

# Parameters<Type>

- Type truyền vào cũng phải là function
- Trả ra mảng chứa các parameters của function

```ts
type Parameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
function logObject(x: number) {}
type Z = Parameters<typeof logObject>; // [x: number]
```

# Exclude<UnionType, ExcludeMembers>

- Exclude truyền vào Union Type và các phần tử muốn exclude(loại bỏ) ra khỏi Union Type
- Như đoạn code dưới thì sẽ loại bỏ "a" ra khỏi union "a" | "b" | "c"
- Hoặc loại bỏ object có kind là `circle` khỏi type `Shape`

```ts
type Exclude<T, U> = T extends U ? never : T;
type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };

type T1 = Exclude<Shape, { kind: "circle" }>;
```

# Extract<Type, Union>

- Ngược lại với Exclude, Extract dùng để lấy ra Type mà có tồn tại ở Union Type
- Như đoạn code ở dưới thì sẽ lấy ra object có kind là `circle` thay vì loại nó ra như ở Exclude

```ts
type Extract<T, U> = T extends U ? T : never;
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };

type T2 = Extract<Shape, { kind: "circle" }>;
// type T2 = {
//   kind: "circle";
//   radius: number;
// };
```

# Required<Type>

- Biến các properties trong `Type` thành bắt buộc(required)

```ts
type Books = {
  name?: string;
  price?: number;
  image?: string;
};
type BooksRequired = Required<Books>;
// Resulst 👇
// type BooksRequired = {
//   name: string;
//   price: number;
//   image: string;
// };
```

# Pick<Type, Keys>

- Lấy ra các `Keys` từ một Type nào đó, Keys sẽ nằm dưới dạng là union type

```ts
type BookOption = Pick<Required<Books>, "name" | "image">;
// type BookOption = {
//     name: string;
//     image: string;
// }
const book3: BookOption = {
  name: "Harry",
  image: "https://source.unsplash.com/random",
};
```

# Omit<Type, Keys>

- Ngược lại với Pick, Omit loại ra các `Keys` từ một Type nào đó, Keys sẽ nằm dưới dạng là union type

```ts
type BookOption = Omit<Required<Books>, "name" | "image">;
// type BookOption = {
//     price: number;
// }
const book3: BookOption = {
  price: 1000,
};
```

# Partial<Type>

- Ngược lại với Required thì Partial sẽ biến các properties từ bắt buộc thành không bắt buộc

```ts
type Books = {
  name?: string;
  price?: number;
  image?: string;
};
type BooksRequired = Required<Books>;
const book4: Partial<BooksRequired> = {};
```

# Readonly<Type>

- Thay đổi các properties trong Type thành readonly(chỉ đọc), không được thay đổi giá trị

```ts
const book5: Readonly<Books> = {
  name: "Harry potter",
};
// ❌ Error: Cannot assign to 'name' because it is a read-only property.ts(2540)
book5.name = "evondev";
```

# Record<Keys, Type>

- Giúp chúng ta tạo ra object có các keys và Type tương ứng

```ts
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
```

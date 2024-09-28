# Basic Types

- Để khai báo Type trong Typescript thì chúng ta sử dụng cú pháp dấu 2 chấm(conlon)
- keyword(let, var, const) variableName: type = value;
- param: type = value;

```typescript
let score: number = 10;
// Error: Type 'string' is not assignable to type 'number'.
score = "10";
```

- Type `any` cho phép sử dụng bất kỳ giá trị nào, hạn chế sử dụng type `any` nhất có thể
- Type `number` dành cho giá trị là số -> 10, 10.5
- Type `string` dành cho giá trị là chuỗi -> "javascript", "typescript"
- Type `boolean` dành cho giá trị true hoặc false
- Type `unknown` dành cho những biến hoặc params mà chúng ta chưa xác định được type rõ ràng của nó là gì
- Sử dụng `typeof variableName` để kiểm tra type của một biến
- Chỉ sử dụng typeof trực tiếp vào biến hoặc param, chứ không sử dụng vào Type được
- Type `null` chỉ sử dụng được cho giá trị null
- Type `undefined` chỉ sử dụng được cho giá trị undefined
- `{}` là 1 type đặc biệt trong Typescript, nó có tất cả giá trị ngoại trừ `null` và `undefined` và không nên dùng khi khai báo cho các giá trị
- Khi làm việc với object thì nên khai báo rõ ràng hoặc dùng `Record<string, any>`

```typescript
const student: {
  name?: string;
  age?: number;
} = {
  name: "evondev",
  age: 29,
};
const scores: number[] = [1, 2, 3, 4, 5];
const scores: (number | string | boolean)[] = [1, "evondev", 3, false, 5];
```

```typescript
type Example = {};
typeof 10; // number
typeof Example;
```

- Type `never` không gán được bất kỳ giá trị nào
- Type `never` được sử dụng cho các giá trị hoặc hàm không bao giờ hoàn thành hoặc không bao giờ trả về giá trị

```typescript
function infiniteLoop(): never {
  while (true) {
    // Infinite loop
  }
}
function throwError(message: string): never {
  throw new Error(message);
}
```

- Dấu ? nằm sau property nghĩa là optional(không bắt buộc)
- Union type |

```typescript
string | number;
(string | number)[];
```

- Intersection type &

```typescript
{name: string} & {age: number}
```

- Sử dụng `typeof` vào biến để kiểm tra type của 1 biến nào đó
- Để khai báo type trong typescript thì chúng ta sử dụng từ khóa là `interface` và `type`
- Tên type thì viết theo PascalCase nghĩa là tất cả chữ cái đầu đều in hoa

```typescript
type SomethingElse = {
  x: number;
};
interface SomethingElse {
  x: number;
}
```

- Sử dụng `in` để kiểm tra 1 thuộc tính nào đó còn tồn tại trong object nào đó hay không ? Phù hợp khi kiểm tra với Union Type

```typescript
type A = {
  x: number;
};
type B = {
  y: string;
};
type C = A | B;
function checkInfo(info: C) {
  if ("x" in info) {
    console.log(info.x);
  }
  if ("y" in info) {
    console.log(info.y);
  }
}
```

- Khi chúng ta sử dụng dấu : (conlon) để khai báo type thì cái type nó sẽ mạnh hơn cái value (Type beats Value) Matt Pocock
- `satisfies` thì cái Value sẽ đánh bại cái Type (Value beats Type)
- Khi sử dụng `satisfies` thì giúp code chúng ta rõ ràng hơn, nhưng nó sẽ cố định Type luôn
- `as const` sẽ biến giá trị thành readonly, tức là chỉ đọc chứ không thể thêm xóa cập nhật

```typescript
const scores = [1, 2, 3, 4, 5] as const;
scores.push(6); // Error Property 'push' does not exist on type 'readonly [1, 2, 3, 4, 5]'
100 as string; // Error
```

- `as Type` nghĩa là chúng ta đang nói dối Typescript rằng, mày tin tao đi, tao biết nó là type gì mà
- Có thể mở rộng Type ra hơn nhưng cũng có thể dễ gây lỗi hơn
- Tuples type là type được xác định trước độ dài và type cho từng index cụ thể
- Không sử dụng được `as const` cho Tuples
- Để Tuples chỉ đọc thì thêm từ khóa `readonly` ở phía trước

```typescript
const information: readonly [
  count: number,
  username: string,
  isAdmin: boolean
] = [100, "200", false];
information.push(100); // Error cause readonly
```

- `keyof` chỉ sử dụng được cho Type
- Nếu muốn sử dụng cho biến thì biến đó phải có `typeof` trước. Ví dụ

```typescript
const complexObj = {
  javascript: {
    label: "Javascript",
  },
};
type Keys = keyof typeof complexObj; // "javascript"
```

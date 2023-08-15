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

# Generic

- 1 cách để tạo ra code linh hoạt và tái sử dụng bằng cách cho phép chúng ta định nghĩa các Types mà sẽ được chỉ định sau khi được viết code. Cho phép code hoạt động với nhiều loại dữ liệu khác nhau mà không cần viết lại types.
- Cấu trúc `<T>` `<TData>`
- Khi sử dụng từ khóa `extends` trong Generic Type thì nó được dùng để áp đặt ràng buộc(constraint) trên kiểu dữ liệu generic mà chúng ta dùng, giới hạn các loại kiểu con mà chúng ta có thể dụng cho tham số generic cụ thể.
- Giúp kiểm soát và định rõ những ràng buộc về kiểu dữ liệu, giúp Typescript kiểm tra kiểu tốt hơn và nó sẽ cung cấp các gợi ý, cũng như thông báo lỗi khi có sai sót khi sử dụng

```typescript
type GenericType<T extends ConstraintType> = ...
```

- Dưới đây là 1 bài tập lấy ra giá trị của 1 thuộc tính nào đó thuộc về object student

```ts
const student = {
  "my-name": "evondev",
  age: 20,
  school: "CKC",
  year: 1994,
};
// truy xuất giá trị của thuộc tính my-name của object student
console.log(student["my-name"]);
// đưa object student về type sử dụng typeof
type Student = typeof student;
// lấy ra các keys sử dụng typeof trả ra union type
type StudentKeys = keyof Student;
// O extends {} nghĩa là O sẽ là object
// K extends keyof O nghĩa là K sẽ là các properties của object O
// function trả về void nghĩa là không có return
function logObjValue<O extends {}, K extends keyof O>(obj: O, key: K): void {
  console.log(obj[key]);
}
logObjValue(student, "my-name"); // 1994
```

- `T extends (...args: any) => any` <T> sẽ tuân theo ràng buộc là 1 function, tức là truyền vào phải là function

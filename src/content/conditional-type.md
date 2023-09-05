# Conditional Type

- `(...args: any) => any` nghĩa là hàm(function) nhận vào các parameters mà chúng ta không biết là như thế nào. Và function này trả ra giá trị gì cũng được vì nó là `any`
- type ConditionalType = SomeType extends OtherType ? TrueType : FalseType

```ts
type Check<T> = T extends string ? "string" : "non-string";
export type IsString = Check<string>; // string
export type IsNonString = Check<number>; // non-string
```

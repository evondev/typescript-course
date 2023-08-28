# Generic

- 1 cách để tạo ra code linh hoạt và tái sử dụng bằng cách cho phép chúng ta định nghĩa các Types mà sẽ được chỉ định sau khi được viết code. Cho phép code hoạt động với nhiều loại dữ liệu khác nhau mà không cần viết lại types.
- Cấu trúc `<T>` `<TData>`
- Khi sử dụng từ khóa `extends` trong Generic Type thì nó được dùng để áp đặt ràng buộc(constraint) trên kiểu dữ liệu generic mà chúng ta dùng, giới hạn các loại kiểu con mà chúng ta có thể dụng cho tham số generic cụ thể.
- Giúp kiểm soát và định rõ những ràng buộc về kiểu dữ liệu, giúp Typescript kiểm tra kiểu tốt hơn và nó sẽ cung cấp các gợi ý, cũng như thông báo lỗi khi có sai sót khi sử dụng

```typescript
type GenericType<T extends ConstraintType> = ...
```

# Conditional

# Mapped

# Indexed

# Utility

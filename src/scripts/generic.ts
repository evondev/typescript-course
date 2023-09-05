{
  function identity<TData = number>(arg: TData): TData {
    return arg;
  }
  identity(10);
  const item = identity("10");
  identity<boolean>(false);
  function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b];
  }
  pair(10, 10);
  pair("10", 10);
  pair(10, true);
  pair(10, {});
  pair(10, [1, 2, 3]);

  function logLength<T extends { length: number } = [1, 2, 3]>(item: T): void {
    console.log(item.length);
  }
  logLength("123");
  logLength([1, 2, 3]);
  // logLength(123);
  // "123".length;
  // [1,2,3].length;
  // 123.length;
  const student = {
    "my-name": "evondev",
    age: 20,
    school: "CKC",
    year: 1994,
  };
  console.log(student["my-name"]);
  type Student = typeof student;
  type StudentKeys = keyof Student;
  type Example = Record<any, any>;
  function logObjValue<O extends {}, K extends keyof O>(obj: O, key: K): void {
    console.log(obj[key]);
  }
  logObjValue(student, "my-name"); // 1994
}

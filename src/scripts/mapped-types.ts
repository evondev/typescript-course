// 1. map
[1, 2, 3].map((item) => item.toString()); // ["1", "2", "3"]
// 2. Indexed access types
type AppConfig = {
  username: string;
  layout: string;
};
type Res = AppConfig["username"];
// 3. Index signatures
type Profile = {
  name: string;
  age: number;
  information: {
    [x: string]: number | string;
  };
};
const evondev: Profile = {
  name: "tuan",
  age: 31,
  information: {
    score: 100,
    value: 200,
    devices: "100",
  },
};
// 4. keyof
type Az = keyof AppConfig; // "username" | "layout"
const item: Az = "username";
// 5. Template literal ``
const school = "CKC";
const infor = `I study at ${school}`;
// 6. Examples
type Device = {
  manufacturer: string;
  price: number;
};
// type DeviceFormatter = {
//   formatManufacturer: (value: string) => string;
//   formatPrice: (value: number) => string;
// };
// 1. add format before key ✅
// 2. Capitalize first letter  ✅
// 3. Become function (value: type) => type
type DeviceFormatter = {
  [Key in keyof Device as `format${Capitalize<Key>}`]: (
    value: Device[Key]
  ) => Device[Key];
};
// keyof Device: "manufacturer" | "price"
// Device[Key] -> string | number
type Partial2<T> = {
  [P in keyof T]?: T[P];
};
type Required2<T> = {
  [P in keyof T]-?: T[P];
};
type MyInfo = {
  name?: string;
  age?: number;
};
// "name" | "age"
const myInformation: Partial2<MyInfo> = {};

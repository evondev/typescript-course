const direction = {
  left: "left",
  right: "right",
  bottom: "bottom",
  top: "top",
} as const;
enum Direction {
  top = 1,
  right = 3,
  bottom = 5,
  left = 7,
}
// String Enums
enum Tab {
  POPULAR = "POPULAR",
  RECENT = "RECENT",
  LATEST = "LATEST",
  NEW = "NEW",
}
console.log(Tab.LATEST);
// type Record<K extends keyof any, T> = { [P in K]: T; }

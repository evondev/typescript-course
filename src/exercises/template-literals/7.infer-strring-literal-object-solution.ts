interface ApiData {
  "maps:longitude": string;
  "maps:latitude": string;
}
type RemoveMaps<T> = T extends `maps:${infer R}` ? R : never;
type RemoveMapsFromObj<T> = {
  [K in keyof T as `${RemoveMaps<K>}`]: T[K];
};
type DesiredShape = RemoveMapsFromObj<ApiData>;
// type DesiredShape = {
//   "longitude": string;
//   "latitude": string;
// }
export {};

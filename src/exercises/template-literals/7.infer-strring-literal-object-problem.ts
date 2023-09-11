interface ApiData {
  "maps:longitude": string;
  "maps:latitude": string;
}
type RemoveMapsFromObj<T> = {
  [K in keyof T]: T[K];
};
type DesiredShape = RemoveMapsFromObj<ApiData>;
// type DesiredShape = {
//   "longitude": string;
//   "latitude": string;
// }

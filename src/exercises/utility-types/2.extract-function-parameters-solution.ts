function filterData(
  filter: string,
  model: string,
  limit?: number,
  offset?: number
) {}
type FilterDataParameters = Parameters<typeof filterData>;
/** Expected
type FilterDataParameters = [
  filter: string,
  model: string,
  limit?: number,
  offset?: number
]
 */
export {};

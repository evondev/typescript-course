import { Equal, Expect } from "@/type-utils";
// import { expect, it } from "vitest";
const fetchData = async <T>(url: string): Promise<T> => {
  const data = await fetch(url).then((response) => response.json());
  return data;
};

const data = await fetchData<{ name: string; age: number }>(
  "https://swapi.dev/api/people/1"
);
// expect(data.name).toEqual("Luke Skywalker");

type tests = [Expect<Equal<typeof data, { name: string; age: number }>>];

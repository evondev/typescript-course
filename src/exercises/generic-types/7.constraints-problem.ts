import { Equal, Expect } from "@/type-utils";

type AddRoutePrefix = unknown;

type tests = [
  Expect<Equal<AddRoutePrefix<"">, "/">>,
  Expect<Equal<AddRoutePrefix<"about">, "/about">>,
  Expect<Equal<AddRoutePrefix<"about/team">, "/about/team">>,
  Expect<Equal<AddRoutePrefix<"blog">, "/blog">>,
  // @ts-expect-error
  AddRoutePrefix<boolean>,
  // @ts-expect-error
  AddRoutePrefix<number>
];

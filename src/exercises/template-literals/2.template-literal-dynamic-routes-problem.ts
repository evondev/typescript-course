import { Equal, Expect } from "@/type-utils";

type Routes = "/users" | "/users/:id" | "/posts" | "/posts/:id";
type DynamicRoutes = unknown;
type tests = [Expect<Equal<DynamicRoutes, "/users/:id" | "/posts/:id">>];

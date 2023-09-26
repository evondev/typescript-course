import { Equal, Expect } from "@/type-utils";

interface MyComplexInterface<Event, Context, Name, Point> {
  getEvent: () => Event;
  getContext: () => Context;
  getName: () => Name;
  getPoint: () => Point;
}
type Example = MyComplexInterface<
  "click",
  "window",
  "my-event",
  { x: 20; y: 22 }
>;
type GetPoint<T> = T extends MyComplexInterface<any, any, any, infer Point>
  ? Point
  : never;
type Results = GetPoint<Example>;
type tests = [Expect<Equal<GetPoint<Example>, { x: 20; y: 22 }>>];

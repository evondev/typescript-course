import { Equal, Expect } from "@/type-utils";

export type Entity =
  | {
      type: "user";
    }
  | {
      type: "post";
    }
  | {
      type: "comment";
    };

type EntityWithId = unknown;

const result: EntityWithId = {
  type: "comment",
  commentId: "123",
};
type tests = [
  Expect<
    Equal<
      EntityWithId,
      | ({
          type: "user";
        } & Record<"userId", string>)
      | ({
          type: "post";
        } & Record<"postId", string>)
      | ({
          type: "comment";
        } & Record<"commentId", string>)
    >
  >
];

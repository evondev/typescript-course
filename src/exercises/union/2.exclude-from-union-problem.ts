import { Equal, Expect } from "@/type-utils";

export type Ranking =
  | {
      type: "best";
      award: "Gold";
    }
  | {
      type: "good";
      award: "Silver";
    }
  | {
      type: "normal";
      award: "bronze";
    };
type NotRankingBest = unknown;
type tests = [
  Expect<
    Equal<
      NotRankingBest,
      | {
          type: "good";
          award: "Silver";
        }
      | {
          type: "normal";
          award: "bronze";
        }
    >
  >
];

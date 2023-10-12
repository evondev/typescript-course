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
type NotRankingBest = Exclude<Ranking, { type: "best" }>;
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

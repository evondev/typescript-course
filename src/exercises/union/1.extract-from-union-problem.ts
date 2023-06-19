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
type RankingBest = unknown;
type tests = [
  Expect<
    Equal<
      RankingBest,
      {
        type: "best";
        award: "Gold";
      }
    >
  >
];

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
/*
type NotRankingBest = {
    type: "good";
    award: "Silver";
} | {
    type: "normal";
    award: "bronze";
}
*/

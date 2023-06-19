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
/*
type RankingBest = {
  type: "best";
  award: "Gold";
}
*/

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
type AwardType = unknown;
/* Expected
type AwardType = "best" | "good" | "normal"
*/

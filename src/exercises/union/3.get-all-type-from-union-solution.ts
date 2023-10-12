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
type AwardType = Ranking["award"];
// type test1 = [Expect<Equal<AwardType, "best" | "good" | "normal">>];
type test2 = [Expect<Equal<AwardType, "Gold" | "Silver" | "bronze">>];

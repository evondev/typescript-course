import { Equal, Expect } from "@/type-utils";

export const notification = {
  ALERT: "alert",
  WARNING: "warning",
  DANGER: "danger",
} as const;

type Notification = unknown;
type tests = [Expect<Equal<Notification, "alert" | "warning" | "danger">>];

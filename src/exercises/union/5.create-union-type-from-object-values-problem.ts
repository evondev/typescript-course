import { Equal, Expect } from "@/type-utils";

export const notification = {
  ALERT: "alert",
  WARNING: "warning",
  DANGER: "danger",
} as const;
export type NotificationWD = unknown;
// type NotificationWD = "warning" | "danger"
type tests = [Expect<Equal<NotificationWD, "warning" | "danger">>];

import { Equal, Expect } from "@/type-utils";

export const notification = {
  ALERT: "alert",
  WARNING: "warning",
  DANGER: "danger",
} as const;
type Notification = typeof notification;
type NotificationNeededKeys = Exclude<keyof Notification, "ALERT">;
export type NotificationWD = Omit<
  Notification,
  "ALERT"
>[NotificationNeededKeys];
// type NotificationWD = "warning" | "danger"
type tests = [Expect<Equal<NotificationWD, "warning" | "danger">>];

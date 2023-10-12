import { Equal, Expect } from "@/type-utils";

// export const notification = Object.freeze({
//   ALERT: "alert",
//   WARNING: "warning",
//   DANGER: "danger",
// });
export const notification = {
  ALERT: "alert",
  WARNING: "warning",
  DANGER: "danger",
} as const;
// Object.freeze(notification);
// notification.ALERT = "information";
// delete notification.DANGER;
type Notification = typeof notification;
type NotifcationAlert = Notification["ALERT"];
type tests = [Expect<Equal<NotifcationAlert, "alert">>];

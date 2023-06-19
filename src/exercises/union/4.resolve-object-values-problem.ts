export const notification = {
  ALERT: "alert",
  WARNING: "warning",
  DANGER: "danger",
};
// @ts-expect-error
notification["ALERT"] = "warning";

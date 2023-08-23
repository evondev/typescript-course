export type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };
type ClickEvent = unknown;
// type ClickEvent = {
//   type: "click";
//   event: MouseEvent;
// }

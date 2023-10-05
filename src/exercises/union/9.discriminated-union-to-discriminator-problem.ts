import { Equal, Expect } from "@/type-utils";

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
type tests = [Expect<Equal<EventType, "click" | "focus" | "keydown">>];

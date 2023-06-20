type ReplaceSpaceWithDash = unknown;
type Name = ReplaceSpaceWithDash<"Emmylou Harris">;
//   ^? "Emmylou-Harris"

type Replace = unknown;
type DashName = Replace<"Matt Pocock", " ", "-">;
//   ^? "Matt-Pocock"

type StringReplace = unknown;
type Result = StringReplace<"Evondev Frontend Dev", " ", "-">;
//   ^? "Evondev-Frontend-Dev"

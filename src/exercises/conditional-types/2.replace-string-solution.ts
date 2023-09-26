type Name = ReplaceSpaceWithDash<"Emmylou Harris">;
// FirstNameSpacingLastName
type ReplaceSpaceWithDash<T extends string> =
  T extends `${infer Word1} ${infer Word2}` ? `${Word1}-${Word2}` : never;
//   ^? "Emmylou-Harris"

type DashName = Replace<"Matt Pocock", " ", "_">;
type Replace<
  S extends string,
  R extends string,
  D extends string
> = S extends `${infer FirstName}${R}${infer LastName}`
  ? `${FirstName}${D}${LastName}`
  : never;
//   ^? "Matt-Pocock"

type Result = StringReplace<"Evondev Frontend Developer is so good", " ", "__">;
type StringReplace<
  S extends string,
  R extends string,
  D extends string
> = S extends `${infer FirstName}${R}${infer LastName}`
  ? `${FirstName}${D}${StringReplace<LastName, R, D>}`
  : S;
//   ^? "Evondev-Frontend-Developer"
export {};
// "Emmylou Harris" -> "Emmylou-Harris" -> "Word1SpaceWord2" -> "Word1-Word2"
// `${infer Word1} ${infer Word2}` -> `${Word1}-${Word2}`
// "Emmylou Harris" -> "Emmylou-Harris" -> "Word1SpaceWord2" -> "Word1PrefixerWord2"
// type A = "Emmylou";
// type B = "Harris";

{
  const information: (string | number | boolean)[] = [
    "badminton",
    "soccer",
    "basketball",
    "tennis",
    100,
    false,
  ];
  const students: {
    name?: string;
    age?: number;
    score?: number | string;
    extra?: {
      name: string;
    } & {
      school: string;
    };
  }[] = [
    {
      name: "evondev",
      age: 29,
      score: 10,
      extra: undefined,
    },
    {
      name: "anh tuan",
      age: 18,
      score: "100",
      extra: {
        school: "caothang",
        name: "evondev",
      },
    },
  ];
}

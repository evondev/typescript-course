{
  // const numericId: string = 123;
  // # as const
  const scores = [1, 2, 3, 4, 5] as const;
  // scores.push(6);
  // [1,2,3,4,5,6]
  // # as Type
  type User = {
    id: number;
    name: {
      first: string;
      last: string;
    };
    age: number;
  };
  const newUser = {
    id: 1,
    name: {
      first: "tran",
      last: "tuan",
    },
    age: 20,
  } satisfies User;
  newUser.name.first;
  // const obj = {};
  // obj.age.abc;
  // const count = 100 as string;
  // # satisfies
  // const routes: Record<string, any> = {
  //   "/": "homepage",
  //   "/about": "About page",
  //   "/dashboard": "Dashboard page",
  // };
  // console.log(routes["/evondev"]);
  const routes = {
    "/": "homepage",
    "/about": "About page",
    "/dashboard": "Dashboard page",
  } satisfies Record<string, any>;
  console.log(routes["/dashboard"]);
}

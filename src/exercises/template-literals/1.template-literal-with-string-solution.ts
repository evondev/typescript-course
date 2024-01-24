type Route = `/${string}`;
export const goToRoute = (route: Route) => {};
// Should succeed:
goToRoute("/users");
goToRoute("/");
goToRoute("/admin/users");
// @ts-expect-error
goToRoute("users/1");
// @ts-expect-error
goToRoute("<http://facebook.com>");

// users/:id
export function buildRoutePath(path) {
  const routeParametersRefex = /:([a-zA-Z]+)/g

  console.log(path.matchAll(routeParametersRefex));
}
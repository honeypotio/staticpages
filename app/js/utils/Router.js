export default class Router {
  constructor(routeMap) {
    this.routeMap = routeMap;
  }

  componentFromPathName(pathName) {
    return this.routeMap[pathName];
  }
}

import Cookie from 'js-cookie';

export default class UTMParams {
  constructor(urlQuery, cookieProvider) {
    this.cookieProvider = cookieProvider;
    let utmQuery = this._parseParams(urlQuery);
    this._setCookie(utmQuery);
  }

  _parseParams(query) {
    let allqueries = query.substring(1).split('&');
    let filteredUtms = allqueries.filter( (query )=> query.indexOf('utm_') === 0 );
    let cleanUtms = filteredUtms.map(this._composeName);
    return cleanUtms;
  }

  _composeName(name) {
    return name.replace(/utm_/, 'u_');
  }

  _setCookie(queries) {
    queries.forEach( (query) => {
      let splitQuery = query.split('=');
      this.cookieProvider.set(splitQuery[0], splitQuery[1], {
        expires: 30
      });
    });
  }
}

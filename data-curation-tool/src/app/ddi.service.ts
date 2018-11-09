import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DdiService {
  constructor(private http: HttpClient) { }
  getDDI(url: string) {
    return this.http.get(url,{responseType: 'text'});
  }

  getParameterByName(name) {
        const url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) { return null; }
        if (!results[2]) { return ''; }
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
  getBaseUrl() {
      const protocol = window.location.protocol;
      const host = window.location.hostname;
      let port = window.location.port;
      if (port === '4200') {
          port = '8080';
      }
      let base_url = protocol + '//' + host;
      if (port != null || typeof(port) !== 'undefined') {
          base_url = base_url + ':' + port;
      }
      return base_url;
  }

}

import {Injectable} from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {IMonitoredUrl} from "./monitored-url.model";

@Injectable({
  providedIn: 'root'
})
export class MonitoredUrlService {

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  public getAllMonitoredUrl(): Observable<IMonitoredUrl[]> {
    return this.http.get<IMonitoredUrl[]>(`https://api.mlab.com/api/1/databases/thermospi2/collections/alerts?apiKey=${this.cookieService.get('mLabAPIKey')}`);
  }
}

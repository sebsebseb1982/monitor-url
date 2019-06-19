import {Component} from '@angular/core';
import {MonitoredUrlService} from "../common/monitored-url.service";
import {IMonitoredUrl} from "../common/monitored-url.model";
import {Observable} from "rxjs/index";
import {AppState} from "../app.state";
import {Store} from '@ngrx/store';
import * as MonitoredUrlActions from "../common/monitored-url.actions";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  monitoredUrls: Observable<IMonitoredUrl[]>;

  constructor(private store: Store<AppState>, private monitoredUrlService:MonitoredUrlService) {
    //this.monitoredUrls = store.select('monitoredUrls');
    this.monitoredUrls = monitoredUrlService.getAllMonitoredUrl();
  }

  onBlur(monitoredUrl: IMonitoredUrl) {
    //alert(monitoredUrl.name);
  }

  validateSchedule(monitoredUrl: IMonitoredUrl) {

  }

  addMonitoredUrl(name: string, url: string, cssSelector: string, schedule: string) {
    this.store.dispatch(new MonitoredUrlActions.AddMonitoredUrl({
      name: name,
      url: url,
      cssSelector: cssSelector,
      schedule: schedule
    }));
  }
}

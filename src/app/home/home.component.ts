import {Component} from '@angular/core';
import {MonitoredUrlService} from "../common/monitored-url.service";
import {IMonitoredUrl} from "../common/monitored-url.model";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  monitoredUrls: Observable<IMonitoredUrl[]>;

  constructor(private monitoredUrlService: MonitoredUrlService) {
    this.monitoredUrls = monitoredUrlService.getAllMonitoredUrl();
  }
}

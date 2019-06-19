import {IMonitoredUrl} from "./common/monitored-url.model";

export interface AppState {
  readonly monitoredUrls: IMonitoredUrl[];
}

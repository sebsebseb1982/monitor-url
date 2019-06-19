import {IMonitoredUrl} from "./monitored-url.model";
import * as MonitoredUrlActions from "./monitored-url.actions";

export function reducer(state: IMonitoredUrl[] = [], action: MonitoredUrlActions.Actions) {

  switch(action.type) {
    case MonitoredUrlActions.ADD_MONITORED_URL:
      return [...state, action.payload];
    default:
      return state;
  }
}

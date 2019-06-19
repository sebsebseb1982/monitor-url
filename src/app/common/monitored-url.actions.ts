// Section 1
import {Action} from '@ngrx/store'
import {IMonitoredUrl} from "./monitored-url.model";

// Section 2
export const ADD_MONITORED_URL       = '[MonitoredURL] Add'
export const REMOVE_MONITORED_URL    = '[MonitoredURL] Remove'

// Section 3
export class AddMonitoredUrl implements Action {
  readonly type = ADD_MONITORED_URL

  constructor(public payload: IMonitoredUrl) {}
}

export class RemoveMonitoredUrl implements Action {
  readonly type = REMOVE_MONITORED_URL

  constructor(public payload: number) {}
}

// Section 4
export type Actions = AddMonitoredUrl | RemoveMonitoredUrl

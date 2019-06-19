export interface IMonitoredUrl {
  _id: any;
  name: string;
  url: string;
  lastValue: string;
  schedule: string;
  announceChange: boolean;
  cssSelector: string;
  field: any;
}

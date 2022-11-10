import { PiholeRealtimeAPI, RealtimeAPI } from './realtime'

export class PiholeApiClient {
  private readonly _apiKey: string
  public readonly realtime: RealtimeAPI

  constructor (apiKey: string) {
    this._apiKey = apiKey
    this.realtime = new PiholeRealtimeAPI()
  }
}

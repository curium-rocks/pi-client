import { EventEmitter } from 'node:events'

export enum Action {
  // eslint-disable-next-line no-unused-vars
  BLOCK,
  // eslint-disable-next-line no-unused-vars
  ALLOW,
  // eslint-disable-next-line no-unused-vars
  DHCP_RENEW
}
export interface RealtimeAPI extends EventEmitter {
  /**
   * Removes the action type from the filtered action filter mask, if all types are removed
   * from the mask it will no longer filter on action type.
   * @param action remove action type from action filter mask
   */
  removeActionFilter(action: Action) : void
  /**
   * Add the action type to the action filter mask
   * @param action action type to add to the action filter mask
   */
  addActionFilter(action: Action) : void
  /**
   * Add a regex filter to events, if multiple filters are added all filters must be matched for an event to be emitted
   * @param filter Regex string that all message strings must match before events are trigerred
   */
  addFilter(filter: string): void
  /**
   * Remove a filter
   * @param filter filter to remove
   */
  removeFilter(filter: string): void
}

/*
 * @author: tvc12 - Thien Vi
 * @created: 5/31/21, 5:29 PM
 */

import { BlocLogger } from "./BlocLogger";

export class DefaultBlocLogger implements BlocLogger<any, any> {
  logEvent(event: any): void {
    console.debug("DefaultBlocLogger::event", event.toString());
  }

  logState(state: any): void {
    console.debug("DefaultBlocLogger::state", state.toString());
  }

  log(...data: any): void {
    console.debug(...data);
  }
}

/*
 * @author: tvc12 - Thien Vi
 * @created: 5/31/21, 5:28 PM
 */

export abstract class BlocLogger<Event, State> {
  abstract logEvent(event: Event): void;

  abstract logState(state: State): void;

  abstract log(...data: any): void;
}

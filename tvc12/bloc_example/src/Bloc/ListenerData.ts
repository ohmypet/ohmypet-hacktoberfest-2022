/*
 * @author: tvc12 - Thien Vi
 * @created: 5/31/21, 4:34 PM
 */

export type ListenerState<State> = (state: State) => void;

export class ListenerData<State> {
  constructor(public key: string, public onStateChange: ListenerState<State>) {
  }
}

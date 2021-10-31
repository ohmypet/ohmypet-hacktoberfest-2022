/*
 * @author: tvc12 - Thien Vi
 * @created: 5/31/21, 4:34 PM
 */

import { ListenerData } from "./ListenerData";

/**
 * Base bloc for custom
 */
export abstract class BaseBloc<Event, State> {
  /**
   * Add event to event bus
   * @param event will add to event bus
   */
  abstract add(event: Event): void;

  /**
   * Listener on have state changed
   * @param data will store in bloc
   */
  abstract addListener(data: ListenerData<State>): void;

  /**
   * Remove listener with key
   * @param key string
   */
  abstract removeListener(key: string): void;

  /**
   * Call when delete all listener
   */
  abstract dispose(): void;
}

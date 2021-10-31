/*
 * @author: tvc12 - Thien Vi
 * @created: 5/31/21, 4:35 PM
 */

import { merge, Observable, Subject, Subscription } from "rxjs";
import { ListenerData } from "./ListenerData";
import { BaseBloc } from "./BaseBloc";
import { BlocLogger } from "./BlocLogger";

export abstract class Bloc<Event, State> extends BaseBloc<Event, State> {
  protected readonly eventBus: Subject<Event>;
  protected readonly stateBus: Observable<State>;
  protected stateSubscription!: Subscription;
  protected readonly listenersAsMap: Map<string, ListenerData<State>>;

  protected constructor(public state: State, protected readonly blocLogger?: BlocLogger<Event, State>) {
    super();
    this.eventBus = new Subject<Event>();
    this.stateBus = new Observable<State>();
    this.listenersAsMap = new Map<string, ListenerData<State>>();
    this.init();
  }

  add(event: Event): void {
    this.eventBus.next(event);
  }

  addListener(data: ListenerData<State>): void {
    this.blocLogger?.log("-----------------Bloc addListener:start------------------");
    this.blocLogger?.log("Key", data.key);
    this.listenersAsMap.set(data.key, data);
    this.blocLogger?.log("-----------------Bloc addListener:done------------------");
  }

  removeListener(key: string) {
    this.blocLogger?.log("-----------------Bloc removeListener:start------------------");
    this.blocLogger?.log("key", key);
    this.listenersAsMap.delete(key);
    this.blocLogger?.log("-----------------Bloc removeListener:done------------------");
  }

  dispose() {
    this.blocLogger?.log("-----------------Bloc dispose:start------------------");
    this.eventBus.unsubscribe();
    this.stateSubscription.unsubscribe();
    this.blocLogger?.log("-----------------Bloc dispose:done------------------");
  }

  protected init(): void {
    this.initSubscription();
    this.initBlocLogger();
  }

  protected abstract mapEventToState(event: Event): AsyncIterableIterator<State>;

  protected asyncToObservable<T>(iterable: AsyncIterableIterator<T>): Observable<T> {
    return new Observable<T>(
      observer =>
        void (async () => {
          try {
            for await (const item of iterable) {
              if (observer.closed) return;
              observer.next(item);
            }
            observer.complete();
          } catch (e) {
            observer.error(e);
          }
        })()
    );
  }

  private onEventChanged(event: Event): void {
    const listState: AsyncIterableIterator<State> = this.mapEventToState(event);
    const observable: Observable<State> = this.asyncToObservable(listState);
    if (this.stateSubscription && !this.stateSubscription.closed) {
      this.stateSubscription.unsubscribe();
    }
    this.stateSubscription = merge(this.stateBus, observable).subscribe({
      next: state => this.onStateChange(state)
    });
  }

  private onStateChange(state: State): void {
    this.state = state;
    this.listenersAsMap.forEach((listener: ListenerData<State>) => {
      listener.onStateChange(state);
    });
  }

  private initSubscription() {
    this.eventBus.subscribe({ next: event => this.onEventChanged(event) });
    this.stateSubscription = this.stateBus.subscribe(state => this.onStateChange(state));
  }

  private initBlocLogger() {
    if (this.blocLogger) {
      this.eventBus.subscribe({ next: event => this.blocLogger?.logEvent(event) });
      this.stateBus.subscribe({ next: state => this.blocLogger?.logState(state) });
    }
  }
}

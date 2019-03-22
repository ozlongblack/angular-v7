import { BehaviorSubject } from 'rxjs';
import { Input } from '@angular/core';
import { StoreEvent } from 'app/core/services/store/store.events';

export class Store {
  @Input()
  public store: BehaviorSubject<any> = new BehaviorSubject({});

  public dispatch(event: StoreEvent): void {
    this.store.next(event.getNewState(this.store.getValue()));
  }
}

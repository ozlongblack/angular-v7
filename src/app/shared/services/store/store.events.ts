export abstract class StoreEvent {
  constructor(public payload: any) {
  }

  abstract getNewState(state: any): any;
}

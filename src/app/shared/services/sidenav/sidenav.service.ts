import {
  EventEmitter,
  Injectable,
  Output,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  opened = false;

  @Output()
  change: EventEmitter<boolean> = new EventEmitter();

  toggle() {
    this.opened = !this.opened;
    this.change.emit(this.opened);
  }

  open() {
    this.opened = true;
    this.change.emit(this.opened);
  }

  close() {
    this.opened = false;
    this.change.emit(this.opened);
  }
}

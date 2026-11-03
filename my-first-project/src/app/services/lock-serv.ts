import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LockServ {
  guardLock = signal<boolean>(true);

  toggleLock() {
    this.guardLock.update(value => !value);
  }
}

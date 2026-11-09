import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingServ {
private reqCount = signal<number>(0);

//true when active requests are greater than 0
isLoading = computed(() => this.reqCount() > 0);

increase() {
  this.reqCount.update(count => count + 1);
}
decrease() {
  this.reqCount.update(count => Math.max(0, count - 1));
}
}

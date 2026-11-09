import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorServ {
  errorMessage = signal<string | null>(null);
  setError(message: string) {
    this.errorMessage.set(message);
  }
  clearError() {
    this.errorMessage.set(null);
  }
}

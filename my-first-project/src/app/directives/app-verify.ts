import { Directive, input, output } from '@angular/core';
// added the appVerify to the collection-list-item.html button and imported to the TypeScript
@Directive({
  selector: '[appVerify]',
  host: {
    '(click)': 'onHostClick()',
    },
})
export class AppVerify {
  warning = input('Are you sure you want to delete this item?', { alias: 'appVerify' });
  confirmed = output<void>();

  protected onHostClick(): void {
    if (confirm(this.warning())) {
      this.confirmed.emit();
    }
  }
}

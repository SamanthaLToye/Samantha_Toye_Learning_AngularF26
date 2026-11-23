import { Directive, input, signal } from '@angular/core';
// use host in directive event - mouseenter, mouseleave, class if its hovered, and background color change
// added step 9 apply directive to two spots collection-list.ts and collection-list-item.ts
@Directive({
  selector: '[appHoverStyle]',
  host: {
    '[style.backgroundColor]': 'isHovered() ? hoverStyle() : null',
    '[class.is-hovered]': 'isHovered()',
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  },
})
export class HoverStyle {
  // signal alias to the appHoverStyle in selector and can pass a color when passed
  hoverStyle = input('#36af81', { alias: 'appHoverStyle' });
  // track if the pointer is currently over the host
  protected readonly isHovered = signal(false);

  protected onMouseEnter(): void {
    this.isHovered.set(true);
  }
  protected onMouseLeave(): void {
    this.isHovered.set(false);
  }
}

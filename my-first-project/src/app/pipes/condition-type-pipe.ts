import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conditionType',
})
export class ConditionTypePipe implements PipeTransform {
  private labels: Record<string, string> = {
    'mint': 'Mint Condition',
    'near mint': 'Near Mint',
    'good': 'Good Condition',
    'poor': 'Poor Condition'
  };
  transform(value: string | null | undefined): string {
    if (!value) return 'Not Specified';
    const key = value.toLowerCase().trim();
    return this.labels[key] ?? value;
  }
}

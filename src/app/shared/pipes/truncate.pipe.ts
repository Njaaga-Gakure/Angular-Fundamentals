import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true,
})
export class TruncatePipe implements PipeTransform {
  transform(
    value: string,
    limit: number = 90,
    showAllText: boolean = false
  ): string {
    if (!value) return '';
    return value.length < limit || showAllText
      ? value
      : value.substring(0, limit);
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appCurrency'
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number, currencySymbol = '₹'): string {
    return `${currencySymbol}${value.toFixed(2)}`;
  }
}

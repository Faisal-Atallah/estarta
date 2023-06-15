import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringToBoolean',
})
export class StringToBooleanPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): boolean {
    return (/true/i).test(value);
  }
}

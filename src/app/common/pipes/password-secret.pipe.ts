import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'passwordSecret'
})
export class PasswordSecretPipe implements PipeTransform {

  transform(value: string, hidden: boolean): unknown {
    if (hidden) {
      value = value.replace(/[a-zA-Z1-9]/gi, '*');
    }
    return value;
  }
}

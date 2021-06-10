import { Pipe, PipeTransform } from '@angular/core';
import Status from '../model/Status';

@Pipe({
  name: 'statusLabel'
})
export class StatusLabelPipe implements PipeTransform {

  transform(value: Status | string): string {
    switch (value) {
      case 'enabled':
        return 'Abilitato'
      case 'disabled':
        return 'Disabilitato'
    }
    return value;
  }

}

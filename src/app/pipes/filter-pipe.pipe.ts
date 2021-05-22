import { Pipe, PipeTransform } from '@angular/core';
import { Equipment } from '../models/equipment';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Equipment[], filterText: string): Equipment[] {
    filterText=filterText?filterText.toLocaleLowerCase():"";
    return filterText?value.filter((e:Equipment)=>e.equipmentName.toLocaleLowerCase().indexOf(filterText)!==-1)
    :value;
  }

}

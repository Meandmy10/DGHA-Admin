import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailBreak'
})
export class EmailBreakPipe implements PipeTransform {

  transform(value: string): string {
    var buildingString = "";
    for(var i = 0; i < value.length; i++){
      buildingString += value[i];
      if(value[i] == '@' || value[i] == '.'){
        buildingString += "<wbr>";
      }
    }
    return buildingString;
  }

}

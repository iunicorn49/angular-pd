import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeline'
})
export class PipelinePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value + ' toPipeline ' + args;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'spaceData'})
export class SpaceDataPipe implements PipeTransform {
    transform(input:Array<any>, sep = ','): string {
        return input.join(sep);
    }
}
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    transform(value: any, arg: any): any {
        const resultPost =[];
        for (const areas of value) {
            if (areas.cod.indexOf(arg) > -1) {
                resultPost.push(areas);
            }
        }
        return resultPost;
    }
}
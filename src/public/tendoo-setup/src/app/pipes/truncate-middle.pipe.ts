import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncateMiddle'
})
export class TruncateMiddlePipe implements PipeTransform {
    
    transform(fullStr: any, limit = 20, separator = '...' ): any {

        if ( fullStr.length <= limit ) return fullStr;

        var sepLen      = separator.length,
            charsToShow = limit - sepLen,
            frontChars  = Math.ceil(charsToShow/2),
            backChars   = Math.floor(charsToShow/2);

        return fullStr.substr(0, frontChars) + 
            separator + 
            fullStr.substr(fullStr.length - backChars);
    }
    
}

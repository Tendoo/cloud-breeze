import { NgModule } from "@angular/core";
import { TruncateMiddlePipe } from "./pipes/truncate-middle.pipe";
import { TruncatePipe } from "./pipes/truncate.pipe";

@NgModule({
    declarations: [
        TruncateMiddlePipe,
		TruncatePipe,
    ], 
    exports : [
        TruncateMiddlePipe,
		TruncatePipe,
    ]
})
export class UtilityModule {}
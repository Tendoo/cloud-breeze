import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatInputModule } from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';

const ImportedModules   = [
  MatButtonModule,
  MatIconModule,
  MatSliderModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatMenuModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...ImportedModules
  ],
  exports: ImportedModules
})
export class MaterialModule { }

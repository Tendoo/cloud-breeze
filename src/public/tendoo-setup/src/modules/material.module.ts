import { NgModule } from '@angular/core';
import { MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatCardModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatListModule, MatTabsModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule, MatRippleModule, MatDialogModule, MatSnackBarModule, MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';

const MaterialModules   =   [
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatDialogModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
];

@NgModule({
    imports: MaterialModules,
    exports: MaterialModules,
})
export class MaterialModule {}
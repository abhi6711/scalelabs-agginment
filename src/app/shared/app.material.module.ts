import { NgModule } from '@angular/core';
import {
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    MatDialogModule
} from '@angular/material';

@NgModule({
    imports: [
        MatNativeDateModule,
        MatInputModule,
        MatCardModule,
        MatIconModule,
        MatFormFieldModule,
        MatTabsModule,
        MatButtonModule,
        MatDividerModule,
        MatSelectModule,
        MatDialogModule
    ],
    exports: [
        MatNativeDateModule,
        MatInputModule,
        MatCardModule,
        MatIconModule,
        MatFormFieldModule,
        MatTabsModule,
        MatButtonModule,
        MatDividerModule,
        MatSelectModule,
        MatDialogModule
    ],
    providers: [],
    bootstrap: []
})
export class AppMaterialModule { }

import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { SudokuComponent } from './sudoku/sudoku.component';
import { FormatTimePipe } from './format-time.pipe';
import { GridComponent } from './sudoku/grid/grid.component';
import { FinishedDialogComponent } from './finished-dialog/finished-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SudokuComponent,
    FormatTimePipe,
    GridComponent,
    FinishedDialogComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FormsModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  entryComponents: [FinishedDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

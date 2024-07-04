import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';


const ngMat = [
  MatCardModule,
  MatInputModule,
  MatDividerModule,
  MatButtonModule,
  MatSnackBarModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...ngMat
  ],
  exports : [
    ...ngMat
  ]
})
export class MaterialModule { }

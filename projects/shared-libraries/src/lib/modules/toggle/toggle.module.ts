import { ToggleComponent } from './toggle.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ToggleComponent],
  imports: [
    CommonModule
  ],
  exports: [ToggleComponent]
})
export class ToggleModule { }

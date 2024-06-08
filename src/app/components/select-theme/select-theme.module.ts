import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SelectThemeComponent } from './select-theme.component';



@NgModule({
  declarations: [
    SelectThemeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SelectThemeComponent]
})
export class SelectThemeModule { }

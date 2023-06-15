import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringToBooleanPipe } from './string-to-boolean.pipe';

@NgModule({
  declarations: [StringToBooleanPipe],
  imports: [CommonModule],
  exports: [StringToBooleanPipe],
})
export class StringToBooleanModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { RouterModule } from '@angular/router';
import { listRoutes } from './list.routing';
import { MaterialModule } from 'src/app/shared/modules';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, RouterModule.forChild(listRoutes), MaterialModule],
})
export class ListModule {}

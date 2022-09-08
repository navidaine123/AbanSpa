import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsRoutingModule } from './tools-routing.module';
import { ToolComponent } from './components/tool/tool.component';
import { ToolsComponent } from './components/tools/tools.component';


@NgModule({
  declarations: [
    ToolsComponent,
    ToolComponent,
  ],
  imports: [
    CommonModule,
    ToolsRoutingModule,
  ]
})
export class ToolsModule { }

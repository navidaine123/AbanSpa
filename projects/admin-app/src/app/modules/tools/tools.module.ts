import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsRoutingModule } from './tools-routing.module';
import { ToolComponent } from './components/tool/tool.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { ToolsComponent } from './components/tools/tools.component';


@NgModule({
  declarations: [
    ToolsComponent,
    ToolComponent,
    ToggleComponent
  ],
  imports: [
    CommonModule,
    ToolsRoutingModule
  ]
})
export class ToolsModule { }

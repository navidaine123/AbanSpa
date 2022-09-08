import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/components/header/header.component';
import { LayoutComponent } from './components/components/layout/layout.component';
import { SidebarComponent } from './components/components/sidebar/sidebar.component';
import { LayoutsRoutingModule } from './layout-routing.module';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule
  ],
  exports: [HeaderComponent]
})
export class LayoutModule { }

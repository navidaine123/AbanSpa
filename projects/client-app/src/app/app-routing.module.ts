import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'projects/shared-libraries/src/lib/services/gaurds/auth.guard';

const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import("./modules/layout/layout.module").then((m) => m.LayoutModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import("projects/shared-libraries/src/lib/modules/auth/auth.module").then((m) => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

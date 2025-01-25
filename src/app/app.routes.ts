import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DesignsComponent } from './designs/designs.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'designs', component: DesignsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParadigmComponent } from './templates/paradigm/paradigm.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'paradigm', component: ParadigmComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

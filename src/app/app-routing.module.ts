import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForceDetailsComponent } from './components/force-details/force-details.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'force/:id', component: ForceDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstTabComponent } from './first-tab/first-tab.component';

const routes: Routes = [
  {
    path: '',
    component: FirstTabComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstRoutingModule { }

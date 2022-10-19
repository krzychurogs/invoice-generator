import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondTabComponent } from './component/second-tab/second-tab.component';

const routes: Routes = [
  {
    path: '',
    component: SecondTabComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondRoutingModule { }

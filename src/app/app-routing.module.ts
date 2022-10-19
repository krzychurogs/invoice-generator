import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './core/main-layout/main-layout.component';
import { FirstTabComponent } from './modules/first/first-tab/first-tab.component';

const routes: Routes = [
  { path: '', redirectTo: 'first', pathMatch: 'full' },
  {
    path: 'first',
    loadChildren: () => import('./modules/first/first.module').then((mod) => mod.FirstModule),
  },
  {
    path: 'second',
    loadChildren: () => import('./modules/second/second.module').then((mod) => mod.SecondModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

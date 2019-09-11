import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoadBtnComponent } from './load-btn/load-btn.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'API-Test', component: LoadBtnComponent},
  //Lazy loading from another module
  { path: 'LazyLoad', loadChildren: () => import('./module2/module2.module').then(mod => mod.Module2Module)},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageForHomeComponent} from "./page-for-home/page-for-home.component";

const routes: Routes = [
  {
    path: '',
    component: PageForHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

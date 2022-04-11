import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './presentation/app-routing.module';
import {AppComponent} from './presentation/app.component';
import {PageForHomeComponent} from './presentation/page-for-home/page-for-home.component';
import {GetUserUcService} from "./domain/user/usecase/get-user-uc.service";
import {UserRepository} from "./domain/user/user-repo-port/user-repository";
import {UserRepositoryImplService} from "./data/user-rest-ngclient/user-repository-impl.service";

@NgModule({
  declarations: [
    AppComponent,
    PageForHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: GetUserUcService, useClass: GetUserUcService, deps: [UserRepository],},
    {provide: UserRepository, useExisting: UserRepositoryImplService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

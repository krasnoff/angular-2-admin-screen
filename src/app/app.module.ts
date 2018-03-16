import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { BlankpageComponent } from './blankpage/blankpage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { GlobalDataService } from './global-data.service';
import { AuthenticatedGuard } from './authenticated.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login/blankpage', pathMatch: 'full' },
  { path: 'blankpage', component: BlankpageComponent, canActivate: [AuthenticatedGuard] },
  { path: 'login/:redirectTo', component: LoginPageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    BlankpageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AuthenticatedGuard, GlobalDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

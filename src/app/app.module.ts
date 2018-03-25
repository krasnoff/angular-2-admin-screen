import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { BlankpageComponent } from './blankpage/blankpage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { GlobalDataService } from './global-data.service';
import { AuthenticatedGuard } from './authenticated.guard';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { FlotChartsComponent } from './flot-charts/flot-charts.component';
import { MorrisChartsComponent } from './morris-charts/morris-charts.component';
import { TablesComponent } from './tables/tables.component';
import { FormsComponent } from './forms/forms.component';
import { PanelsAndWellsComponent } from './panels-and-wells/panels-and-wells.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { GridComponent } from './grid/grid.component';

import { ChartsModule } from 'ng2-charts';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'blankpage', component: BlankpageComponent, canActivate: [AuthenticatedGuard] },
  { path: 'dashboard', component: DashBoardComponent, canActivate: [AuthenticatedGuard] },
  { path: 'flotChart', component: FlotChartsComponent, canActivate: [AuthenticatedGuard] },
  { path: 'morrisChart', component: MorrisChartsComponent, canActivate: [AuthenticatedGuard] },
  { path: 'tables', component: TablesComponent, canActivate: [AuthenticatedGuard] },
  { path: 'forms', component: FormsComponent, canActivate: [AuthenticatedGuard] },
  { path: 'panelsAndWells', component: PanelsAndWellsComponent, canActivate: [AuthenticatedGuard] },
  { path: 'buttons', component: ButtonsComponent, canActivate: [AuthenticatedGuard] },
  { path: 'notifications', component: NotificationsComponent, canActivate: [AuthenticatedGuard] },
  { path: 'typography', component: TypographyComponent, canActivate: [AuthenticatedGuard] },
  { path: 'icons', component: IconsComponent, canActivate: [AuthenticatedGuard] },
  { path: 'grid', component: GridComponent, canActivate: [AuthenticatedGuard] },
  
  { path: 'login/:redirectTo', component: LoginPageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    BlankpageComponent,
    LoginPageComponent,
    DashBoardComponent,
    FlotChartsComponent,
    MorrisChartsComponent,
    TablesComponent,
    FormsComponent,
    PanelsAndWellsComponent,
    ButtonsComponent,
    NotificationsComponent,
    TypographyComponent,
    IconsComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [AuthenticatedGuard, GlobalDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

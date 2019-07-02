import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { DashboardPageModule } from './pages/dashboard-page/dashboard-page.module';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { PatientPageModule } from './pages/patient-page/patient-page.module';
import { SchedulePageModule } from './pages/schedule-page/schedule-page.module';
import { UserPageModule } from './pages/user-page/user-page.module';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/navigation/nav-menu/nav-menu.component';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    DashboardPageModule,
    LoginPageModule,
    PatientPageModule,
    SchedulePageModule,
    UserPageModule,
    RouterModule.forRoot([
      { path: '', component: LoginPageComponent, pathMatch: 'full' },
      { path: 'login', component: LoginPageComponent },
      { path: 'dashboard', component: DashboardPageComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { StarComponent } from './shared/star.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './home/welcome.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CourseDetailGuard } from './courses/course-detail/course-detail.guard';
import { LoginComponent } from './admin/login/login.component';
import { SignupComponent } from './admin/signup/signup.component';
import { environment } from 'src/environments/environment';
import { AuthGuard } from './shared/auth-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    HeaderComponent,
    WelcomeComponent,
    CourseDetailComponent,
    LoginComponent,
    SignupComponent    
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    //Google Firebase Modules
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,


    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'welcome', component: WelcomeComponent },
      {path: 'courses', component: CourseListComponent, canActivate: [AuthGuard]},
      {path: 'courses/:id', 
       canActivate: [AuthGuard, CourseDetailGuard], component: CourseDetailComponent }, 
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

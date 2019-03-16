import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { StarComponent } from './shared/star.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './home/welcome.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CourseDetailGuard } from './courses/course-detail/course-detail.guard';
import { LoginComponent } from './admin/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    HeaderComponent,
    WelcomeComponent,
    CourseDetailComponent,
    LoginComponent,    
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'welcome', component: WelcomeComponent },
      {path: 'courses', component: CourseListComponent},
      {path: 'courses/:id', 
       canActivate: [CourseDetailGuard], component: CourseDetailComponent }, 
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

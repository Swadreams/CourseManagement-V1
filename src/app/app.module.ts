import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { StarComponent } from './shared/star.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './home/welcome.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    HeaderComponent,
    WelcomeComponent,
    CourseDetailComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent },
      {path: 'courses', component: CourseListComponent}, 
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

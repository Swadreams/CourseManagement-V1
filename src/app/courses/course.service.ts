import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ICourse } from './course';
//import { ICourse } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  url : string = "https://raw.githubusercontent.com/Swadreams/Angular-Batch-Project/master/src/api/courses/courses.json";;

  constructor(private http: HttpClient) {
  }

  getCourses(): Observable<ICourse[]>  {
    return this.http.get<ICourse[]>(this.url);
              //  .pipe(
              //    tap(response => console.log(response)),
              //    catchError(this.errorHandling)
              //  )
  }

  // errorHandling(err) {
  //   let errorMessage = "";  
  //   if(err.error instanceof ErrorEvent) {
  //     errorMessage = `An error occurred ${err.error.message}`;
  //   } else {
  //     errorMessage = `Server returned code ${err.status}, error message is : ${err.message}`;
  //   }
  //   console.log(errorMessage);
  //   return err;
  // }
}

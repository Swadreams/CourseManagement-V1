import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  selectedCourse: any;

  constructor(private router: Router,
              private route : ActivatedRoute,
              private courseService: CourseService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.getCourse(id);
  }

  getCourse(id) {
    this.courseService.getCourses()
        .subscribe(
          response => {
            if(response.length) {
              response.filter(item => {
                if(item.courseId == id) {
                  this.selectedCourse = item;
                  console.log(`Selected course: ${this.selectedCourse}`)
                  return;
                }
              })
            }
          },
          error => console.log('Error occured : ', error)
        )
  }

  onBack() {
    this.router.navigate(['/courses']);
  }

}

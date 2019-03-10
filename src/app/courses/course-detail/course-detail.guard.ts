import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailGuard implements CanActivate {
 
  constructor(private route : ActivatedRoute,
              private router: Router) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
    let id = +next.url[1].path;
    
    if(isNaN(id) || id < 0 || id > 9) {
      alert('Course does not exist.');
      this.router.navigate(['/courses']);
      return false;
    }
      
    return true;
  }
  
}

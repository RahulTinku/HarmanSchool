import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
/**Provide service in root module */
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }
/**Call api end point to get data */
  getData() : Observable<any>{
    /**set headers */
    var headers = new HttpHeaders({
			'Content-Type': 'application/json',
		});
		const options = {headers: headers};
    return this.http.get('http://localhost:3000/courses', options).pipe(
      map(res => res),
      catchError(err=>{
        return throwError(err);
      })
    )
  }
}

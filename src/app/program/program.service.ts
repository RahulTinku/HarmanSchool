import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
/**Injectable and provided in root module */
@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private http: HttpClient) { }
/**method to call api end point */
  getData() : Observable<any>{
    /**set headers for api call */
    var headers = new HttpHeaders({
			'Content-Type': 'application/json',
		});
		const options = {headers: headers};
    return this.http.get('http://localhost:3000/program', options).pipe(
      map(res => res),
      catchError(err=>{
        return throwError(err);
      })
    )
  }
}

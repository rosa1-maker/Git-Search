import { Injectable } from '@angular/core';
import { Http } from '@ngular/http';
import'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  constructor(private http:Http) { }
}

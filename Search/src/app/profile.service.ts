import { Injectable } from '@angular/core';
import { Http } from '@ngular/http';
import'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
 
  private username:string;
  private clientid:'d832d126744c39a0b9b9';
  private clientsecret:'d0993851706e3fe61e39711804c55bd511e7baf7';

  constructor(private http:Http) { 
  console.log("service is now ready");
  this.username ='rosa1-maker'  ;

}

getProfileInfo(){
  return this.http.get("http://api.github.com/users/" .this.username="?client_id" +this.username + "&client_secret=" +this.clientsecret)
  .map(res => res.json());
}
  }

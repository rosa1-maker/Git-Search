import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
 
  private username:string;
  private clientid:'9a47957648e04b1ef56d';
  private clientsecret:'9ec1f2fbaa6b928a5315b02ea9365ed9bebe3a1b';

  constructor(private http:HttpClient) { 
  console.log("service is now ready");
  this.username ='rosa1-maker';

}

getProfileInfo(){
  return this.http.get("https://api.github.com/users/" +this.username +"?client_id" +this.username + "&client_secret=" +this.clientsecret);
}
getProfileRepos(){
  return this.http.get("https://api.github.com/users/" +this.username +"/repos?client_id" +this.username + "&client_secret=" +this.clientsecret);
}
 }

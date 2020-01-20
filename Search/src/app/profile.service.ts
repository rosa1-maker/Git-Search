import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
 
  public username:string;
  public clientid:'1a653274923672c235ab';
  public clientsecret:'f771b691fc4ac6a9afc728a51042731d9c23edc3';
  

  constructor(private http:HttpClient) { 
  console.log("service is now ready");
  this.username ='rosa1-maker';

}

getProfileInfo(){
  return this.http.get("https://api.github.com/users/" + this.username +"?client_id" + this.username + "&client_secret=" + this.clientsecret);
}
getProfileRepos(){
  return this.http.get("https://api.github.com/users/" + this.username +"/repos?client_id" + this.username + "&client_secret=" + this.clientsecret);
}
updateProfile(username:string){
  this.username=username;
}
 }

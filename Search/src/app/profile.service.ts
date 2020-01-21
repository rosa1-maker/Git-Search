import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  getProfileRepositories() {
    throw new Error("Method not implemented.");
  }
 
  public username:string;
  // public clientID:'1a653274923672c235ab';
  // public clientsecret:'f771b691fc4ac6a9afc728a51042731d9c23edc3';
  public clientToken:'d5a6f91f993d023ae3b458ae267e733793d3764e';
  

  constructor(private http:HttpClient) { 
  console.log("service is now ready");
  this.username ='rosa1-maker';

}

getProfileInfo(){
  return this.http.get("https://api.github.com/users/" + this.username +"?client_token=d5a6f91f993d023ae3b458ae267e733793d3764e" );
}
getProfileRepos(){
  return this.http.get("https://api.github.com/users/" + this.username +"/repos?client_token=d5a6f91f993d023ae3b458ae267e733793d3764e");
}
updateProfile(username:string){
  this.username=username;
}
 }

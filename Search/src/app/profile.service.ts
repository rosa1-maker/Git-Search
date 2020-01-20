import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
 
  private username:string;
  private clientid:'d833c093de94beaa4502';
  private clientsecret:'fb810611732006b108c6e8e5a3c9a5215d42fd61';

  constructor(private http:HttpClient) { 
  console.log("service is now ready");
  this.username ='rosa1-maker'  ;

}

getProfileInfo(){
  return this.http.get("https://api.github.com/users/rosa1-maker" +this.username +"?client_id" +this.username + "&client_secret=" +this.clientsecret);



}
 }

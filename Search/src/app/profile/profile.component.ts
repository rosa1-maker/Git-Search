import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../profile.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  public prof: any;
  public repositories: any;
  public username: string;

  constructor(public profileService: ProfileService) {
    
    }
  findProf() {
    this.profileService.updateProfile(this.username);

    this.profileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.prof = profile;
    });
    this.profileService.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repositories = repos;
    });
  }
  ngOnInit() {
    this.profileService.updateProfile('rosa1-maker');
    this.profileService.getProfileInfo().subscribe(profile => this.prof =profile);
    this.profileService.getProfileRepos().subscribe(repos => this.repositories =repos );
  }
}

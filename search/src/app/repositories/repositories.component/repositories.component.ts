import { Component, OnInit } from '@angular/core';
import { GhHttpService } from "src/app/git.service"

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent {
  constructor(
    public name: string,
    public description: string,
    public svnUrl: string
  ) {}

  ngOnInit() {
  }
  
}

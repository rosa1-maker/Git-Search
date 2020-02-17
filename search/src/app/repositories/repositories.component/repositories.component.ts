import { Component, OnInit } from '@angular/core';

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

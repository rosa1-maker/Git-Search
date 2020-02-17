import { Component, OnInit } from "@angular/core";
import { GhHttpService } from "src/app/git.service";
import { Observable, of } from "rxjs";
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  tap,
  switchMap
} from "rxjs/operators";
import {User} from "src/app/User"
import {SearchingService} from "src/app/searching.service"
import {Repository } from "src/app/repository"
@Component({
  selector: 'app-user-profile',
  templateUrl: './user.component.html',
  providers: [GhHttpService, SearchingService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  form: any;
  model:string;
  user:User;
  repository: Repository[];
  searching = false;
  searchFailed = false;

  constructor(
    private service: GhHttpService,
    private _service: SearchingService,
    public avatarUrl: string,
    public bio: string,
    public followers: number,
    public following: number,
    public htmlUrl: string,
    public login: string,
    public name: string,
    public publicRepos: number
  ) {}

  ngOnInit() {}

  getUser({ value }) {
    this.service.username = value.search;
    this.service
      .userRequest()
      .then(() => (this.user = this.service.user))
      .catch(err => console.log(err));
    this.service
      .repoRequest()
      .then(() => (this.repository = this.service.repos))
      .catch(err => console.log(err));
    this.form.reset();
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => (this.searching = true)),
      switchMap(term =>
        this._service.search(term).pipe(
          tap(() => (this.searchFailed = false)),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          })
        )
      ),
      tap(() => (this.searching = false))
    );
}

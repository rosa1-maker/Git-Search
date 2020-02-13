import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../environments/environment";

const ghUrl = "https://api.github.com/search/users?client_token=${environment.apiKey='d5a6f91f993d023ae3b458ae267e733793d3764e}'";
const PARAMS = new HttpParams({
  fromObject: {
    client_token: environment.apiKey,
  }
});

@Injectable()
export class SearchingService {
  strArr = [];
  constructor(private http: HttpClient) {}

  search(term: string) {
    if (term === "") {
      return of([]);
    }

    return this.http
      .get(ghUrl, { params: PARAMS.set("q", `${term}+in:login`) })
      .pipe(
        map(response => {
          this.strArr = [];
          for (const user of response["items"]) {
            this.strArr.push(user.login);
          }
          return this.strArr;
        })
      );
  }
}

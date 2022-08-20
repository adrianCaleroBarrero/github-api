import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { iInfo, iUser, iUsersGithub } from '../models/users-github.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class RequestServicesService {
  private url: string = environment.HTTP;
  private searchUrl: string = 'https://api.github.com/search/users';
  constructor(public http: HttpClient) {}

  getOneUser(login: string) {
    return this.http.get<iUser>(this.url + `/${login}`);
  }

  getSearch(search: string) {
    return this.http
      .get<iInfo>(
        (this.searchUrl + `?q=${search}&page,per_page,sort,order}`) as string
      )
      .pipe(map(this.getInfo));
  }

  private getInfo(resp: iInfo) {
    return resp.items.map((searchUser: iUsersGithub) => {
      return {
        login: searchUser.login,
        id: searchUser.id,
        avatar_url: searchUser.avatar_url,
      };
    });
  }
  getAllFollowers(urlFollowers: string) {
    return this.http.get(urlFollowers);
  }

  getAllRepos(urlRepos: string) {
    return this.http.get(urlRepos);
  }
}

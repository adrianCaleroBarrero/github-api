import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  iCard,
  iReposGithub,
  iUser,
  iUsersGithub,
} from 'src/app/models/users-github.model';
import { iAppState } from 'src/app/rx/app.state';
import { RequestServicesService } from 'src/app/services/request-services.service';
import { __param } from 'tslib';
import * as acFollowers from '../../rx/followers-users/followers-users.action.creators';
import * as acRepos from '../../rx/repos-users/repos-users.action.creators';
import * as acUsers from '../../rx/users-github/users-github.action.creators';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.sass'],
})
export class InfoComponent implements OnInit {
  public userGithub: iUser | undefined;
  constructor(
    public store: Store<iAppState>,
    public request: RequestServicesService
  ) {}

  ngOnInit(): void {
    this.store
      .select((state: iAppState) => state.usersGithub)
      .subscribe({
        next: (data) => {
          this.userGithub = data.usersGithub[0];
          this.userGithub?.followers_url &&
            this.request
              .getAllFollowers(this.userGithub.followers_url as string)
              .subscribe({
                next: (data) =>
                  this.store.dispatch(
                    acFollowers.loadfollowersGithub({
                      followersGithub: data as iUsersGithub[],
                    })
                  ),
              });
          this.userGithub?.repos_url &&
            this.request
              .getAllRepos(this.userGithub.repos_url as string)
              .subscribe({
                next: (data) =>
                  this.store.dispatch(
                    acRepos.loadReposGithub({
                      reposGithub: data as iReposGithub[],
                    })
                  ),
              });
        },
      });
  }
}

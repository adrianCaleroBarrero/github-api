import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { iUsersGithub } from 'src/app/models/users-github.model';
import { iAppState } from 'src/app/rx/app.state';

@Component({
  selector: 'app-list-followers',
  templateUrl: './list-followers.component.html',
  styleUrls: ['./list-followers.component.sass'],
})
export class ListFollowersComponent implements OnInit {
  public isSearching = true;
  public listOfFollowers: iUsersGithub[] = [];
  constructor(public store: Store<iAppState>) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.followersGithub)
      .subscribe({
        next: (data) => {
          this.listOfFollowers =
            data.followersGithub as unknown as iUsersGithub[];
        },
      });
  }
}

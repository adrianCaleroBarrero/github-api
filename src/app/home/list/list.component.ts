import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { iAppState } from 'src/app/rx/app.state';
import { iCard, iUser, iUsersGithub } from 'src/app/models/users-github.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})
export class ListComponent implements OnInit {
  public list: iUser[] = [];
  constructor(public store: Store<iAppState>) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.usersGithub)
      .subscribe({
        next: (data) => {
          this.list = data.usersGithub as unknown as iUser[];
        },
      });
  }
}

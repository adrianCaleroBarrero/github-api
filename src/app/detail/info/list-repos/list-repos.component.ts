import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { iReposGithub } from 'src/app/models/users-github.model';
import { iAppState } from 'src/app/rx/app.state';

@Component({
  selector: 'app-list-repos',
  templateUrl: './list-repos.component.html',
  styleUrls: ['./list-repos.component.sass'],
})
export class ListReposComponent implements OnInit {
  public listOfRepos: iReposGithub[] = [];
  constructor(public store: Store<iAppState>) {}
  @Input()
  public: number | undefined;
  ngOnInit(): void {
    this.store
      .select((state) => state.reposGithub)
      .subscribe({
        next: (data) => (this.listOfRepos = data.reposGithub as iReposGithub[]),
      });
  }
}

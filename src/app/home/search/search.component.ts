import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { iSearch, iUsersGithub } from 'src/app/models/users-github.model';
import { iAppState } from 'src/app/rx/app.state';
import { RequestServicesService } from 'src/app/services/request-services.service';
import * as ac from '../../rx/users-github/users-github.action.creators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export class SearchComponent implements OnInit {
  search = new FormControl('');
  searchUsers: iUsersGithub[] = [];
  public loading: boolean = false;
  constructor(
    public store: Store<iAppState>,
    public request: RequestServicesService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(ac.loadUsersGithub({ usersGithub: [] }));
  }
  sendSearch() {
    this.loading = true;
    if ((this.search.value as string).length <= 2) {
      this.loading = false;
      this.store.dispatch(ac.loadUsersGithub({ usersGithub: [] }));
    } else if ((this.search.value as string).length >= 3) {
      this.search.value &&
        this.request.getSearch(this.search.value as string).subscribe({
          next: (data: any) =>
            this.store.dispatch(ac.loadUsersGithub({ usersGithub: data })),
        });
      this.loading = false;
    }
  }
}

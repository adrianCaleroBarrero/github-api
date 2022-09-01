import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { iAppState } from '../rx/app.state';
import { RequestServicesService } from '../services/request-services.service';
import * as ac from '../rx/users-github/users-github.action.creators';
import { iUser } from '../models/users-github.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass'],
})
export class DetailComponent implements OnInit {
  public loginName: string | null = '';
  public param: string | undefined;
  constructor(
    public route: ActivatedRoute,
    public request: RequestServicesService,
    public store: Store<iAppState>
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.loginName = param.get('login');
    });

    this.request.getOneUser(this.loginName as string).subscribe({
      next: (data) =>
        this.store.dispatch(
          ac.loadUsersGithub({ usersGithub: [data] as iUser[] })
        ),
    });
  }
}

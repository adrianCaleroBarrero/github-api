import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { iUsersGithub } from 'src/app/models/users-github.model';
import { iAppState } from 'src/app/rx/app.state';
import { RequestServicesService } from 'src/app/services/request-services.service';

@Component({
  selector: 'app-card-follower',
  templateUrl: './card-follower.component.html',
  styleUrls: ['./card-follower.component.sass'],
})
export class CardFollowerComponent implements OnInit {
  constructor(
    public store: Store<iAppState>,
    public request: RequestServicesService
  ) {}
  @Input()
  follower!: iUsersGithub;
  ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';
import { iReposGithub } from 'src/app/models/users-github.model';

@Component({
  selector: 'app-card-repo',
  templateUrl: './card-repo.component.html',
  styleUrls: ['./card-repo.component.sass'],
})
export class CardRepoComponent implements OnInit {
  constructor() {}
  @Input()
  repo!: iReposGithub;
  ngOnInit(): void {}
}

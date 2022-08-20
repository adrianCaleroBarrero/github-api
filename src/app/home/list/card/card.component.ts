import { Component, Input, OnInit } from '@angular/core';
import { iUser } from 'src/app/models/users-github.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent implements OnInit {
  constructor() {}
  @Input()
  user!: iUser;
  ngOnInit(): void {}
}

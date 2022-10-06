import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { iUser } from 'src/app/models/users-github.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent implements OnInit {
  constructor(public router: Router) {}
  @Input() user: iUser | undefined;
  ngOnInit(): void {}
  async onRefresh() {
    await this.router.navigate([`/detail/${this.user?.login}`]);
    window.location.reload();
  }
}

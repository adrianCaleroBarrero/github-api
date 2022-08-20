import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { InfoComponent } from './info/info.component';
import { ListFollowersComponent } from './info/list-followers/list-followers.component';
import { CardFollowerComponent } from './info/list-followers/card-follower/card-follower.component';
import { ListReposComponent } from './info/list-repos/list-repos.component';
import { CardRepoComponent } from './info/list-repos/card-repo/card-repo.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    DetailComponent,
    InfoComponent,
    ListFollowersComponent,
    CardFollowerComponent,
    ListReposComponent,
    CardRepoComponent,
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    DetailRoutingModule,
    MatProgressSpinnerModule,
  ],
})
export class DetailModule {}

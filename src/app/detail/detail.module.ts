import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { InfoComponent } from './info/info.component';
import { ListFollowersComponent } from './info/list-followers/list-followers.component';
import { ListReposComponent } from './info/list-repos/list-repos.component';
import { CardRepoComponent } from './info/list-repos/card-repo/card-repo.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CoreModule } from '../core/core.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    DetailComponent,
    InfoComponent,
    ListFollowersComponent,
    ListReposComponent,
    CardRepoComponent,
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    DetailRoutingModule,
    MatProgressSpinnerModule,
    CoreModule,
    MatCardModule,
  ],
})
export class DetailModule {}

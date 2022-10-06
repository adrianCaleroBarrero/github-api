import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ListComponent } from './list/list.component';
import { HomeRoutingModule } from './home-routing.module';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [HomeComponent, ListComponent, SearchComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    CoreModule,
  ],
})
export class HomeModule {}

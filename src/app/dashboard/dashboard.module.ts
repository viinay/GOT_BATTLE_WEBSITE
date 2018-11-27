import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ListofplacesComponent } from './listofplaces/listofplaces.component';
import { StatsComponent } from './stats/stats.component';
import { SearchresultComponent } from './searchresult/searchresult.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchComponent, ListofplacesComponent, StatsComponent, SearchresultComponent]
})
export class DashboardModule { }

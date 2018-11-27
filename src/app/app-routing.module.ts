import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './dashboard/search/search.component';
import { ListofplacesComponent } from './dashboard/listofplaces/listofplaces.component';
import { StatsComponent } from './dashboard/stats/stats.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchresultComponent } from './dashboard/searchresult/searchresult.component';
const routes: Routes = [
  {path:"", component: NavbarComponent},
  { path: 'battle-search', component:  SearchComponent},
  {path: 'battle-results', component: SearchresultComponent},
  { path: 'list-of-places-component', component:  ListofplacesComponent},
  { path: 'stats-component', component:  StatsComponent},
  {path:"**", component: NotfoundComponent},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})


export class AppRoutingModule { 
  
}

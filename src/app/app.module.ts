import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './dashboard/search/search.component';
import { ListofplacesComponent } from './dashboard/listofplaces/listofplaces.component';
import { StatsComponent } from './dashboard/stats/stats.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SearchresultComponent } from './dashboard/searchresult/searchresult.component';
import { ShareService } from './services/share.service';
import { Restangular } from 'ngx-restangular';
import { RestangularModule } from 'ngx-restangular';
import { constants } from './services/constants.services';
import { HttpModule } from '@angular/http';

export function RestangularConfigFactory(RestangularProvider) {
  
  RestangularProvider.setBaseUrl("https://test-app-123412.herokuapp.com");
  RestangularProvider.setDefaultHeaders({'Access-Control-Allow-Origin' : 'https://test-app-123412.herokuapp.com', "Content-Type": "application/json"});
}
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListofplacesComponent,
    StatsComponent,
    SearchresultComponent,
    NavbarComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    HttpModule    
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }

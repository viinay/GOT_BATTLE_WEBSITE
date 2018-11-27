import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ShareService } from '../../services/share.service';
import { APIservicesService } from '../../services/apiservices.service';
import { constants } from '../../services/constants.services';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
   private router: Router,
   private _route : ActivatedRoute,
   private _platformStrategy: Location,
   private share: ShareService,
   private api: APIservicesService,

  ) { }
  queryobj = {
    name : null,
    attacker_king: null,
    defender_king: null,
    attacker_outcome:null,
    battle_type:null,
    attacker_commander: null,
    defender_commander: null,
    location:null,
    region:null
  }
  nameOfBattles = []
  ngOnInit() {
    console.log(this._route.snapshot);
    
  }

  getSearchQuery(){
    console.log(this.queryobj);
    let query = this.queryobj;
        for (const key in query) {
          if (query.hasOwnProperty(key)) {
            const element = query[key];
            if(element == null){
              delete query[key];
            }
          }
        }
    this.getSearchResults(query)
    this.share.publishObject([this.nameOfBattles], ['query']);

    this.router.navigate(['/battle-results'] ,{queryParams: this.queryobj});
  }

  getSearchResults(result){
    console.log("this is params", result)
    this.api.getSearchResult(result, (err,res)=>{
      if(err) {
        console.log("failed")
        return console.log(err);}
      else{
        res = JSON.parse(JSON.stringify(res))
        console.log('res ==>',res)
        this.nameOfBattles = res.map(r=>r.name);
        console.log(this.nameOfBattles);
        constants.GLOBAL.nameOfBattles = this.nameOfBattles;
        console.log("global variable in search", constants.GLOBAL.nameOfBattles);
      }
      
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../services/share.service';
import { APIservicesService } from '../../services/apiservices.service';
import { Http } from '@angular/http';
import { constants } from '../../services/constants.services';
@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {

  result = null;
  nameOfBattles = []

  constructor(private share: ShareService,
  private api: APIservicesService,
  private _http:Http,
) {}
   queryRes = []
  ngOnInit() {
    console.log(" constants in search result", constants.GLOBAL.nameOfBattles)
   setTimeout(() => {
    this.queryRes = constants.GLOBAL.nameOfBattles 
   }, 300);
  }
}

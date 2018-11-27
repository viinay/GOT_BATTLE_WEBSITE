import { Injectable } from '@angular/core';
import { constants } from "./constants.services";
import { Restangular } from "ngx-restangular";
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class APIservicesService {

  constructor(
    private restangular: Restangular,
    private _http:Http
  ) { }

  getList(cb) {
    let list = this.restangular.one(
      constants.APIS.GET_LIST
    )

    list.
      get('')
      .toPromise()
      .then(res => {

        res = res.plain()
        if (cb) cb(null, res);

      }, err => {
        if (cb) cb(err, null);
      });
  }

  getCount(cb) {
    let count = this.restangular.one(
      constants.APIS.GET_COUNT
    )

    count.
      get()
      .toPromise()
      .then(res => {

        res = res.plain()
        if (cb) cb(null, res);

      }, err => {
        if (cb) cb(err, null);
      });
  }

  getStats(cb) {
    let stats = this.restangular.one(
      constants.APIS.GET_STATS
    )

    stats.
      get()
      .toPromise()
      .then(res => {

        res = res.plain()
        if (cb) cb(null, res);

      }, err => {
        if (cb) cb(err, null);
      });
  }

  getSearchResult(params,cb) {
    console.log('getSearchResult , params ',params)
    this._http.get('http://localhost:3000'+constants.APIS.GET_SEARCH,{params:params})
      .subscribe(data=>{
        console.log(data)
        if(cb) cb(null, data.json())
      },error=>{
        console.log(error)
        if(cb) cb(error, null)
      })
  }

  getres(params,cb) {
    let stats = this.restangular.one(
      constants.APIS.GET_SEARCH
    )

    stats.
      get('',{params:params})
      .toPromise()
      .then(res => {

        res = res.plain()
        if (cb) cb(null, res);

      }, err => {
        if (cb) cb(err, null);
      });
  }


}



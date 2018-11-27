


import { Injectable } from '@angular/core';
import { Subject } from "rxjs"

import { share } from 'rxjs/operators';
@Injectable()
export class ShareService {

  private shareObj = new Subject<any>()
  private data = {
    query: null
  }
  share$ = this.shareObj.asObservable()
  constructor() {
  }
  
  publishObject(values, keys) {
    for (let index = 0; index < keys.length; index++) {
      let element = keys[index]
      this.data[element] = values[index]
    }
    this.shareObj.next(this.data)
    console.log('publish done ',this.data)
  }
  clearAll() {

    this.data = {
      query: null
    }
    this.shareObj.next(this.data)
  }

}
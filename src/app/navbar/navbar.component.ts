import { Component, OnInit } from '@angular/core';
import { APIservicesService } from '../services/apiservices.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private api: APIservicesService) { }

  totalCount=0;
  ngOnInit() {
    this.api.getCount((err,res)=>{
      if(err) return console.log("error returned");
      console.log(res)
      this.totalCount = res[0].count;
    })
  }

}

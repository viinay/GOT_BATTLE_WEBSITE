import { Component, OnInit } from '@angular/core';
import { APIservicesService } from '../../services/apiservices.service';

@Component({
  selector: 'app-listofplaces',
  templateUrl: './listofplaces.component.html',
  styleUrls: ['./listofplaces.component.css']
})
export class ListofplacesComponent implements OnInit {

  constructor(private api : APIservicesService) { }
  listOfPlaces  = []
  ngOnInit() {
    this.api.getList((err,res)=>{
      if(err) return err;
      this.listOfPlaces
      res.forEach(element => {
        let k = element.split(",")
        k.forEach(x => {
          this.listOfPlaces.push(x);
        });
      });
    })

  }

}

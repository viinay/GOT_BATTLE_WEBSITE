import { Component, OnInit } from '@angular/core';
import { APIservicesService } from '../../services/apiservices.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private api: APIservicesService) { }
  results = {
    battleType: [],
    aggregate: [],
    winLoss: [],
    attacker: [],
    defender:[],
    region:[],
    name:[]
  }
  ngOnInit() {
    this.api.getStats((err,res)=>{
      if(err) console.log(err)

      this.results.aggregate = res[0];
      this.results.winLoss[0] = res[2];
      this.results.winLoss[1] = res[3];
      this.results.attacker = res[4];
      this.results.defender = res[5];
      this.results.region = res[6];
      this.results.name = res[7];
      for(let i = 8; i<res.length;i++){
        if(res[i].type != ""){
        this.results.battleType[i-8] = res[i];
        }
      }
      console.log(this.results.battleType);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import {FetchRecordsService} from '../fetch-records.service';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css'],
  providers: [FetchRecordsService]
})
export class EmpInfoComponent implements OnInit {

  constructor(private fetch: FetchRecordsService ) { }

  info1recieved : string[] = [];
  info2recieved : string[] = [];
  info3recieved : string[] = [];

  getdata1(){
    this.info1recieved = this.fetch.getinfo1()
  }
  getdata2(){
    this.info2recieved = this.fetch.getinfo2()
  }
  getdata3(){
    this.info3recieved = this.fetch.getinfo3()
  }


  ngOnInit(): void {
  }

}

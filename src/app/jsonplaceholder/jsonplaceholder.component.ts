import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {Post} from "../post";

@Component({
  selector: 'app-jsonplaceholder',
  templateUrl: './jsonplaceholder.component.html',
  styleUrls: ['./jsonplaceholder.component.scss']
})
export class JsonplaceholderComponent implements OnInit {

  constructor(public data: DataService) { }

  ngOnInit(): void {
    this.data.getData();
  }

}

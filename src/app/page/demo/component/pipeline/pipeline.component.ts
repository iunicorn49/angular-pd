import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.css']
})
export class PipelineComponent implements OnInit {

  private time: Date = new Date();
  private pi = 3.1415926;

  constructor() { }

  ngOnInit() {
  }

}

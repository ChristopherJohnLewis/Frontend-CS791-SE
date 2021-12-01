import { Component, OnInit } from '@angular/core';
declare const Plotly: any;

@Component({
  selector: 'app-evaluate-model',
  templateUrl: './evaluate-model.component.html',
  styleUrls: ['./evaluate-model.component.css']
})
export class EvaluateModelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var trace1 = {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      type: 'scatter'
    };
    
    var trace2 = {
      x: [1, 2, 3, 4],
      y: [16, 5, 11, 9],
      type: 'scatter'
    };
    
    var data = [trace1, trace2];
    
    Plotly.newPlot('Graph', data);
  }

}

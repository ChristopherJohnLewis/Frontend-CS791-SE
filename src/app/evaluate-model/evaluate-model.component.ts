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
    var DataSource1 = {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      type: 'scatter',
      name: 'Data Source 1'
    };
    
    var DataSource2 = {
      x: [1, 2, 3, 4],
      y: [16, 5, 11, 9],
      type: 'scatter',
      name: 'Data Source 2'
    };
    
    var data = [DataSource1, DataSource2];
    
    var layout = {
      title: 'Sample Graph',
      xaxis: {
        title: 'X Axis Data',
      },
      yaxis: {
        title: 'Y Axis Data',
      }
    };

    Plotly.newPlot('Graph', data, layout);
  }

}

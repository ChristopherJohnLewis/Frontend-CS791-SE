import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

declare const Plotly: any;

@Component({
  selector: 'app-evaluate-model',
  templateUrl: './evaluate-model.component.html',
  styleUrls: ['./evaluate-model.component.css']
})

@Injectable()
export class EvaluateModelComponent implements OnInit {
  data:Array<any> = [];
  layout:Object = {};
  configUrl:String = 'assets/configurations/routes.json';
  options:Object={};
  foo:Number=1;
  contents:any="test";
  constructor(private http: HttpClient) {     
    let data:Array<any> = [];
    
    this.layout = {
      title: 'Sample Graph',
      xaxis: {
        title: 'Validation Loss',
      },
      yaxis: {
        title: 'Validation Accuracy',
      }
    };

    this.options= {
      responseType: 'json'
    };
    this.http.get('localhost:5001/result', this.options).subscribe(results => {this.contents = results;
      console.log(results);
    
    });
    //client.get('/foo', {responseType: 'text'})
  }


  getConfig() {
    console.log(this.contents);    
    return 'foo';
  }

  ngOnInit(): void {
    var DataSource1 = {
      x: [0.5679289102554321, 0.059667445719242096, 0.0524849072098732, 0.047633588314056396, 0.05572905391454697],
      y: [0.0010944444220513105, 0.001438888837583363, 0.00559999980032444, 0.009427777491509914, 0.010905555449426174],
      type: 'scatter',
      name: 'Data Source 1'
    };
    
    var DataSource2 = {
      x: [0.4950181841850281, 0.05495476350188255, 0.05163992941379547, 0.05056384205818176, 0.057103149592876434],
      y: [0.00041666667675599456, 0.004022222012281418, 0.004749999847263098, 0.013144444674253464, 0.01693333312869072],
      type: 'scatter',
      name: 'Data Source 2'
    };
    this.data.push(DataSource1);
    this.data.push(DataSource2);
    
    Plotly.newPlot('Graph', this.data, this.layout);
  }

}

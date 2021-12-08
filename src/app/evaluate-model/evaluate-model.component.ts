import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelResult } from '../api-util/api-interfaces';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Xliff } from '@angular/compiler';
import { update } from 'plotly.js';

declare const Plotly: any;




@Component({
  selector: 'app-evaluate-model',
  templateUrl: './evaluate-model.component.html',
  styleUrls: ['./evaluate-model.component.css']
})

@Injectable()
export class EvaluateModelComponent implements OnInit {

  metrics: Array<string> = ['TP', 'TN', 'FP', 'FN', 'Epochs', 'train_acc', 'train_loss', 'valid_acc', 'valid_loss'];
  private _xLabel: string = "Epochs";
  private _yLabel: string = "train_acc";
  get xLabel(): string {
    return this._xLabel;
  }
  set xLabel(selection: string) {
    this._xLabel = selection;
    this.updateGraph(selection, this.yLabel, "Graph");
  }

  get yLabel(): string {
    return this._yLabel;
  }
  set yLabel(selection: string) {
    this._yLabel = selection;
    this.updateGraph(this.xLabel, selection, "Graph");
  }

  updateGraph(xaxis:string,yaxis:string, graph:string):void {
    this.layout = {
      title: 'Sample Graph',
      xaxis: {
        title: xaxis,
      },
      yaxis: {
        title: yaxis,
      }
    };
    let restyle: any = [];
    xaxis = xaxis.toLowerCase();
    yaxis = yaxis.toLowerCase();
    for (var datum of this.contents)
    {
      if (this.plot)
      {
        restyle.push({x:datum[xaxis],y:datum[yaxis], type:'scatter', name: 'Data Source ' + datum.result_id});
      }
    }
    Plotly.react(graph, restyle, this.layout );
  }

  data:Array<any> = [];
  //layout:Object = {};
  configUrl:String = 'assets/configurations/routes.json';
  options:Object={};
  foo:Number=1;
  contents:any="test";
  plot:any;
  datasets: any = [];
  dataset: string='mnist';
  datasetID: number = 1;

  layout:object = {
    title: 'Sample Graph',
    xaxis: {
      title: this.xLabel,
    },
    yaxis: {
      title: this.yLabel,
    }
  };
  constructor(private http: HttpClient) {     
    let data:Array<any> = [];
    
    

    this.options= {
      responseType: 'json'
    };
    var test = this.http.get<ModelResult>('http://134.197.86.47:5001/result?dataset_id='+this.datasetID, this.options).subscribe(
      data=>
      {
          this.contents=data;
          for (var datum of this.contents)
          {
            if (this.plot)
            {
              Plotly.addTraces('Graph',{y:datum.train_loss, type:'scatter', name: 'Data Source ' + datum.result_id})
            }
          }
      },
      error =>
      {
          console.log(error);
      }
  );
  this.http.get('http://134.197.86.47:5001/getdatasets').subscribe(data => {this.datasets = data; console.log(data);});
    //client.get('/foo', {responseType: 'text'})
  }


  getConfig() {
    console.log(this.contents);    
    return 'foo';
  }

  clicked(){
   this.plot = Plotly.react('Graph', [], []);
    var test = this.http.get<ModelResult>('http://134.197.86.47:5001/result?dataset_id='+this.datasetID, this.options).subscribe(
      data=>
      {
          this.contents=data;
          for (var datum of this.contents)
          {
            if (this.plot)
            {
              Plotly.addTraces('Graph',{y:datum.train_loss, type:'scatter', name: 'Data Source ' + datum.result_id})
            }
          }
      },
      error =>
      {
          console.log(error);
      }
    );
  }

  ngOnInit(): void {
    /*var DataSource1 = {
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
    this.data.push(DataSource2);*/

    this.plot = Plotly.newPlot('Graph', this.data, this.layout);
  }

}

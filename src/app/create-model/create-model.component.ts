import { Component, OnInit } from '@angular/core';
import { ModelRequest } from 'src/app/api-util/api-interfaces';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-create-model',
  templateUrl: './create-model.component.html',
  styleUrls: ['./create-model.component.css']
})
export class CreateModelComponent implements OnInit {

  libraries: Array<string> = ["AutoKeras", "Auto-PyTorch"];
  datasets: Array<string> = ['mnist', 'cats_vs_dogs', 'forrest_fires', 'wordnet'];

  private _library: string ='AutoKeras';
  public lib: string ='';

  public get library(): string {
    return this._library;
  }

  public set library(selection: string) {
    this._library = selection;
  }
  
  private _data: string='mnist';
  public get data(): string{
    return this._data;
  }
  public set data(dataset: string) {
    this._data = dataset;
  }
  
  epoch: Number = 10;
  max_trials: Number = 10;
  data_type: Number = 0;
  model_type: Number = 0;
  tuner: String = 'Greedy';
  public clicked():void{
    console.log(this.data);
    console.log(this.library);
    console.log(this.epoch);
    console.log("here now yall");
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}

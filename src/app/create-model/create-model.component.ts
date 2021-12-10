// Create model component
import { Component, OnInit } from '@angular/core';
import { ModelRequest } from 'src/app/api-util/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription, throwError, timer } from 'rxjs';

type names = {
  name: String,
  value: Number
};

type Job = {
  uuid: String,
  state: String
};

@Component({
  selector: 'app-create-model',
  templateUrl: './create-model.component.html',
  styleUrls: ['./create-model.component.css']
})
export class CreateModelComponent implements OnInit {
  // initial variables
  libraries: Array<string> = ["AutoKeras", "Auto-PyTorch"];
  datasets: Array<string> = ['mnist', 'cats_vs_dogs', 'forest_fires', 'wordnet', 'lfw', 'pet_finder','stanford_dogs','tf_flowers',"caltech_birds2010", 'fashion_mnist'];
  data_types: Array<names> = [{name:"Image", value: 0}, {name:"Text",value: 1}, {name:"Structured Data", value: 2}];
  model_types: Array<names> = [{name: "Classification", value: 0 }, {name: "Regression", value: 1}];
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
  //expands the dropdown for adding a model to be generated
  public clicked():void{
    console.log(this.data);
    console.log(this.library);
    console.log(this.epoch);
    console.log("here now yall 21");
    this.http.post('http://localhost:5000/runmodel', {
      library: this.library,
      data: this.data, // this will pull from a list of tensorflow datasets
      epochs: this.epoch,
      maxtrials: this.max_trials,
      model_type: this.model_type, // 0 is classification, 1 is regression
      tuner: this.tuner, // Accept values should be 'greedy', 'bayesian', 'hyperband', 'random' this is particular to autokeras
      data_type: this.data_type // 0 is image, 1 is text, 2 is structured data
    }).subscribe(data => {console.log(data);});
  }

  constructor(private http: HttpClient) { 
    this.initialize();
  }

  ngOnInit(): void {
  }
  //determines how fast we query the backend for jobs
  jobUpdate: Observable<number> = timer(0, 2000);
  jobStates: Array<Job> = [];
  //initial pulling from backend that then lets us subscribe to that rest API endpoint
  initialize() : void {
    this.sub = this.jobUpdate.subscribe((number) => {
      this.http.get('http://localhost:5000/jobstates').subscribe(data => {
        this.jobStates = [];
        //console.log(data);
        for (const [k,v] of Object.entries(data)) {
          let job: Job = {uuid: v.uuid, state: v.state};
          this.jobStates.push(job);
        }
      });
    });
  }

  sub: any;
  

}

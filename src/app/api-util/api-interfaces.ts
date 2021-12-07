export interface ModelResult {
    dataset_id: Number;
    enddate: String;
    fn: Array<Number>;
    fp: Array<Number>;
    tn: Array<Number>;
    tp: Array<Number>;
    model_id: Number;
    result_id: Number;
    train_acc: Array<number>;
    train_loss: Array<number>;
    valid_acc: Array<number>;
    valid_loss: Array<number>;
  }

export interface ModelRequest {
    library: String;
    data: String; // this will pull from a list of tensorflow datasets
    datainput: String; // not used
    datatarget: String; // not used
    epochs: Number;
    maxtrials: Number; 
    model_type: Number; // 0 is classification, 1 is regression
    seed: Number; 
    tuner: String; // Accept values should be 'greedy', 'bayesian', 'hyperband', 'random' this is particular to autokeras
    data_type: Number; // 0 is image, 1 is text, 2 is structured data
}
export interface Objective {
  completed: String;
  total: String;
  comparison: String;
}

export interface sample {
  name: String;
  progress: String;
  objetive: Array<Objective>;
}

export interface Sample1 {
  sample: Array<sample>;
}

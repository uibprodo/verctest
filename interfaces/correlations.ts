export interface ITableSummaryData {
  id: string;
  icon?: string;
  description?: string | null;
  stat: number;
}

export interface ICorrelationData {
  coos: { [key: string]: ICorrelationAttributes };
  locations: { [key: string]: ICorrelationAttributes };
  persons: { [key: string]: ICorrelationAttributes };
  organizations: { [key: string]: ICorrelationAttributes };
  events: { [key: string]: ICorrelationAttributes };
  articles: { [key: string]: ICorrelationAttributes };
  products: { [key: string]: ICorrelationAttributes };
  others: { [key: string]: ICorrelationAttributes };
}

export interface ICorrelationAttributes {
  significance: number;
  title?: string | null;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
}

export interface IFormattedCorrelationData {
  topic: ITableSummaryData[];
  coo: ITableSummaryData[];
}

export interface ICorrelationsInstance {
  id: number;
  x: number;
  product: string;
  date: string;
  end_time: number;
  start_time: number;
  flag: number;
  sentiment: ISentiment;
  emp_id: number;
  employee: string;
  visibility: boolean;
  title: string;
}

export interface ISentiment {
  score: number;
  magnitude: number;
}

export interface ICorrelationAggrigations {
  prod: IProd[];
  emp: IEmp[];
  days: IDays;
  attribs: IAttribs;
  int_ext: IntEXT[];
}

export interface IAttribs {
  title: string;
}

export interface IDays {
  [key: string]: number;
}

export interface IEmp {
  id: number;
  fullname: string;
  picture: string;
  count: number;
  visibility: boolean;
  perc: number;
}

export interface IntEXT {
  int_ext: number;
  count: number;
}

export interface IProd {
  name: string;
  count: number;
  perc: number;
}

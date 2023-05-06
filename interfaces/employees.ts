import { IRolesAndManagers } from './managers';

export interface IEmployeeList {
  [key: string]: IEmployee;
}
export interface IEmployee {
  activate_workshift?: number;
  days?: { [key: string]: Day };
  domain_id?: number;
  domain_name?: string;
  email?: string;
  emp_holidays?: { [key: string]: Day };
  fullname?: string;
  id?: number;
  is_app_user?: number;
  manager?: number;
  manager_details?: ManagerDetails;
  own_details_visibility?: number;
  picture?: string;
  role?: number;
  scr?: SelfScr;
  status?: number;
  strata?: number;
  timezone?: string;
}

export interface Day {
  scr?: DayScr;
  strata?: number;
}

export interface DayScr {
  l?: number;
  p?: number;
}

export interface ManagerDetails {
  email?: string;
  fullname?: string;
  id?: number;
  role?: number;
  status?: number;
  picture?: string;
}

export interface SelfScr {
  delta?: number;
  l?: number;
  in?: number | boolean;
  out?: number | boolean;
}

export interface IRoles {
  [key: string]: string;
}

export interface IEmployeeStats {
  detail: { [key: string]: Detail };
  limits: Limits;
  tzoffset: number;
  emptz: string;
  busy5m: Busy5M;
  gap_time: GapTime;
  visibility: boolean;
}

export interface Busy5M {
  data: Array<Array<number | string>>;
  has_any: boolean;
}

export interface Detail {
  id?: string;
  title: string;
  flag: number;
  product: string;
  time: number[];
  time_range: number;
  sentiment: Sentiment;
  relTime?: number[];
}

export interface Sentiment {
  magnitude: number;
  score: number;
}

export interface GapTime {
  total: number;
  gap_times: Array<number[]>;
}

export interface Limits {}

//employeeAjax structure
export interface IEmployeeAjax {
  employees?: IEmployeeList;
  prev_offset?: number;
  roles_and_managers?: IRolesAndManagers;
  self?: IEmployee;
}

export interface IEmployeeDashboardAjax {
  day_stats?: { [key: string]: Array<[string, number]> };
  employees?: IEmployeeList;
  holidays?: any;
  prodoscores?: IProdoscores;
}

export interface IProdoscores {
  organization: IOrganization;
  self: ISelf;
  team: ITeam;
}

export interface IOrganization {
  score: [number, string];
  score_delta: [string, number] | boolean;
  score_extremes: Array<[number, string]>;
}

export interface ISelf {
  rank: number;
  score: [number, string];
  score_delta: [string, number] | boolean;
}

export interface ITeam {
  score: [number, string];
  score_delta: [string, number] | boolean;
  score_extremes: Array<[number, string]>;
}

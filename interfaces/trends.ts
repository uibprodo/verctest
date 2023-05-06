export interface IEmployeeTrendsMock {
  emp_prod_data?: Array<Array<number | string>>;
  has_more?: boolean;
}

export interface IRawDataTrendsMock {
  raw_data?: Array<Array<number | string>>;
  has_more?: boolean;
}

export interface LoginActivityTrendsMock {
  user_id?: number;
  email?: string;
  fullname?: string;
  role?: string;
  logged_time?: number;
}

export interface AdminActivitiesMock {
  user_id?: number;
  email?: string;
  fullname?: string;
  role?: string;
  page?: string;
  task?: string;
  activity_time?: number;
}

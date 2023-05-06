//my employee products
export interface EmployeeDashboardProductsMock {
  products?: { [key: string]: IMyProduct };
  date_unformatted?: string;
  date?: string;
}

export interface IMyProduct {
  product_name?: string;
  product_icon?: string;
  product_metric?: string;
  input?: string;
  input_extremes?: string[] | [number, string];
  input_delta?: InputDelta;
}

export interface InputDelta {
  percentage?: string;
  delta?: string;
}

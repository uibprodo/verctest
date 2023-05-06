// import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export type Segments = {
  id?: number;
  label?: string;
};

export type EventsUi = {
  id: string;
  position?: string;
  top?: number;
  left?: number;
  width?: number;
  height?: number;
  right?: number;
  bottom?: number;
  label?: string;
  eventHeight?: number;
  icon?: string;
};

export type GapTimeMarker = {
  left: number;
  title: string;
};

export type GapTime = {
  left: number;
  width: number;
};

export type EmployeeFilterTable = {
  heading: string;
  colItem: string;
  width: string;
  mediaQuery: string;
};

export type CorrelationFilterItem = {
  name: string;
  checked: boolean;
  // icon?: IconDefinition;
  iconColor?: string;
  param: string;
};

export type CorrelationEntityItem = {
  heading: string;
  colItem: string;
  colSpan?: number;
  className?: string;
};

export type TrendsTableStructure = {
  heading: string;
  className?: string;
  colItem?: string;
  filterAvailable?: boolean;
  filterValue?: boolean;
};

export type TransformedEmployees = {
  employeeId: number;
  employeeName: string;
  userRole: string;
  managerName: string;
  score: string | number;
  performance: string | number;
  inOffice: string | number | boolean;
  remote: string | number | boolean;
  domainName: string;
};

export type RangeColorVariations = {
  textColor: string;
  bgColor: string;
  strokeColor: string;
  fillColor: string;
};

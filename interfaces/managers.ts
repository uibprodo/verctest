export interface IManagerScore {
  id: number;
  name: string;
  subordinates: number;
  manager: number;
}

export interface IRolesAndManagers {
  managers?: IManagerList;
  roles?: number[];
}
export interface IManagerList {
  [key: string]: IManager;
}
export interface IManager {
  email?: string;
  fullname?: string;
  id?: number;
  picture?: string;
  role?: number;
  status?: number;
}

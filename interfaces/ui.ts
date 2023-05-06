export interface ISideBarMainMenuItem {
  pageName: string;
  icon: any;
  link: string;
  isBeta: boolean;
  isExpandable: boolean;
}

export interface ISideBarBottomItem {
  pageName: string;
  icon: any;
  link?: string;
}

export interface ISideBarItems {
  mainMenuItems: ISideBarMainMenuItem[];
  bottomMenuItems: ISideBarBottomItem[];
}

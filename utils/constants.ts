// import {
//   faCalendar,
//   faUser,
//   faBuilding,
//   IconDefinition,
//   faAddressBook,
//   faMapMarker,
//   faBook,
//   faArchive,
//   faTag,
// } from '@fortawesome/free-solid-svg-icons';

import { ISideBarItems } from '@/interfaces/ui';

import feedbackIcon from '../public/img/icons/sidebar/chat.svg';
import dashBoardIcon from '../public/img/icons/sidebar/dashboard.svg';
import employeesIcon from '../public/img/icons/sidebar/employees.svg';
import enterpriseIcon from '../public/img/icons/sidebar/enterprise-dashboard.png';
import managersIcon from '../public/img/icons/sidebar/managers.svg';
import myProdoscoreIcon from '../public/img/icons/sidebar/my-prodoscore.svg';
import socialNetworkIcon from '../public/img/icons/sidebar/network.svg';
import settingsIcon from '../public/img/icons/sidebar/settings.svg';
import correlationsIcon from '../public/img/icons/sidebar/socialnetwork.svg';
import trendsIcon from '../public/img/icons/sidebar/trends.svg';
import workPlaceProdIcon from '../public/img/icons/sidebar/workplace-prod.svg';
import {
  CorrelationEntityItem,
  CorrelationFilterItem,
  EmployeeFilterTable,
  TrendsTableStructure,
} from './types';

//Correlation entity colors
export const colorDictionary: { [name: string]: string } = {
  coos: 'hsl(57, 54%, 48%)',
  locations: 'hsl(0, 72%, 50%)',
  persons: 'hsl(281, 78%, 53%)',
  organizations: 'hsl(207, 76%, 48%)',
  events: 'hsl(180, 85%, 42%)',
  articles: 'hsl(220, 72%, 58%)',
  products: 'hsl(1, 72%, 58%)',
  others: 'hsl(134, 69%, 39%)',
};

//Correlation entity icons
// export const faDictionary: { [name: string]: IconDefinition } = {
//   coos: faAddressBook,
//   locations: faMapMarker,
//   persons: faUser,
//   organizations: faBuilding,
//   events: faCalendar,
//   articles: faBook,
//   products: faArchive,
//   others: faTag,
// };

export enum TableRowType {
  ListItemType,
  HTMLTableType,
}

export enum TrendType {
  Employee,
  RawData,
  LoginActivity,
  AdminActivity,
}

//Sidebar variations
//Main sidebar values
export const MainSideBar: ISideBarItems = {
  mainMenuItems: [
    {
      pageName: 'Dashboard',
      icon: dashBoardIcon,
      link: '/dashboard',
      isBeta: false,
      isExpandable: false,
    },
    {
      pageName: 'Managers',
      icon: managersIcon,
      link: '/managers',
      isBeta: false,
      isExpandable: false,
    },
    {
      pageName: 'Employees',
      icon: employeesIcon,
      link: '/employees',
      isBeta: false,
      isExpandable: false,
    },
    {
      pageName: 'Workplace Productivity',
      icon: workPlaceProdIcon,
      link: '/workplace',
      isBeta: true,
      isExpandable: false,
    },
    {
      pageName: 'Correlations',
      icon: socialNetworkIcon,
      link: '/correlations',
      isBeta: true,
      isExpandable: false,
    },
    {
      pageName: 'Trends',
      icon: trendsIcon,
      link: '/trends',
      isBeta: true,
      isExpandable: false,
    },
    {
      pageName: 'Social Network',
      icon: correlationsIcon,
      link: '/socialnetwork',
      isBeta: true,
      isExpandable: false,
    },
    {
      pageName: 'Enterprise',
      icon: enterpriseIcon,
      link: '/enterprise',
      isBeta: true,
      isExpandable: false,
    },
  ],
  bottomMenuItems: [
    {
      pageName: 'Settings',
      icon: settingsIcon,
      link: '/settings',
    },
    {
      pageName: 'Feedback',
      icon: feedbackIcon,
      link: '/feedback',
    },
  ],
};

//Correlations sidebar values
export const CorrelationsSideBar: ISideBarItems = {
  mainMenuItems: [
    {
      pageName: 'Dashboard',
      icon: dashBoardIcon,
      link: '/dashboard',
      isBeta: false,
      isExpandable: false,
    },
    {
      pageName: 'Correlations',
      icon: socialNetworkIcon,
      link: '/correlations',
      isBeta: true,
      isExpandable: false,
    },
  ],
  bottomMenuItems: [
    {
      pageName: 'Settings',
      icon: settingsIcon,
      link: '/settings',
    },
    {
      pageName: 'Feedback',
      icon: feedbackIcon,
      link: '/feedback',
    },
  ],
};

//Enterprise sidebar values
export const EnterpriseSideBar: ISideBarItems = {
  mainMenuItems: [
    {
      pageName: 'Dashboard',
      icon: dashBoardIcon,
      link: '/dashboard',
      isBeta: false,
      isExpandable: false,
    },
    {
      pageName: 'Enterprise',
      icon: enterpriseIcon,
      link: '/enterprise',
      isBeta: true,
      isExpandable: false,
    },
  ],
  bottomMenuItems: [
    {
      pageName: 'Feedback',
      icon: feedbackIcon,
      link: '/feedback',
    },
  ],
};

//My dashBoard sideBar sidebar values
export const MyDashBoardSideBar: ISideBarItems = {
  mainMenuItems: [
    {
      pageName: 'Dashboard',
      icon: dashBoardIcon,
      link: '/mydashboard',
      isBeta: false,
      isExpandable: false,
    },
    {
      pageName: 'My Prodoscore',
      icon: myProdoscoreIcon,
      link: '/mydashboard/myprodoscore',
      isBeta: false,
      isExpandable: false,
    },
    {
      pageName: 'Enterprise',
      icon: enterpriseIcon,
      link: '/enterprise',
      isBeta: true,
      isExpandable: false,
    },
  ],
  bottomMenuItems: [
    {
      pageName: 'Settings',
      icon: settingsIcon,
      link: '/settings',
    },
    {
      pageName: 'Feedback',
      icon: feedbackIcon,
      link: '/feedback',
    },
  ],
};

//Social network sidebar values
export const SocialNetworkSideBar: ISideBarItems = {
  mainMenuItems: [],
  bottomMenuItems: [],
};

//Settings sidebar values
export const SettingsSideBar: ISideBarItems = {
  mainMenuItems: [],
  bottomMenuItems: [],
};

//Employee filter table variations
//Primary employee filter table values
export const PrimaryEmployeeFilterTable: EmployeeFilterTable[] = [
  {
    heading: 'Employee name',
    colItem: 'employeeName',
    width: 'w-[16%]',
    mediaQuery: '',
  },
  {
    heading: 'User role',
    colItem: 'userRole',
    width: 'w-[24%]',
    mediaQuery: 'hidden min-[620px]:table-cell',
  },
  {
    heading: 'Manager name',
    colItem: 'managerName',
    width: 'w-[12%]',
    mediaQuery: 'hidden min-[620px]:table-cell',
  },
  {
    heading: 'Prodoscore',
    colItem: 'score',
    width: 'w-[10%]',
    mediaQuery: '',
  },
  {
    heading: 'Performance',
    colItem: 'performance',
    width: 'w-[18%]',
    mediaQuery: '',
  },
];

//Employee filter table with correlations values
export const EmployeeFilterTableWithCorrelations: EmployeeFilterTable[] = [
  {
    heading: 'Employee name',
    colItem: 'employeeName',
    width: '',
    mediaQuery: '',
  },
  {
    heading: 'Manager name',
    colItem: 'managerName',
    width: '',
    mediaQuery: 'hidden min-[620px]:table-cell',
  },
  {
    heading: 'Prodoscore',
    colItem: 'score',
    width: '',
    mediaQuery: '',
  },
  {
    heading: 'Performance',
    colItem: 'performance',
    width: '',
    mediaQuery: '',
  },
];

//Workplace productivity filter table values
export const EmployeeFilterWorkPlaceProductivity: EmployeeFilterTable[] = [
  {
    heading: 'Employee name',
    colItem: 'employeeName',
    width: 'w-[20%]',
    mediaQuery: '',
  },
  {
    heading: 'User role',
    colItem: 'userRole',
    width: 'w-[24%]',
    mediaQuery: '',
  },
  {
    heading: 'Manager name',
    colItem: 'managerName',
    width: 'w-[24%]',
    mediaQuery: '',
  },
  {
    heading: 'Prodoscore',
    colItem: 'score',
    width: 'w-[10%]',
    mediaQuery: '',
  },
  {
    heading: 'In office',
    colItem: 'inOffice',
    width: 'w-[10%]',
    mediaQuery: '',
  },
  {
    heading: 'Remote',
    colItem: 'remote',
    width: 'w-[10%]',
    mediaQuery: '',
  },
];

//Enterprise filter table values
export const EmployeeFilterEnterprise: EmployeeFilterTable[] = [
  {
    heading: 'Employee name',
    colItem: 'employeeName',
    width: 'w-[20%]',
    mediaQuery: '',
  },
  {
    heading: 'Domain',
    colItem: 'domainName',
    width: 'w-[19%]',
    mediaQuery: '',
  },
  {
    heading: 'User role',
    colItem: 'userRole',
    width: 'w-[16%]',
    mediaQuery: '',
  },
  {
    heading: 'Manager name',
    colItem: 'managerName',
    width: 'w-[15%]',
    mediaQuery: '',
  },
  {
    heading: 'Prodoscore',
    colItem: 'score',
    width: 'w-[15%]',
    mediaQuery: '',
  },
  {
    heading: 'Performance',
    colItem: 'performance',
    width: 'w-[15%]',
    mediaQuery: '',
  },
];

//Correlations filter drop down variations
//Correlation item dropdown values
// export const Topics: CorrelationFilterItem[] = [
//   {
//     name: 'Locations',
//     checked: true,
//     icon: faDictionary['locations'],
//     iconColor: colorDictionary['locations'],
//     param: '',
//   },
//   {
//     name: 'Peoples',
//     checked: true,
//     icon: faDictionary['persons'],
//     iconColor: colorDictionary['persons'],
//     param: '',
//   },
//   {
//     name: 'Organizations',
//     checked: false,
//     icon: faDictionary['organizations'],
//     iconColor: colorDictionary['organizations'],
//     param: '',
//   },
//   {
//     name: 'Events',
//     checked: false,
//     icon: faDictionary['events'],
//     iconColor: colorDictionary['events'],
//     param: '',
//   },
//   {
//     name: 'Articles',
//     checked: false,
//     icon: faDictionary['articles'],
//     iconColor: colorDictionary['articles'],
//     param: '',
//   },
//   {
//     name: 'Products',
//     checked: false,
//     icon: faDictionary['products'],
//     iconColor: colorDictionary['products'],
//     param: '',
//   },
//   {
//     name: 'Other',
//     checked: false,
//     icon: faDictionary['others'],
//     iconColor: colorDictionary['others'],
//     param: '',
//   },
// ];

//Correlation item direction values
export const Directions: CorrelationFilterItem[] = [
  {
    name: 'Internal',
    checked: true,
    param: '',
  },
  {
    name: 'External',
    checked: true,
    param: '',
  },
];

//Correlation item number of records values
export const NoOfRecords: CorrelationFilterItem[] = [
  {
    name: 'Top 100',
    checked: true,
    param: '',
  },
  {
    name: 'Top 200',
    checked: false,
    param: '',
  },
  {
    name: 'Top 300',
    checked: false,
    param: '',
  },
];

//Correlation entity variations
export const CorrelationEmployees: CorrelationEntityItem[] = [
  {
    heading: '',
    colItem: '',
    className: 'w-[5%] text-left py-2 px-4',
  },
  {
    heading: 'Employees',
    colItem: 'fullname',
    colSpan: 2,
    className: 'text-left py-2 px-4',
  },
  {
    heading: 'Effort',
    colItem: 'perc',
    className: 'text-right py-3 px-4',
  },
  {
    heading: 'Count',
    colItem: 'count',
    className: 'text-right py-3 px-4',
  },
];

export const CorrelationProducts: CorrelationEntityItem[] = [
  {
    heading: '',
    colItem: 'name',
    className: 'w-[5%] bg-red text-left py-2 px-4',
  },
  {
    heading: 'Product',
    colItem: 'name',
    colSpan: 2,
    className: 'text-left py-2 px-4',
  },
  {
    heading: 'Usage',
    colItem: 'perc',
    className: 'text-right py-3 px-4',
  },
  {
    heading: 'Count',
    colItem: 'count',
    className: 'text-right py-3 px-4',
  },
];

export const TrendsTableHeadingForEmployees: TrendsTableStructure[] = [
  {
    heading: 'Name',
    className: 'w-[calc(30%_-_190px)] text-left',
    filterAvailable: true,
    filterValue: true,
  },
  {
    heading: 'Email',
    className: 'w-[calc(30%_-_190px)] text-left',
    filterAvailable: true,
    filterValue: true,
  },
  {
    heading: 'Role',
    className: 'w-[160px] text-left',
    filterAvailable: true,
    filterValue: true,
  },
  {
    heading: 'Manager',
    className: 'w-[115px] text-left',
    filterValue: true,
  },
  {
    heading: 'Date',
    className: 'w-[120px] text-left',
    filterValue: true,
  },
  {
    heading: 'Gap Time',
    className: 'w-[140px] text-left',
    filterValue: true,
  },
  {
    heading: 'Prodoscore',
    className: 'w-[120px] text-right',
    filterValue: true,
  },
  {
    heading: 'User Locations',
    className: 'text-left',
    filterValue: true,
  },
];

export const TrendsTableHeadingForRawData: TrendsTableStructure[] = [
  {
    heading: 'Name',
    className: 'w-[calc(30%_-_190px)] text-left',
    filterValue: true,
    filterAvailable: true,
  },
  {
    heading: 'Email',
    className: 'w-[calc(30%_-_190px)] text-left',
    filterValue: true,
    filterAvailable: true,
  },
  {
    heading: 'Role',
    className: 'w-[160px] text-left',
    filterValue: true,
    filterAvailable: true,
  },
  {
    heading: 'Date',
    className: 'w-[120px] text-left',
    filterValue: true,
  },
  {
    heading: 'Product',
    className: 'w-[120px] text-left',
    filterValue: true,
  },
  {
    heading: 'Count',
    className: 'w-[160px] text-right',
    filterValue: true,
  },
];

export const TrendsTableHeadingForLoginActivity: TrendsTableStructure[] = [
  {
    heading: 'Name',
    className: 'w-[25%] text-left',
    colItem: 'email',
    filterValue: true,
  },
  {
    heading: 'Email',
    className: 'w-[25%] text-left',
    colItem: 'fullname',
    filterValue: true,
  },
  {
    heading: 'Role',
    className: 'w-[25%] text-left',
    colItem: 'role',
    filterValue: true,
  },
  {
    heading: 'Date',
    className: 'w-auto text-left',
    colItem: 'logged_time',
    filterValue: true,
  },
];

export const TrendsTableHeadingForAdminActivity: TrendsTableStructure[] = [
  {
    heading: 'Name',
    className: 'w-[15%] text-left',
    colItem: 'fullname',
    filterValue: true,
  },
  {
    heading: 'Email',
    className: 'w-[20%] text-left',
    colItem: 'email',
    filterValue: true,
  },
  {
    heading: 'Page',
    className: 'w-[20%] text-left',
    colItem: 'page',
    filterValue: true,
  },
  {
    heading: 'Activity',
    className: 'w-[20%] text-left',
    colItem: 'task',
    filterValue: true,
  },
  {
    heading: 'Date & Time',
    className: 'w-auto text-left',
    colItem: 'activity_time',
    filterValue: true,
  },
];

import { StaticImageData } from 'next/image';

import {
  faArrowDown,
  faArrowUp,
  faFrown,
  faMeh,
  faSmile,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

import {
  ICorrelationData,
  IFormattedCorrelationData,
  ISentiment,
  ITableSummaryData,
} from '@/interfaces/correlations';
import { IEmployeeList, IRoles } from '@/interfaces/employees';
import { ISideBarItems } from '@/interfaces/ui';
import arrowDown from '@/public/img/other/change-decrease.png';
import arrowUp from '@/public/img/other/change-increase.png';
import arrowMiddle from '@/public/img/other/change-steady.png';

import {
  colorDictionary,
  CorrelationsSideBar,
  EnterpriseSideBar,
  faDictionary,
  MainSideBar,
  MyDashBoardSideBar,
  SettingsSideBar,
  SocialNetworkSideBar,
} from './constants';
import { RangeColorVariations, TransformedEmployees } from './types';

type iconData = {
  icon: IconDefinition;
  backgroundColor: string;
};

export const getIcon = (icon: string): iconData => {
  return { icon: faDictionary[icon], backgroundColor: colorDictionary[icon] };
};

//	Convert the name to a hex color code based on how it sounds like
//	To get a unique color code per person
export const getColorByUserName = (username?: string) => {
  username = username ? username.replace(/,/g, '').replace(/ +/g, ' ') : 'Name';
  let usernameArray: any[] = username.split(/[\s,_]/);
  let un = 'NU';
  try {
    un = usernameArray[0][0];
    un = (
      un +
      (usernameArray.length == 1 ? usernameArray[0][1] : usernameArray[1][0])
    ).toUpperCase();
  } catch (e) {}
  if (usernameArray.length == 1) usernameArray[0] = soundex(usernameArray[0]);
  else usernameArray[0] = soundex(usernameArray[0][0] + usernameArray[1]);

  const hue =
    (usernameArray[0].charCodeAt(0) * 1.5 +
      parseInt(usernameArray[0].substring(1))) %
    360;
  usernameArray[0] = hslToRgb(hue / 360, 0.72, 0.58);

  usernameArray[2] = [
    usernameArray[0][0],
    usernameArray[0][1],
    usernameArray[0][2],
  ];
  usernameArray[0] = [
    usernameArray[0][0].toString(16),
    usernameArray[0][1].toString(16),
    usernameArray[0][2].toString(16),
  ];
  usernameArray[0] =
    ('00' + usernameArray[0][0]).substring(usernameArray[0][0].length) +
    ('00' + usernameArray[0][1]).substring(usernameArray[0][1].length) +
    ('00' + usernameArray[0][2]).substring(usernameArray[0][2].length);
  return [un, `#${usernameArray[0]}`, usernameArray[2], hue];
};

//	Generates a code based on how a word sounds like.
const soundex = (s: string) => {
  let a = s.toLowerCase().split(''),
    f = a.shift(),
    r = '',
    codes = {
      a: '',
      e: '',
      i: '',
      o: '',
      u: '',
      b: 1,
      f: 1,
      p: 1,
      v: 1,
      c: 2,
      g: 2,
      j: 2,
      k: 2,
      q: 2,
      s: 2,
      x: 2,
      z: 2,
      d: 3,
      t: 3,
      l: 4,
      m: 5,
      n: 5,
      r: 6,
    };

  r =
    f +
    a
      .map(function (v, i, a) {
        return codes[v as keyof typeof codes];
      })
      .filter(function (v, i, a) {
        return i === 0 ? v !== codes[f as keyof typeof codes] : v !== a[i - 1];
      })
      .join('');

  return (r + '000').slice(0, 4).toUpperCase();
};

const hslToRgb = (h: number, s: number, l: number): number[] => {
  let r, g, b;

  if (s == 0) {
    r = g = b = l;
  } else {
    let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    let p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.trunc(r * 255), Math.trunc(g * 255), Math.trunc(b * 255)];
};

const hue2rgb = (p: number, q: number, t: number): number => {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
};

//get range color according to the prodoscore
export const getRangeColorByScore = (score: number): RangeColorVariations => {
  if (score >= 75) {
    return {
      textColor: 'text-primary-blue',
      bgColor: 'bg-primary-blue',
      strokeColor: 'stroke-primary-blue',
      fillColor: 'fill-primary-blue',
    };
  } else if (score >= 40 && score <= 74) {
    return {
      textColor: 'text-primary-gray',
      bgColor: 'bg-primary-gray',
      strokeColor: 'stroke-primary-gray',
      fillColor: 'fill-primary-gray',
    };
  }
  return {
    textColor: 'text-primary-red',
    bgColor: 'bg-primary-red',
    strokeColor: 'stroke-primary-red',
    fillColor: 'fill-primary-red',
  };
};

//get range name according to the prodoscore
export const getRangeName = (score: number): string => {
  if (score >= 75) {
    return 'Above';
  } else if (score >= 40 && score <= 74) {
    return 'Average';
  }
  return 'Below';
};

//get sidebar content by route
export const getSideBarStructure = (route: string): ISideBarItems => {
  if (route === 'correlations') {
    return CorrelationsSideBar;
  } else if (route === 'socialnetwork') {
    return SocialNetworkSideBar;
  } else if (route === 'settings') {
    return SettingsSideBar;
  } else if (route === 'enterprise') {
    return EnterpriseSideBar;
  } else if (route === 'mydashboard') {
    return MyDashBoardSideBar;
  }
  return MainSideBar;
};

//format correlations data for tables
export const formatCorrelationData = (
  correlationData: ICorrelationData
): IFormattedCorrelationData => {
  let topic: ITableSummaryData[] = [];
  let coo: ITableSummaryData[] = [];
  Object.keys(correlationData).forEach((etype) => {
    Object.keys(correlationData[etype as keyof ICorrelationData]).forEach(
      (eid) => {
        let entity = correlationData[etype as keyof ICorrelationData][eid];
        if (entity.phone) {
          if (!entity.name && !entity.email && !entity.title) return;
          try {
            let phone: RegExpMatchArray | string | null = entity.phone.replace(
              /\D/g,
              ''
            );
            phone = phone.match(/^(\d)?(\d{3})(\d{3})(\d{4})$/);
            entity.phone = [
              phone![1] ? '+' + phone![1] + ' ' : '',
              '(',
              phone![2],
              ') ',
              phone![3],
              '-',
              phone![4],
            ].join('');
          } catch (e) {
            console.error(entity.phone);
          }
        }
        if (etype !== 'coos') {
          topic.push({
            id: eid,
            icon: etype,
            stat: entity.significance,
            description:
              entity.title || entity.name || entity.email || entity.phone,
          });
        } else {
          coo.push({
            id: eid,
            icon: etype,
            stat: entity.significance,
            description:
              entity.title || entity.name || entity.email || entity.phone,
          });
        }
      }
    );
  });
  return { topic, coo };
};

//Convert minutes to hours

export const mtsToHrs = (time: number) => {
  let mts = time % 60,
    hrs = Math.floor(time / 60);
  //
  if (mts < 0) {
    if (hrs >= 0) hrs -= 1;
    mts += 60;
  }
  //
  if (hrs > 24) {
    // Next Day
    hrs -= 24;
  }
  //
  if (hrs < 0) {
    // Prev Day
    hrs += 24;
  }
  //
  return (hrs < 10 ? '0' : '') + hrs + ':' + (mts < 10 ? '0' : '') + mts;
};

export const sentimentWidget = (sentiment: ISentiment) => {
  if (
    typeof sentiment == 'undefined' ||
    (sentiment.score == null && sentiment.magnitude == null) ||
    (sentiment.score == 0 && sentiment.magnitude == 0)
  )
    return {};
  else
    return {
      icon:
        sentiment.score < -0.1
          ? faFrown
          : sentiment.score > 0.1
          ? faSmile
          : faMeh,
      backGroundColor: `hsl(${50 + 50 * sentiment.score},${
        sentiment.score == 0 ? '0%, 80%' : '100%, 50%'
      })`,
      color: `rgba(0,0,0,${0.15 + sentiment.magnitude / 3})`,
    };
};

export const timeToMts = (time: string) => {
  let timeArray: any = time.split(':');
  //
  if (
    timeArray[1].indexOf(' ') > -1 &&
    (timeArray[1].indexOf('AM') > -1 || timeArray[1].indexOf('PM') > -1)
  ) {
    timeArray[1] = timeArray[1].split(' ');
    if (timeArray[1][1] == 'PM') timeArray[0] = timeArray[0] * 1 + 12;
    timeArray[1] = timeArray[1][0];
  }
  //
  return (
    timeArray[0] * 60 +
    (timeArray.length > 1 ? timeArray[1] * 1 : 0) +
    (timeArray.length > 2 ? timeArray[2] / 60 : 0)
  );
};

export const timeToDecimalTime = (time: string) => {
  const t = time.split(':');
  const h = parseInt(t[0]);
  const m = parseInt(t[1]);
  const z = m / 60;
  return h + z;
};

//transforn employee data for employee filter
export const transformEmployeesForFiltering = (
  employeeList: IEmployeeList,
  roleData: IRoles
): TransformedEmployees[] => {
  return Object.values(employeeList).map((employee) => {
    return {
      employeeId: employee.id ? employee.id : 0,
      employeeName: employee.fullname ? employee.fullname : '-',
      userRole: employee.role
        ? getRole(roleData, employee.role.toString())
        : '-',
      managerName: employee.manager_details?.fullname
        ? employee.manager_details?.fullname
        : '-',
      score: employee.scr?.l ? Math.trunc(employee.scr?.l) : '-',
      performance: employee.scr?.delta ? employee.scr?.delta : '-',
      inOffice:
        typeof employee.scr?.in === 'boolean'
          ? 'N/A'
          : employee.scr?.in
          ? Math.trunc(employee.scr?.in)
          : '-',
      remote:
        typeof employee.scr?.out === 'boolean'
          ? 'N/A'
          : employee.scr?.out
          ? Math.trunc(employee.scr?.out)
          : '-',
      domainName: employee.domain_name ? employee.domain_name : '-',
    };
  });
};

export const getRole = (roleData: IRoles, role: string): string => {
  return roleData[role];
};

export const getArrowIconFor = (delta: number) => {
  if (delta > 0) {
    return faArrowUp;
  }
  return faArrowDown;
};

//get arrow icon for delta
export const getArrowIcon = (deltaDescs: string): StaticImageData => {
  if (deltaDescs === 'increase') {
    return arrowUp;
  } else if (deltaDescs === 'decrease') {
    return arrowDown;
  } else {
    return arrowMiddle;
  }
};

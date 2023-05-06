import { ITableSummaryData } from '@/interfaces/correlations';
import { IManagerScore } from '@/interfaces/managers';

export const averageManagers: IManagerScore[] = [
  {
    id: 0,
    manager: 50,
    name: 'Ruksha De Silva',
    subordinates: 5,
  },
  {
    id: 1,
    manager: 55,
    name: 'Dason Test',
    subordinates: 15,
  },
  {
    id: 2,
    manager: 45,
    name: 'Dilan Chandrajith',
    subordinates: 7,
  },
  {
    id: 3,
    manager: 42,
    name: 'Danesha Ramanayake',
    subordinates: 16,
  },
  {
    id: 4,
    manager: 48,
    name: 'Rochana',
    subordinates: 18,
  },
];

export const belowAverageManagers: IManagerScore[] = [
  {
    id: 0,
    manager: 25,
    name: 'Peter Griffin',
    subordinates: 7,
  },
  {
    id: 1,
    manager: 22,
    name: 'Lois Griffin',
    subordinates: 16,
  },
  {
    id: 2,
    manager: 30,
    name: 'Stewie Griffin',
    subordinates: 18,
  },
];

export const aboveAverageManagers: IManagerScore[] = [
  {
    id: 0,
    manager: 60,
    name: 'Asitha',
    subordinates: 7,
  },
  {
    id: 1,
    manager: 70,
    name: 'Poorna',
    subordinates: 16,
  },
  {
    id: 2,
    manager: 65,
    name: 'Vindula',
    subordinates: 18,
  },
];

export const TopicsData: ITableSummaryData[] = [
  {
    id: '0',
    icon: 'events',
    description: 'Meeting',
    stat: 7,
  },
  {
    id: '1',
    icon: 'persons',
    description: 'Dasun Ariyarathne',
    stat: 50,
  },
  {
    id: '2',
    icon: 'locations',
    description: 'US',
    stat: 100,
  },
  {
    id: '3',
    icon: 'organizations',
    description: 'Ring Central',
    stat: 1000,
  },
  {
    id: '4',
    icon: 'events',
    description: 'Ring Central Meetings',
    stat: 20000,
  },
];

export const CooData: ITableSummaryData[] = [
  {
    id: '0',
    icon: 'coos',
    description: 'dasun@prodoscore.com',
    stat: 7,
  },
];

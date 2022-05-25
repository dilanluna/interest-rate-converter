import { DefaultTheme, Theme } from '@react-navigation/native';

export const AppTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F7F7F7',
  },
};

export const frequencies = {
  yearly: 360,
  semiannual: 180,
  quarterly: 120,
  // quarterly: 90,
  bimonthly: 60,
  monthly: 30,
  daily: 1,
} as const;

type frequencyType = typeof frequencies;

export type Frequency = keyof frequencyType;

export const periods: Array<{ label: string; value: Frequency }> = [
  { label: 'Anual', value: 'yearly' },
  { label: 'Semestral', value: 'semiannual' },
  { label: 'Cuatrimestral', value: 'quarterly' },
  { label: 'Trimestral', value: 'quarterly' },
  { label: 'Bimestral', value: 'bimonthly' },
  { label: 'Mensual', value: 'monthly' },
];

export const operations = {
  NOMINAL_RATE_TO_EFFECTIVE_RATE: 1,
  EFFECTIVE_RATE_TO_NOMINAL_RATE: 2,
  EFFECTIVE_RATE_TO_EFFECTIVE_RATE_DISTINCT_PERIODS: 3,
  EFFECTIVE_RATE_TO_EFFECTIVE_DAILY_RATE: 4,
} as const;

type operationType = typeof operations;

export type OperationValue = operationType[keyof operationType];

export const rates = [
  {
    id: operations.NOMINAL_RATE_TO_EFFECTIVE_RATE,
    title: 'De tasa nominal a tasa efectiva',
    description:
      'Pasa de una tasa que considera solo el capital invertido a una que considera capital más intereses que se van generando.',
  },
  {
    id: operations.EFFECTIVE_RATE_TO_NOMINAL_RATE,
    title: 'De tasa efectiva a tasa nominal',
    description:
      'Pasa de una tasa que considera capital más intereses que se van generando a una tasa que considera solo el capital invertido.',
  },
  // {
  //   id: operations.EFFECTIVE_RATE_TO_EFFECTIVE_RATE_DISTINCT_PERIODS,
  //   title: 'De tasa efectiva a efectiva (distintas periodicidades)',
  //   description:
  //     'Cambia, según tu elección, el periodo de capitalización o liquidación de los intereses.',
  // },
  // {
  //   id: operations.EFFECTIVE_RATE_TO_EFFECTIVE_DAILY_RATE,
  //   title:
  //     'De una tasa efectiva en cualquier periodicidad a una tasa efectiva diaria',
  //   description:
  //     'Cambia a diario el periodo de capitalización o liquidación de los intereses.',
  // },
];

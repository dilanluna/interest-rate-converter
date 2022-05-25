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

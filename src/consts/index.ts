export const periods = [
  { label: 'Anual', value: 'yearly' },
  { label: 'Semestral', value: 'semiannual' },
  { label: 'Cuatrimestral', value: 'quarterly' },
  { label: 'Trimestral', value: 'quarterly' },
  { label: 'Bimestral', value: 'bimonthly' },
  { label: 'Mensual', value: 'monthly' },
];

export const frequencies: { [key: string]: number } = {
  yearly: 360,
  semiannual: 180,
  quarterly: 120,
  // quarterly: 90,
  bimonthly: 60,
  monthly: 30,
  daily: 1,
};

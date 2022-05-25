import { frequencies, Frequency } from '@consts';

export function convertNominalToEffectiveInterestRate(
  nominalIntersetRate: number,
  periodicity: Frequency,
  compounded: Frequency,
): number {
  const frequency = frequencies[periodicity] / frequencies[compounded];
  return (1 + nominalIntersetRate / frequency) ** frequency - 1;
}

export function convertEffectiveToNominalInterestRate(
  effectiveInterestRate: number,
  periodicity: Frequency,
  compounded: Frequency,
): number {
  const frequency = frequencies[compounded] / frequencies[periodicity];
  return frequency * ((effectiveInterestRate + 1) ** (1 / frequency) - 1);
}

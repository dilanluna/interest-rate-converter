import { Rate } from 'types/navigation';
import { createContext, ReactNode, useContext, useMemo } from 'react';

type InterestRateContextType = {
  rates: Rate[];
};
const InterestRateContext = createContext<InterestRateContextType | undefined>(
  undefined,
);

const rates: Rate[] = [
  {
    id: 'nominal-rate-to-effective-rate',
    title: 'De tasa nominal a tasa efectiva',
    description:
      'Pasa de una tasa que considera solo el capital invertido a una que considera capital más intereses que se van generando.',
  },
  {
    id: 'effective-rate-to-nominal-rate',
    title: 'De tasa efectiva a tasa nominal',
    description:
      'Pasa de una tasa que considera capital más intereses que se van generando a una tasa que considera solo el capital invertido.',
  },
  // {
  //   id: 'effective-rate-to-effective-rate-distinct-periods',
  //   title: 'De tasa efectiva a efectiva (distintas periodicidades)',
  //   description:
  //     'Cambia, según tu elección, el periodo de capitalización o liquidación de los intereses.',
  // },
  // {
  //   id: 'effective-rate-to-effective-daily-rate',
  //   title:
  //     'De una tasa efectiva en cualquier periodicidad a una tasa efectiva diaria',
  //   description:
  //     'Cambia a diario el periodo de capitalización o liquidación de los intereses.',
  // },
];

export default function InterestRatePrivider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <InterestRateContext.Provider value={{ rates }}>
      {children}
    </InterestRateContext.Provider>
  );
}

export function useInterestRate() {
  const context = useContext(InterestRateContext);

  if (context === undefined) {
    throw new Error(
      'useInterestRate must be used whithin a InterestRateProvider',
    );
  }

  return context;
}

export const useRates = () => {
  const { rates } = useInterestRate();
  return rates;
};

export const useRateById = (rateId: string) => {
  const { rates } = useInterestRate();
  const rate = useMemo(
    () => rates.find(({ id }) => id === rateId),
    [rates, rateId],
  );
  return rate;
};

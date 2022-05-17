import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type StackParamList = {
  Rates: undefined;
  Calculate: { rateId: string };
};

export type RatesProps = NativeStackScreenProps<StackParamList, 'Rates'>;

export type CalculateProps = NativeStackScreenProps<
  StackParamList,
  'Calculate'
>;

export type Rate = {
  id: string;
  title: string;
  description: string;
};

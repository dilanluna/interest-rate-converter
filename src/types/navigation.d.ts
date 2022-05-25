import { OperationValue } from '@consts';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type StackParamList = {
  Rates: undefined;
  Calculate: { rateId: OperationValue };
};

export type RatesProps = NativeStackScreenProps<StackParamList, 'Rates'>;

export type CalculateProps = NativeStackScreenProps<
  StackParamList,
  'Calculate'
>;

export type Rate = {
  id: OperationValue;
  title: string;
  description: string;
};

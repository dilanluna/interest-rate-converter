import Label from '@components/label';
import TextInput from '@components/input';
import { CalculateProps } from 'types/navigation';
import ResultCard from '@features/rates/result-card';
import { useEffect, useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import PeriodicitySelect from '@features/rates/periodicity-select';
import { Frequency, operations, OperationValue, rates } from '@consts';
import RateCalcHeaderTitle from '@features/rates/rate-calc-header-title';
import {
  convertEffectiveToNominalInterestRate,
  convertNominalToEffectiveInterestRate,
} from '@utils/calcs';

const useRateById = (rateId: OperationValue) => {
  return useMemo(() => rates.find(({ id }) => id === rateId), [rateId]);
};

export default function Calculate({ route }: CalculateProps) {
  const [result, setResult] = useState<number>();
  const operation = useRateById(route.params.rateId);
  const [rateText, setRateText] = useState<string>();
  const [compounded, setCompounded] = useState<Frequency>();
  const [periodicity, setPeriodicity] = useState<Frequency>();

  useEffect(() => {
    const rateIsAValidNumber = !isNaN(Number(rateText));
    if (rateIsAValidNumber && periodicity && compounded) {
      const rate = Number(rateText);

      if (operation?.id === operations.NOMINAL_RATE_TO_EFFECTIVE_RATE) {
        setResult(
          convertNominalToEffectiveInterestRate(
            rate / 100,
            periodicity,
            compounded,
          ),
        );
      }

      if (operation?.id === operations.EFFECTIVE_RATE_TO_NOMINAL_RATE) {
        setResult(
          convertEffectiveToNominalInterestRate(
            rate / 100,
            periodicity,
            compounded,
          ),
        );
      }
    }
  }, [rateText, periodicity, compounded, operation]);

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        <RateCalcHeaderTitle text={operation?.title} />

        <View style={{ marginBottom: 20 }}>
          <Text style={styles.title}>Ingresa la tasa de interés</Text>
          <Label>Debes ingresar un valor sin el %</Label>
          <TextInput
            value={rateText}
            placeholder="$0"
            keyboardType="numeric"
            onChangeText={(text) => setRateText(text)}
          />
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text style={styles.title}>
            {operation?.id === operations.NOMINAL_RATE_TO_EFFECTIVE_RATE
              ? 'Periodicidad deseada'
              : operation?.id === operations.EFFECTIVE_RATE_TO_NOMINAL_RATE
              ? 'Capitalización deseada'
              : null}
          </Text>
          <Label>
            {operation?.id === operations.NOMINAL_RATE_TO_EFFECTIVE_RATE
              ? 'Periodicidad'
              : operation?.id === operations.EFFECTIVE_RATE_TO_NOMINAL_RATE
              ? 'Valor'
              : null}
          </Label>
          <PeriodicitySelect
            value={periodicity}
            onChange={(value) => setPeriodicity(value)}
          />
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text style={styles.title}>
            {operation?.id === operations.NOMINAL_RATE_TO_EFFECTIVE_RATE
              ? 'Ingresa la capitalización'
              : operation?.id === operations.EFFECTIVE_RATE_TO_NOMINAL_RATE
              ? 'Ingresa la periodicidad'
              : null}
          </Text>
          <Label>Periodicidad</Label>
          <PeriodicitySelect
            value={compounded}
            onChange={(value) => setCompounded(value)}
          />
        </View>

        <ResultCard value={result} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#454648',
    // fontFamily: 'Nunito',
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 30,
    letterSpacing: -0.45,
  },
});

import { Frequency } from '@consts';
import Label from '@components/label';
import TextInput from '@components/input';
import { useEffect, useState } from 'react';
import { CalculateProps } from 'types/navigation';
import ResultCard from '@features/rates/result-card';
import { useRateById } from '@features/rates/rates-context';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import PeriodicitySelect from '@features/rates/periodicity-select';
import RateCalcHeaderTitle from '@features/rates/rate-calc-header-title';
import {
  convertEffectiveToNominalInterestRate,
  convertNominalToEffectiveInterestRate,
} from '@utils/calcs';

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

      if (operation?.id === 'nominal-rate-to-effective-rate') {
        setResult(
          convertNominalToEffectiveInterestRate(
            rate / 100,
            periodicity,
            compounded,
          ),
        );
      }

      if (operation?.id === 'effective-rate-to-nominal-rate') {
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
            {operation?.id === 'nominal-rate-to-effective-rate'
              ? 'Periodicidad deseada'
              : operation?.id === 'effective-rate-to-nominal-rate'
              ? 'Capitalización deseada'
              : null}
          </Text>
          <Label>
            {operation?.id === 'nominal-rate-to-effective-rate'
              ? 'Periodicidad'
              : operation?.id === 'effective-rate-to-nominal-rate'
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
            {operation?.id === 'nominal-rate-to-effective-rate'
              ? 'Ingresa la capitalización'
              : operation?.id === 'effective-rate-to-nominal-rate'
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

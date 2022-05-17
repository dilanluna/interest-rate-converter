import { useEffect, useState } from 'react';
import Label from '@components/label';
import TextInput from '@components/input';
import { CalculateProps } from 'types/navigation';
import ResultCard from '@features/rates/result-card';
import { useRateById } from '@features/rates/rates-context';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import PeriodicitySelect from '@features/rates/periodicity-select';
import RateCalcHeaderTitle from '@features/rates/rate-calc-header-title';

const frequencies: { [key: string]: number } = {
  yearly: 360,
  semiannual: 180,
  quarterly: 120,
  // quarterly: 90,
  bimonthly: 60,
  monthly: 30,
  daily: 1,
};

function convertNominalToEffectiveInterestRate(
  nominalIntersetRate: number,
  periodicity: string,
  compounded: string,
): number {
  const frequency = frequencies[periodicity] / frequencies[compounded];
  return (1 + nominalIntersetRate / frequency) ** frequency - 1;
}

export default function Calculate({ route }: CalculateProps) {
  const [result, setResult] = useState<number>();
  const operation = useRateById(route.params.rateId);
  const [rateText, setRateText] = useState<string>();
  const [compounded, setCompounded] = useState<string>();
  const [periodicity, setPeriodicity] = useState<string>();

  useEffect(() => {
    const rateIsAValidNumber = !isNaN(Number(rateText));
    if (rateIsAValidNumber && periodicity && compounded) {
      const rate = Number(rateText);
      setResult(
        convertNominalToEffectiveInterestRate(
          rate / 100,
          periodicity,
          compounded,
        ),
      );
    }
  }, [rateText, periodicity, compounded]);

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
          <Text style={styles.title}>Periodicidad Deseada</Text>
          <Label>Periodicidad</Label>
          <PeriodicitySelect
            value={periodicity}
            onChange={(value) => setPeriodicity(value)}
          />
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text style={styles.title}>Ingresa la capitalización</Text>
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

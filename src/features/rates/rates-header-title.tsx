import { StyleSheet, Text } from 'react-native';

export default function RatesHeaderTitle() {
  return <Text style={styles.title}>Conversor de tasas{'\n'}de interés</Text>;
}

const styles = StyleSheet.create({
  title: {
    // fontFamily: 'Nunito',
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 40,
    letterSpacing: -0.6,
    color: '#808285',
    marginBottom: 26.8,
  },
});

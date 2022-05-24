import Label from '@components/label';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

export default function ResultCard({
  style,
  value,
}: {
  value?: number;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View style={[style, styles.container]}>
      <View style={styles.result}>
        <Text style={styles.text}>
          {value ? (value * 100).toFixed(2) : null}%
        </Text>
      </View>
      <Label style={{ paddingVertical: 29 }}>
        es el resultado de acuerdo con los parámetros que ingresaste.
      </Label>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6E7E8',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
  },
  result: {
    alignItems: 'center',
    marginVertical: 14,
    paddingVertical: 22,
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    width: '100%',
  },
  text: {
    color: '#00448D',
    // fontFamily: 'Nunito',
    fontSize: 40,
    fontWeight: '700',
  },
});

import { StyleSheet, Text, View } from 'react-native';

export default function RateCalcHeaderTitle({ text }: { text?: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    // fontFamily: 'Nunito',
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 40,
    textAlign: 'center',
    letterSpacing: -0.6,
    color: '#292929',
    marginBottom: 50,
  },
});

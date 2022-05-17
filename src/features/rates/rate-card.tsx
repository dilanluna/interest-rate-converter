import Button from '@components/button';
import { RatesProps } from 'types/navigation';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

export default function RateCard({
  id,
  title,
  style,
  description,
}: {
  id: string;
  title: string;
  description: string;
  style?: StyleProp<ViewStyle>;
}) {
  const navigation = useNavigation<RatesProps['navigation']>();

  const handlePressCalcButton = () => {
    navigation.push('Calculate', { rateId: id });
  };

  return (
    <View style={[style, styles.container]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        title="Calcular"
        onPress={handlePressCalcButton}
        icon={
          <MaterialIcons
            size={32}
            color="black"
            name="keyboard-arrow-right"
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: -0.3,
    color: '#292929',
    marginBottom: 25,
  },
  description: {
    // fontFamily: 'Open Sans',
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: -0.3,
    color: '#292929',
    marginBottom: 25,
  },
});

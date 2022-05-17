import { ReactNode } from 'react';
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';

export default function Button({
  icon,
  title,
  onPress,
}: {
  title?: string;
  icon?: ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={styles.container}
      accessibilityRole="button">
      <Text style={styles.text}>{title}</Text>
      {icon}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFCF01',
    borderRadius: 10000,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 9,
  },
  text: {
    color: '#292929',
    // fontFamily: 'Nunito',
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: -0.3,
  },
});

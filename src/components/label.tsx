import { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

export default function Label({
  children,
  style,
}: {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return <Text style={[style, styles.label]}>{children}</Text>;
}

const styles = StyleSheet.create({
  label: {
    color: '#808285',
    // fontFamily: 'Open Sans',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: -0.3,
  },
});

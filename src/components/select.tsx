import { Picker } from '@react-native-picker/picker';
import { StyleProp, StyleSheet, TextStyle } from 'react-native';

export type Item = {
  label: string;
  value: number | string;
};

export default function Select({
  value,
  items,
  style,
  onChange,
  placeholder,
}: {
  items: Item[];
  placeholder?: string;
  value?: number | string;
  style?: StyleProp<TextStyle>;
  onChange?: (itemValue: number | string, itemIndex: number) => void;
}) {
  return (
    <Picker
      selectedValue={value}
      onValueChange={onChange}
      style={[style, styles.select]}>
      {placeholder && (
        <Picker.Item
          value="none"
          enabled={false}
          label={placeholder}
        />
      )}
      {items.map(({ label, value }) => (
        <Picker.Item
          key={value}
          label={label}
          value={value}
        />
      ))}
    </Picker>
  );
}

const styles = StyleSheet.create({
  select: {
    color: '#808285',
    // fontFamily: 'Open Sans',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: -0.3,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#808285',
  },
});

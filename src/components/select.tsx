import { Key } from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleProp, StyleSheet, TextStyle } from 'react-native';

type Item<V = number | string> = {
  label: string;
  value: V;
};

type SelectProps<T, V> = {
  items: T[];
  placeholder?: string;
  value?: V;
  style?: StyleProp<TextStyle>;
  keyExtractor: (item: T) => Key;
  onChange?: (itemValue: V, itemIndex: number) => void;
};

export default function Select<T extends Item, V>({
  value,
  items,
  style,
  onChange,
  placeholder,
  keyExtractor,
}: SelectProps<T, V>) {
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
      {items.map((item) => (
        <Picker.Item
          label={item.label}
          value={item.value}
          key={keyExtractor(item)}
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

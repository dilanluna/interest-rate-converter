import { forwardRef } from 'react';
import {
  StyleSheet,
  TextInput as NativeTextInput,
  TextInputProps,
} from 'react-native';

const TextInput = forwardRef<NativeTextInput, TextInputProps>(
  ({ style, ...props }, ref) => (
    <NativeTextInput
      ref={ref}
      {...props}
      style={[style, styles.input]}
    />
  ),
);

const styles = StyleSheet.create({
  input: {
    color: '#808285',
    backgroundColor: '#FFFFFF',
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

export default TextInput;

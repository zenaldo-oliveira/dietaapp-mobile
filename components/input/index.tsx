import { Control, Controller, FieldValues, Path } from "react-hook-form";

import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
} from "react-native";

import { colors } from "../../constants/colors";

interface InputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  placeholder?: string;
  rules?: object;
  error?: string;
  keyboardType?: KeyboardTypeOptions;
  defaultValue?: string;
}

export function Input<T extends FieldValues>({
  name,
  control,
  placeholder,
  rules,
  error,
  keyboardType,
  defaultValue = "",
}: InputProps<T>) {
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, error ? styles.inputError : null]}
            placeholder={placeholder}
            onBlur={onBlur}
            value={String(value || "")}
            onChangeText={onChange}
            keyboardType={keyboardType}
          />
        )}
      />

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  input: {
    height: 44,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  inputError: {
    borderWidth: 1,
    borderColor: "red",
  },
  errorText: {
    color: "red",
    marginTop: 4,
    fontSize: 12,
  },
});

import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
const CustomInput = ({
  placeholder,
  placeholderTextColor,
  securityTextEntry,
  value,
}) => {
  return (
    <View>
      <View style={styles.container}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={securityTextEntry}
          // value={value}
          style={styles.input}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F1F1',
    borderRadius: 20,
    width: 300,
    height: 40,
    marginBottom: 15,
  },
  input: {
    paddingLeft: 15,
    color: '#989898',
  },
});
export default CustomInput;

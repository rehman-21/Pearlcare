import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
const CustomButton = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: '#3D77BB',
          width: 140,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20,
        }}>
        <Text style={{color: '#fff', fontSize: 15, fontWeight: 500}}>
          LOG IN
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default CustomButton;

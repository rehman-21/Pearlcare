import React from 'react';
import {View, Text} from 'react-native';
const Present = () => {
  return (
    <View>
      <View>
        <Text style={{color: '#898989', fontSize: 13}}>
          You are marked
          <Text
            style={{
              fontWeight: 700,
              color: '#000',
            }}>
            Present
          </Text>
          by Faculty
        </Text>
      </View>
    </View>
  );
};
export default Present;

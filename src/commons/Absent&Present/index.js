import React from 'react';
import {View, Text} from 'react-native';
const Absent = () => {
  return (
    <View>
      <View>
        <Text style={{color: '#898989', fontSize: 13}}>
          You are marked
          <Text style={{fontWeight: 700, color: '#D93939'}}>Absent</Text>
          by Faculty
        </Text>
      </View>
    </View>
  );
};
export default Absent;

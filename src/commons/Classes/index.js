import React from 'react';
import {Image, Text, View} from 'react-native';
const ClassInfo = () => {
  return (
    <View
      style={{
        borderWidth: 1,
        height: 70,
        borderRadius: 10,
        justifyContent: 'center',
        paddingHorizontal: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <View
            style={{
              width: 55,
              height: 55,
              backgroundColor: '#7BA6DA',
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 30, fontWeight: 700, color: '#fff'}}>
              M
            </Text>
          </View>
        </View>
        <View>
          <Text>Mathematics I</Text>
          <Text>09:30 am</Text>
        </View>
      </View>
    </View>
  );
};
export default ClassInfo;

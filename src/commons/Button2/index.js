import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
const Btn = ({onPress, myPress}) => {
  return (
    <View>
      <View style={styles.Btn_container}>
        <TouchableOpacity onPress={onPress} style={styles.Btn_1}>
          <Text style={{color: '#FFFFFF', fontSize: 9}}>Mark me Present</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={myPress} style={styles.Btn_2}>
          <Text style={{color: '#FFFFFF', fontSize: 9}}>Mark me Absent</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Btn_container: {
    flexDirection: 'row',
    justifyContent: 'center   ',
    marginTop: 5,
  },
  Btn_1: {
    backgroundColor: '#253A53',
    width: 110,
    height: 25,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Btn_2: {
    backgroundColor: '#D93939',
    marginLeft: 10,
    width: 110,
    height: 25,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Btn;

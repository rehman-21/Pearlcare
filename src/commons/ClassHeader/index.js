import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import {styles} from '../HeaderBar/style';
const Classhead = ({title, additionalStyle}) => {
  return (
    <View style={{marginVertical: 15}}>
      <Text style={[styles.container, styles.additionalStyle]}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    color: '#000',
    fontSize: 23,
    fontWeight: 700,
  },
});
export default Classhead;
//  {color: '#000', fontSize: 32, fontWeight: 700},

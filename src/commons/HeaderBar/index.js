import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
const HeaderBar = ({navigation, onPress}) => {
  return (
    <View style={styles().container}>
      <TouchableOpacity onPress={onPress} style={{marginRight: 50}}>
        <Image source={require('../../assets/images/Home-icon.png')} />
      </TouchableOpacity>
      <View>
        <Image source={require('../../assets/images/Name-logo.png')} />
      </View>
    </View>
  );
};

export default HeaderBar;

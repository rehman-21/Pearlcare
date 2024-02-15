import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import Headers from '../../commons/header';
import CustomInput from '../../commons/CustomInput';
import CustomButton from '../../commons/CustomButton';
const Landing = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{marginTop: 80}}>
        <Headers />
      </View>
      <View style={{marginTop: 40}}>
        <Image source={require('../../assets/images/logo.png')} />
      </View>
      <View style={{marginVertical: 30}}>
        <Text style={{color: '#000', fontWeight: 700}}>
          LOGIN TO YOUR ACCOUNT
        </Text>
      </View>
      <View>
        <CustomInput
          placeholder={'Your Institute Email ID'}
          placeholderTextColor={'#6C6C6C'}
          style={{color: '#6C6C6C'}}
          // style={styles.inpt}
        />
        <CustomInput
          placeholder={'Password'}
          placeholderTextColor={'#6C6C6C'}
          style={{color: '#6C6C6C'}}
          securityTextEntry={true}
          // value={password}
        />
      </View>
      <View
        style={{
          alignItems: 'flex-end',
          width: 280,
          marginBottom: 30,
        }}>
        <TouchableOpacity>
          <Text
            style={{
              color: '#6C6C6C',
              fontWeight: 700,

              // textTransform: 'capitalize,
            }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <CustomButton onPress={() => navigation.navigate('Attendance')} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
});
export default Landing;

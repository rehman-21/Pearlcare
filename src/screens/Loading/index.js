import React, {useEffect} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
const Loading = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Landing');
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={styles.Container}>
      <View>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{marginBottom: 20}}
            source={require('../../assets/images/Attendity.png')}
          />
          <Image
            style={{marginBottom: 50}}
            source={require('../../assets/images/Loading....png')}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: '#1C2D40', fontSize: 23, fontWeight: 600}}>
            Mark you attendance at
          </Text>
          <Image source={require('../../assets/images/Name-logo.png')} />
        </View>
        <View style={{alignItems: 'center', marginTop: 70}}>
          <Text style={{fontSize: 20, color: '#FFFFFF'}}>
            There is no time like the
          </Text>
          <Text style={{fontSize: 20, color: '#FFFFFF'}}>PRESENT</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#97BCE8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Loading;

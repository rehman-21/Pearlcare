import React from 'react';
import {Image, Text, View} from 'react-native';
const Profiles = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
      <View>
        <Image source={require('../../assets/images/profile-img.png')} />
      </View>
      <View style={{marginLeft: 10}}>
        <Text style={{color: '#000', fontWeight: 700}}>Sakashi Choudhary</Text>
        <Text style={{color: '#000', fontSize: 12}}>
          sakashichoudhary@email.com
        </Text>
      </View>
    </View>
  );
};
export default Profiles;

import React, {useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Collapsible from 'react-native-collapsible';
import HeaderBar from '../../commons/HeaderBar';
import Profiles from '../../commons/Profile';
import TodayClass from '../../commons/Today';
const Attendance = ({navigation}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <SafeAreaView style={{marginHorizontal: 13}}>
      <View>
        <HeaderBar onPress={() => navigation.goBack()} />
        <Profiles />
      </View>
      <View>
        <View style={{marginTop: 28}}>
          <Text style={{color: '#282424', fontSize: 35, fontWeight: 900}}>
            Hi,Sakshi.
          </Text>
          <Text style={{color: '#97BCE8', fontSize: 25, fontWeight: 700}}>
            Welcome to your Class
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={{color: '#000', fontSize: 20, fontWeight: 700}}>
            Today's Classes
          </Text>
          <TouchableOpacity onPress={toggleCollapse}>
            <Image source={require('../../assets/images/Dropdown.png')} />
          </TouchableOpacity>
        </View>
      </View>
      {isCollapsed ? <TodayClass /> : ''}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text style={{color: '#000', fontSize: 20, fontWeight: 700}}>
          Check Attendance Report
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Charts')}>
          <Image source={require('../../assets/images/Dropdown.png')} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text style={{color: '#000', fontSize: 20, fontWeight: 700}}>
          Faculty Details
        </Text>
        <TouchableOpacity>
          <Image source={require('../../assets/images/Dropdown.png')} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text style={{color: '#000', fontSize: 20, fontWeight: 700}}>
          Class Details
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('FacultyDetails')}>
          <Image source={require('../../assets/images/Dropdown.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Attendance;

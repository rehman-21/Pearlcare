import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Landing from '../../screens/Landing';
import Loading from '../../screens/Loading';
import HeaderBar from '../../commons/HeaderBar';
import Attendance from '../../screens/ClassDetails';
import FacultyDetails from '../../screens/Faculty';
import Charts from '../../screens/Charts';

const Stack = createNativeStackNavigator();
const {Navigator, Screen} = Stack;

export const AuthStack = ({navigation}) => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={'Loading'} component={Loading} />
      <Screen name={'Landing'} component={Landing} />
      <Screen name={'Attendance'} component={Attendance} />
      <Screen name={'FacultyDetails'} component={FacultyDetails} />
      <Screen name={'Charts'} component={Charts} />
    </Navigator>
  );
};

export const Root = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

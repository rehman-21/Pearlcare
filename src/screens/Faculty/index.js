import React from 'react';
import {SafeAreaView, View} from 'react-native';
import HeaderBar from '../../commons/HeaderBar';
import Profiles from '../../commons/Profile';
import Classhead from '../../commons/ClassHeader';
import ClassInfo from '../../commons/Classes';
import PaperInfo from '../../commons/PaperInfo';
const FacultyDetails = ({navigation}) => {
  return (
    <SafeAreaView style={{marginHorizontal: 14}}>
      <View>
        <HeaderBar onPress={() => navigation.goBack()} />
        <Profiles />
        <Classhead title={'Today’s Classes'} />
        <PaperInfo title1={'M'} title2={'Mathematics I'} title3={'09:30 am'} />
        <PaperInfo title1={'P'} title2={'Physics'} title3={'10:40 am'} />
        <PaperInfo title1={'B'} title2={'Biology'} title3={'11:45 am'} />
        <PaperInfo title1={'G'} title2={'Geography'} title3={'12:10 pm'} />
        <PaperInfo title1={'C'} title2={'Chemistry'} title3={'12:45 pm'} />
        <PaperInfo title1={'H'} title2={'History'} />
      </View>
    </SafeAreaView>
  );
};
export default FacultyDetails;

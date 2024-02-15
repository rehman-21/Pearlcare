import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Btn from '../Button2';
import Absent from '../Absent&Present';
import Present from '../Absent&Present/index1';

const PaperInfo = ({navigation, title1, title2, title3}) => {
  const [show, setShow] = useState('');
  const [show1, setShow1] = useState('');

  const Btnupdate = () => {
    setShow(<Present />);
  };
  const BtnHandler = () => {
    setShow1(<Absent />);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#DEDEDE',
        paddingVertical: 9,
        borderRadius: 15,
        padding: 7,
        marginBottom: 10,
      }}>
      <View>
        <View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#4E84C4',
              width: 45,
              height: 45,
              borderRadius: 50,
              marginRight: 13,
            }}>
            <Text style={{color: '#FFFFFF', fontSize: 25, fontWeight: 'bold'}}>
              {title1}
            </Text>
          </View>
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // marginBottom: 10,
            alignItems: 'center',
          }}>
          <View>
            <Text style={{color: '#4E4949', fontSize: 14}}>{title2}</Text>
          </View>
          <View>
            <Text style={{color: '#4E4949', fontSize: 11}}>{title3}</Text>
          </View>
        </View>

        {show ? (
          <Text>{show}</Text>
        ) : show1 ? (
          <Text>{show1}</Text>
        ) : (
          <View>
            <Btn onPress={Btnupdate} myPress={BtnHandler} />
          </View>
        )}
      </View>
    </View>
  );
};

export default PaperInfo;

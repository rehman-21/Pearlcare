import React from 'react';
import {Text, View} from 'react-native';
const TodayClass = ({}) => {
  return (
    <View
      style={{
        borderWidth: 2,
        borderColor: '#DEDEDE',
        padding: 7,
        borderRadius: 7,
      }}
      >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 11,
          }}>
          <View
            style={{
              backgroundColor: '#97BCE8',
              width: 30,
              height: 30,
              // borderWidth: 1,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontWeight: 700, fontSize: 17, color: '#fff'}}>
              M
            </Text>
          </View>
          <View style={{paddingLeft: 10}}>
            <Text style={{color: '#000'}}>Mathematics I</Text>
          </View>
        </View>
        <Text style={{color: '#000', fontSize: 12, marginRight: 10}}>
          09:30 am
        </Text>
      </View>
      {/* <=================================================================> */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 11,
          }}>
          <View
            style={{
              backgroundColor: '#000',
              width: 30,
              height: 30,
              // borderWidth: 1,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontWeight: 700, fontSize: 17, color: '#fff'}}>
              P
            </Text>
          </View>
          <View style={{paddingLeft: 10}}>
            <Text style={{color: '#000'}}>Physics</Text>
          </View>
        </View>
        <Text style={{color: '#000', fontSize: 12, marginRight: 10}}>
          10:40 am
        </Text>
      </View>
      {/* <=================================================================> */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 11,
          }}>
          <View
            style={{
              backgroundColor: '#4E84C4',
              width: 30,
              height: 30,
              // borderWidth: 1,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontWeight: 700, fontSize: 17, color: '#fff'}}>
              B
            </Text>
          </View>
          <View style={{paddingLeft: 10}}>
            <Text style={{color: '#000'}}>Biology</Text>
          </View>
        </View>
        <Text style={{color: '#000', fontSize: 12, marginRight: 10}}>
          11:45 am
        </Text>
      </View>
      {/* <=================================================================> */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 11,
          }}>
          <View
            style={{
              backgroundColor: '#000',
              width: 30,
              height: 30,
              // borderWidth: 1,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontWeight: 700, fontSize: 17, color: '#fff'}}>
              G
            </Text>
          </View>
          <View style={{paddingLeft: 10}}>
            <Text style={{color: '#000'}}>Geography</Text>
          </View>
        </View>
        <Text style={{color: '#000', fontSize: 12, marginRight: 10}}>
          12:10 am
        </Text>
      </View>
    </View>
  );
};
export default TodayClass;

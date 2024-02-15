import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
// import {BarChart} from 'react-native-chart-kit';
import BarChartComponent from '../../commons/BarCharts';
import HeaderBar from '../../commons/HeaderBar';
import Profiles from '../../commons/Profile';
import Classhead from '../../commons/ClassHeader';
// import {styles} from '../../commons/HeaderBar/style';
const Charts = ({navigation}) => {
  return (
    <SafeAreaView style={styles.ChartContainer}>
      <View>
        <HeaderBar onPress={() => navigation.goBack()} />
        <Profiles />
        <Classhead
          title={'Check Attendance Report'}
          additionalStyle={styles.head}
        />
        <BarChartComponent />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  ChartContainer: {
    marginHorizontal: 10,
    flex: 1,
  },
  head: {
    fontSize: 10,
    color: '#000',
  },
});

export default Charts;

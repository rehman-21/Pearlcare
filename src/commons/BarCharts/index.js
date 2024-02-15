import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BarChart} from 'react-native-chart-kit';

const BarChartComponent = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [100, 76, 95, 85, 75, 50],
      },
    ],
  };

  const chartConfig = {
    // backgroundGradientFrom: '#1E2968',
    backgroundGradientFromOpacity: '255',
    // backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 255,
    color: (opacity = 2) => `rgba(100, 100, 150, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 1.1,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <View>
      <BarChart
        style={{borderRadius: 10}}
        // style={graphStyle}
        data={data}
        width={330}
        height={240}
        yAxisLabel="$"
        chartConfig={chartConfig}
        // verticalLabelRotation={10}
      />
    </View>
  );
};

export default BarChartComponent;

const styles = StyleSheet.create({});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const StatisticsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Statistics screen</Text>
    </View>
  );
};

export default StatisticsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  }
})
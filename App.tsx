import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import CalculadoraScreen from './android/src/Screens/CalculadoraScreen';
import {styles} from './android/src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <CalculadoraScreen />
    </SafeAreaView>
  );
};

export default App;

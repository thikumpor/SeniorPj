import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Mainscreen from './src/screen/Mainscreen';
import StdLogin from './src/screen/StdLogin';
import TchLogin from './src/screen/TchLogin';
import PrLogin from './src/screen/PrLogin';
import Home from './src/screen/Home';
import RegisterST from './src/screen/Register';
import RegisterPr from './src/screen/RegisterPr';
import Test from './src/screen/Test';
import HomeTh from './src/screen/HomeTh';




const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Mainscreen} />
        <Stack.Screen name="StdLogin" component={StdLogin} />
        <Stack.Screen name="TchLogin" component={TchLogin} />
        <Stack.Screen name="PrLogin" component={PrLogin} />
        <Stack.Screen name="Register" component={RegisterST} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RegisterPr" component={RegisterPr} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="HomeTh" component={HomeTh}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

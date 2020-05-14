import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './library/Home';
import Questionpage from './library/Questionpage';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRoutName = "Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Questionpage" component={Questionpage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

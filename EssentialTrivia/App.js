import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Text, View, Button, AppRegistry, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Etstack(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name = "Home"
        component = {Home}
        options
        />

        <Stack.Screen name = "QuestionPage" component = {Question}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default class Homepage extends Component {
    state = {
        names: [
            { id: 0, name: 'Categories', color: 'skyblue',},
            { id: 1, name: 'QuickMatch', color: 'skyblue',},
            { id: 2, name: 'High Scores', color: 'skyblue',}
        ]
    }

   handlePress = () => {
    navigation.navigate('')
  }


    render() {
        return (
            <View style={{
              flex: 1,
              justifyContent: 'space-around',
              width: '100%',
              alignItems: 'center'
              }}>
              <Text style = {{ fontSize: 40, fontWeight: 'bold'}}>Essential Trivia</Text>
              {
                  this.state.names.map((item, index) => (
                    <Button
                      key = {item.id}
                      color = {item.color}
                      onPress = {() => this.handlePress()}
                      title = {item.name} 
                    />
                  ))
              }
            </View>
        );
    }
}

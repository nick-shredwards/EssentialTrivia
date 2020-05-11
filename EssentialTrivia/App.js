import React, { Component } from 'react';
import { Text, View, Button, AppRegistry, StyleSheet } from 'react-native';
import QuickMatch from './proj/EssentialTrivia/QuickMatch';
   
export default class Homepage extends Component {
    state = {
        names: [
            { id: 0, name: 'Categories', color: 'skyblue',},
            { id: 1, name: 'QuickMatch', color: 'skyblue',},
            { id: 2, name: 'High Scores', color: 'skyblue',}
        ]
    }

    handlePress = (item) => {

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
                      onPress = {() => this.handlePress(item)}
                      title = {item.name} 
                    />
                  ))
              }
            </View>
        );
    }
}

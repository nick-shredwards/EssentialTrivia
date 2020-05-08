import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
   
export default class Homepage extends Component {
    state = {
        names: [
            { id: 0, name: 'Categories', color: 'skyblue',},
            { id: 1, name: 'QuickMatch', color: 'skyblue',},
            { id: 2, name: 'High Scores', color: 'skyblue',}
        ]
    }

    render() {
        return (
            <View style={{
              flex: 1,
              justifyContent: 'space-around',
              width: '100%',
              alignItems: 'center'
              }}>
              {
                  this.state.names.map((item, index) => (
                    <Button
                      key = {item.id}
                      color = {item.color}
                      title = {item.name} 
                    />
                  ))
              }
            </View>
        );
    }
}

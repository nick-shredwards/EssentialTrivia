import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Questionpage extends Component {
    state = {
        answers: [
            { id: 0, name: 'Answer 1', color: 'skyblue',},
            { id: 1, name: 'Answer 2', color: 'skyblue',},
            { id: 2, name: 'Answer 3', color: 'skyblue',},
            { id: 3, name: 'Answer 4', color: 'skyblue',}
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
              { <Text>Essential Trivia</Text> }
              { <Text>Question 1</Text>}
              {
                  this.state.answers.map((item, index) => (
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
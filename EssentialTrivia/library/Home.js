import React, { Component } from 'react';
import { Text, View, Button} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
      this.state = {
        names: [
            { id: 0, name: 'Categories', color: 'skyblue',},
            { id: 1, name: 'QuickMatch', color: 'skyblue',},
            { id: 2, name: 'High Scores', color: 'skyblue',}
        ]
    }
  }

  handlePress = (item) => {
    if (item.name == "QuickMatch"){
      this.props.navigation.navigate('Questionpage');
    }
    if (item.name == "High Scores"){
      this.props.navigation.navigate('HighScorePage');
    }
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
                      title = {item.name}
                      onPress={() => this.handlePress(item)} 
                    />
                  ))
              }
            </View>
        );
    }
}

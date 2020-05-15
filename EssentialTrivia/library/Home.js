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
            ],
        url: 'http://10.0.1.17:3001' 
    }
  }

  handlePress = (op, method = '', item, params = {}) => {
    if (item.id == 1) {this.props.navigation.navigate('Questionpage')}
    if (method != '')
        params.method = method;
    fetch(this.state.url + '/'+op, params)
        .then((response) => response.text())
        .then((responseText) => {
          alert(`
              Sent:  op=${JSON.stringify(op)}\nparams+method=${
        JSON.stringify(params)}\n
              Received:  ${responseText}`);
        let modResponse = responseText.replace('{"question":[{"trivia":"(', "");
        modResponse = modResponse.replace(/"|[)]|}]}|\\/g, '');
        <Questionpage questAnswers = {modResponse} />
        console.log(modResponse);
        })
        .catch((error) => {
            console.error(error);
        });
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
                      onPress={() => this.handlePress('trivia','GET', item)} 
                    />
                  ))
              }
            </View>
        );
    }
}

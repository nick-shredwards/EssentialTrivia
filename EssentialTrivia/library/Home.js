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
            url: 'http://10.0.1.17:3001',
            title: "Navigation Example"
          };

    if (typeof this.props.route.params === 'undefined')
        this.props.route.params = {
            title: this.state.title,
            question: '',
            feCount : 0 };
    this.params = this.props.route.params;  // for convenience
  }

  handlePress = (op, method = '', item, params = {}) => {
    if (method != '')
        params.method = method;
    fetch(this.state.url + '/'+op, params)
        .then((response) => response.text())
        .then((responseText) => {
          alert(`
              Sent:  op=${JSON.stringify(op)}\nparams+method=${
        JSON.stringify(params)}\n
              Received:  ${responseText}`);
        var modResponse = responseText.replace('{"question":[{"trivia":"(', "");
        this.props.route.params.question = modResponse.replace(/"|[)]|}]}|\\/g, '');
        })
        .catch((error) => {
            console.error(error);
        });
        if (item.id == 1) {this.props.navigation.push('Questionpage', this.props.route.params);}
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

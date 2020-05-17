import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Questionpage extends Component {
  constructor(props){
    super(props);
    this.state = {
        answers: [
            { id: 0, name: '', color: 'skyblue',},
            { id: 1, name: '', color: 'skyblue',},
            { id: 2, name: '', color: 'skyblue',},
            { id: 3, name: '', color: 'skyblue',}
        ]
    };
    this.params = this.props.route.params;
    this.params.feCount++;
  }

    handlePress = (item) => {
      if (item.id == 0){
        console.log(this.params.feCount);
        console.log(this.params.question)
      }
    }

    render() {
      var quest = [];
      var answer2 = [];
      var answer3 = [];
      var answer4 = [];
      var count = 0;
      for (let i = 0; i < this.params.question.length; i ++){
        if (this.params.question.charAt(i) == ',' && count == 0){
          let n = i + 1;
          while (this.params.question.charAt(n) != ','){
            quest.push(this.params.question.charAt(n));
            n ++;
          }
          count ++;
          
        }
        if (this.params.question.charAt(i) == ',' && count == 1){
          var answer1 = [];
          let n = i + 1;
          while (this.params.question.charAt(n) != ','){
            answer1.push(this.params.question.charAt(n));
            n ++;
          }
          count ++;
        }
        if (this.params.question.charAt(i) == ',' && count == 2){
          let n = i + 1;
          while (this.params.question.charAt(n) != ','){
            answer2.push(this.params.question.charAt(n));
            n ++;
          }
          count ++;
        }
        if (this.params.question.charAt(i) == ',' && count == 3){
          let n = i + 1;
          while (this.params.question.charAt(n) != ','){
            answer3.push(this.params.question.charAt(n));
            n ++;
          }
          count ++;
        }
        if (this.params.question.charAt(i) == ',' && count == 4){
          let n = i + 1;
          while (this.params.question.charAt(n) != ','){
            answer4.push(this.params.question.charAt(n));
            n ++;
          }
          count ++;
        }

      }  

        return (
            <View style={{
              flex: 1,
              justifyContent: 'space-around',
              width: '100%',
              alignItems: 'center'
              }}>
              { <Text>{quest}</Text> }
              {

                  this.state.answers.map((item, index) => (
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
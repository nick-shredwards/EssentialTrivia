import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomePage({navigation}) {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'space-around',
      width: '100%',
      alignItems: 'center'
      }}>
      <Text style = {{ fontSize: 40, fontWeight: 'bold'}}>Essential Trivia</Text>
      <Button
        title = "Quickmatch"
        onPress = {() => navigation.navigate('QuestionPage')}
      />
      <Button
        title = "High Scores"
      />
      <Button 
        title = "Categories"
      />
    </View>
  );
}

function QuestionPage({navigation}) {
  return(
    <View style={{
      flex: 1,
      width: '100%',
      alignItems: 'center'
      }}>
      <Text style = {{ fontSize: 40, fontWeight: 'bold'}}>Question</Text>
      <Button
        title = "a"
        onPress = {() => navigation.navigate('QuestionPage')}
      />
      <Button
        title = "b"
      />
      <Button 
        title = "c"
      />
        <Button 
        title = "d"
      />

    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoutName = "HomePage">
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="QuestionPage" component = {QuestionPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
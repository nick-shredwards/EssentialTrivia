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
        onPress = {() => navigation.navigate('Categories')}
      />
    </View>
  );
}

function QuestionPage({navigation}) {
  return(
    <View style={{
      flex: 1,
      width: '100%',
      justifyContent: 'space-around',
      alignItems: 'center'
      }}>
      <Text style = {{ fontSize: 20, fontWeight: 'bold'}}>What is Nick's Favorite color?</Text>
      <Button
        title = "Purple"
        onPress = {() => navigation.navigate('Winner')}
      />
      <Button
        title = "Blue"
        onPress = {() => navigation.navigate('Loser')}
      />
      <Button 
        title = "Yellow"
        onPress = {() => navigation.navigate('Loser')}
      />
        <Button 
        title = "Red"
        onPress = {() => navigation.navigate('Loser')}
      />

    </View>
  );
}

function Categories({navigation}) {
  return(
    <View style={{
      flex: 1,
      width: '100%',
      alignItems: 'center'
      }}>
      <Text style = {{ fontSize: 40, fontWeight: 'bold'}}>Categories</Text>
      <Button
        title = "Nick's Favorite color"
        onPress = {() => navigation.navigate('QuestionPage')}
      />
      <Button
        title = "Black Holes"
      />

    </View>
  );
}


function Loser({navigation}) {
  return(
    <View style={{
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
      }}>
      <Text style = {{ fontSize: 40, fontWeight: 'bold'}}>You Lose!</Text>
      <Button 
      title = "Back to Home"
      onPress = {() => navigation.navigate('HomePage')}
      />
    </View>
  );
}

function Winner({navigation}) {
  return(
    <View style={{
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
      }}>
      <Text style = {{ fontSize: 40, fontWeight: 'bold'}}>You Win!</Text>
      <Button 
      title = "Back to Home"
      onPress = {() => navigation.navigate('HomePage')}
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
        <Stack.Screen name= "Categories" component = {Categories} />
        <Stack.Screen name = "Loser" component = {Loser} />
        <Stack.Screen name = "Winner" component = {Winner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
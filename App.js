import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'

import myApp from './compo/myApp'
import { createStackNavigator, createAppContainer } from "react-navigation";

class Aditya extends React.Component {

  render(){
    return(
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container :{
    flex : 1,
    backgroundColor:'grey'
  }
});


// Other code for HomeScreen here...
class DetailsScreen extends React.Component {
  render() { 
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Go yoyo"
          onPress={() => this.props.navigation.navigate('yo')}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: Aditya,
    Details: DetailsScreen,
    yo: myApp
  },
  {
    initialRouteName: "Home"
  }
);

// Other code for App component here...

// AppRegistry.registerComponent('Aditya', () => Aditya);
export default createAppContainer(AppNavigator);
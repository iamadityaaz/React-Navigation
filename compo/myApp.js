import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'

export default class myApp extends React.Component {

  render(){
    return(
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>yoyo</Text>
      <Text style = {{fontSize : 24}}>its another component, in other js file</Text>
      <Button
          title="Go to back"
          onPress={() => this.props.navigation.goBack()}
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


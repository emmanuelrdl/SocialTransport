/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   Navigator
 } from 'react-native';

import Travel from './Travel'
import Lines from './Lines'
export default class SocialReR extends Component {

  renderScene(route, navigator) {
    if (route.name == 'Travel' ){
      return <Travel navigator={navigator} {...route.passProps} />
    } else if (route.name == 'Lines') {
      return <Lines navigator={navigator} {...route.passProps} />
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'Lines'}}
        renderScene={ this.renderScene }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SocialReR', () => SocialReR);

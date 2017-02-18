
import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,  StyleSheet } from 'react-native';
import { Container, Header, Title, Button, Icon, Content, Badge} from 'native-base';
import { styles } from './StyleSheet'

export default class Lines extends Component {

 constructor(props){
   super(props)
 }

 _navigate() {
 }


 componentWillMount(){

 }

submitLine(){
  console.warn('submit')
}

  render() {
    return (
      <Container>
          <Header>
            <Button transparent>
                <Icon name='ios-menu' />
            </Button>
              <Title>Selectionez une ligne</Title>
          </Header>
          <Content>
              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding:20}}>
                <Button rounded info style={{width:60, height:60}} onClick={() => this.submitLine()} > 1 </Button>
                <Button rounded info style={{width:60, height:60}}> 1 </Button>
                <Button rounded info style={{width:60, height:60}}> 1 </Button>
                <Button rounded info style={{width:60, height:60}}> 1 </Button>
              </View>
          </Content>

      </Container>
    )
  }
}

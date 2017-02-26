
import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,  StyleSheet } from 'react-native';
import { Container, Header, Title, Button, Icon, Content, Badge} from 'native-base';
import { styles } from './StyleSheet'

export default class Lines extends Component {

 constructor(props){
   super(props)
   this.state = {lineGroups:[ [1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,0,0] ]}
 }


 _navigate(page, line) {
   this.props.navigator.push({
      name: page,
      passProps: {
        lineId: line
      }
    })
 }


submitLine(line){
  this._navigate('Travel', line)
}

  render() {
   const lineBlock = (block) => {
     return(
       <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding:20}}>
        {block.map((line) => {
          if (line != 0) {
            return <Button rounded info style={styles.roundedButton}  onPress={() => this.submitLine(line)}  > {line} </Button>
          } else {
            return <Button rounded info style={styles.roundedButton} >  </Button>
          }
         })}
       </View>
     )
   }

    const lineBlocks = this.state.lineGroups.map((key) => {
      return (
        lineBlock(key)
      )
    })


    return (
      <Container>
          <Header>
            <Button transparent>
                <Icon name='ios-menu' />
            </Button>
              <Title>Selectionez une ligne</Title>
          </Header>
          <Content>
            {lineBlocks}
          </Content>
      </Container>
    )
  }
}

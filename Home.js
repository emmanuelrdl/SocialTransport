
import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,  StyleSheet } from 'react-native';
import { Container, Header, Title, Button, Icon, Content, InputGroup, Input} from 'native-base';
import { styles } from './StyleSheet'

export default class Home extends Component {

 constructor(props){
   super(props)


 }

 componentWillMount(){

   var stationsNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
   var stationsName   = []
   stationsNumber.forEach((number) => {
     this.getStations(number, (stations) => {
       this.pushStationsNames(stations)
       return stations
     })
   })

 }

 pushStationsNames(stations){
   stations.forEach((station) =>{
     console.log(station.name)
    //  stationsName.push(station)
   })
 }

 _navigate() {
   this.props.navigator.push({
     name: 'IndexBooks'
   })
 }

 getStations(line, cb) {
   return fetch('https://api-ratp.pierre-grimaud.fr/v2/metros/' + line + '/stations?format=json')
     .then((response) => response.json())
     .then((responseJson) => {
       stations = responseJson.response.stations;
       cb(stations)
       return stations;
     })
     .catch((error) => {
       console.error(error);
     });
  }

  render() {
    return (
      <Container>
          <Header>
            <Button transparent>
                <Icon name='ios-menu' />
            </Button>
              <Title>SocialTransport</Title>
          </Header>

        <Content>
        <InputGroup borderType='regular' >
          <Input

            placeholder='Départ'/>
        </InputGroup>
        <InputGroup borderType='regular' >
          <Input placeholder='Arrivée'/>
        </InputGroup>
          <Button block success> Lancer la recherche </Button>
        </Content>

      </Container>
    )
  }
}




Home.propTypes = {
  // title: PropTypes.string.isRequired,
  // onForward: PropTypes.func.isRequired,

};

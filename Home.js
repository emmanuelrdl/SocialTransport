
import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,  StyleSheet } from 'react-native';
import { Container, Header, Title, Button, Icon, Content, InputGroup, Input} from 'native-base';
import { styles } from './StyleSheet'

export default class Home extends Component {

 constructor(props){
   super(props)
   this.state = {stations: []}
 }

 componentWillMount(){
   var stationsNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
   this.returnAllStations(stationsNumber, (stationsName, lineStations) => {
    this.setState({stations: stationsName})
   })

 }

 returnAllStations(stationsNumber, callback){
   var stationsName   = []
   var lineStations   = []
   var stationsNumberCount = 1
   stationsNumber.forEach((number) => {
     this.getStations(number, (stations) => {
       stationsName.push({[number]: this.pushStationsNames(stations)})
       stationsNumberCount += 1
       if (stationsNumberCount == stationsNumber.length) {
         callback(stationsName, lineStations)
       }
     })
   })

 }

 pushStationsNames(stations){
   var lineStationsName = []
   stations.forEach((station) =>{
     lineStationsName.push(station.name)
   })
  return lineStationsName
 }


 getStations(line, callback) {
   return fetch('https://api-ratp.pierre-grimaud.fr/v2/metros/' + line + '/stations?format=json')
     .then((response) => response.json())
     .then((responseJson) => {
       stations = responseJson.response.stations;
       callback(stations)
       return stations;
     })
     .catch((error) => {
       console.error(error);
     });
  }


   _navigate() {
     this.props.navigator.push({
       name: 'IndexBooks'
     })
   }

   autoComplete(text){
     this.findStation(text)

   }

   findStation(text){
     console.log(this.state.stations)
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
            onChangeText={(text) => this.autoComplete({text})}
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

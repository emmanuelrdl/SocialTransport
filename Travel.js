
import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity,  StyleSheet } from 'react-native';
import { Container, Header, Title, Button, Icon, Content, InputGroup, Input} from 'native-base';
import { styles } from './StyleSheet'
import Autocomplete from 'react-native-autocomplete-input';

export default class Travel extends Component {

 constructor(props){
   super(props)
   this.state = {stations: []}
 }

 // _navigate() {
 //   this.props.navigator.push({
 //     name: 'IndexBooks'
 //   })
 // }

 componentWillMount(){
  this.getStations(this.props.lineId, (stations) => {
    stationsName = []
    stations.map((station) => {
      stationsName.push(station.name)
    })
    this.setState({stationsName: stationsName})
  })
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


selectStation(text){
  var textLength = text.length
  var updatedStationsName = this.state.stationsName.filter((station) => {
    return station.substring(0, textLength) == text
  })
  console.log(updatedStationsName)

}




  render() {
    return (
      <Container>
          <Header>
            <Button transparent>
                <Icon name='ios-menu' />
            </Button>
              <Title>Next Train</Title>
          </Header>

        <Content>
          <Autocomplete
            placeholder="Enter your station"

            data={this.state.stationsName}
            onChangeText={text => this.selectStation(text)}
            renderItem={data => (
              <TouchableOpacity onPress={() => this.setState({ stationsName: [] })}>
                <Text>{data}</Text>
              </TouchableOpacity>
            )}
          />

        </Content>

      </Container>
    )
  }
}

// chatbot ?
// All stations names with lines -> {station: [lines]}
// Calculate travel:
  //

Travel.propTypes = {
  // title: PropTypes.string.isRequired,
  // onForward: PropTypes.func.isRequired,

};

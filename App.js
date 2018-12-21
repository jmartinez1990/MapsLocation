/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {Marker} from "react-native-maps";

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0,
        }
    }


    componentDidMount() {
        navigator.geolocation.getCurrentPosition((userPosition) => {
            this.setState({
                latitude: userPosition.coords.latitude,
                longitude: userPosition.coords.longitude,
            })
        });

    }

  render() {
    return (
      <View style={styles.container}>
          <MapView
              style={{ width: '100%', height: 400 }}
              region={{
                  latitude: this.state.latitude,
                  longitude: this.state.longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
              }}
          >
              <Marker
                  coordinate={{
                      latitude: this.state.latitude,
                      longitude: this.state.longitude,
                  }}
                  title={'Test title'}
                  description={'Test description'}
              />
          </MapView>
      </View>
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

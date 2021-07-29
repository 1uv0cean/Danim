import React from "react"; 
import { View, StyleSheet } from "react-native"; 
import MapView, { PROVIDER_GOOGLE } from "react-native-maps"; 

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 615,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });

function GoogleMap() { 
  return ( 
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.4480, 
          longitude: 126.6575, 
          latitudeDelta: 0.01, 
          longitudeDelta: 0.01, 
        }}
      >
      </MapView>
    </View>
  ); 
} 
export default GoogleMap;

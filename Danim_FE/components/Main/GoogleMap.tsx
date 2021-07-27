import React from "react"; 
import { View, Text } from "react-native"; 
import MapView, { PROVIDER_GOOGLE } from "react-native-maps"; 
function GoogleMap() { 
  return ( 
    <> 
      <View style={{ flex: 1 }}> 
        <MapView 
          style={{ flex: 1 }} 
          provider={PROVIDER_GOOGLE} 
          initialRegion={{ 
            latitude: 37.4480, 
            longitude: 126.6575, 
            latitudeDelta: 0.01, 
            longitudeDelta: 0.01, 
          }} 
        /> 
      </View> 
    </> 
  ); 
} 
export default GoogleMap;

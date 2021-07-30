import React from 'react';
import {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {Marker} from 'react-native-maps';
import {funcGetBusstop} from '../../function/funcGetBusstop';

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

interface ILocation {
  latitude: number;
  longitude: number;
}

function GoogleMap() {
  const [location, setLocation] = useState<ILocation | undefined>(undefined);

  const doGetBusstop = async () => {
    try {
      let getResult = await funcGetBusstop();
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    // 현재 위치 받아오기
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocation({
          latitude,
          longitude,
        });
        //doGetBusstop();
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          initialRegion={{
            // latitude: location.latitude,
            // longitude: location.longitude,
            // 에뮬레이터 GPS 기능 부재로 위의 코드로 수정 해야 합니다.
            latitude: 37.448,
            longitude: 126.6575,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}>
          <Marker
            coordinate={{
              // latitude: location.latitude,
              // longitude: location.longitude,
              latitude: 37.448,
              longitude: 126.6575,
            }}
          />
        </MapView>
      )}
    </View>
  );
}
export default GoogleMap;

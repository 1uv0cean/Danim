import React from 'react';
import {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {Marker, Callout} from 'react-native-maps';
import {funcGetBusstop} from '../../function/funcGetBusstop';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 625,
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
  const [nearStop, setNearStop] = useState<[]>([]);

  const doGetBusstop = async ({latitude, longitude}: any) => {
    try {
      let getResult = await funcGetBusstop({latitude, longitude});
      setNearStop(getResult);
      return getResult;
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
        doGetBusstop({latitude, longitude});
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            // 에뮬레이터 GPS 기능 부재로 위의 코드로 수정 해야 합니다.
            // latitude: 37.448,
            // longitude: 126.6575,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}>
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
              // latitude: 37.448,
              // longitude: 126.6575,
            }}
          />
          {nearStop !== undefined &&
            nearStop.map((test: any) =>
              test?.nodeno?._text !== undefined ? (
                <Marker
                  key={test.nodeno._text}
                  coordinate={{
                    latitude: test.gpslati._text * 1,
                    longitude: test.gpslong._text * 1,
                  }}>
                  <Callout tooltip>
                    <View>
                      <Text>
                        {/* {marker.title}
                        {'\n'}
                        {marker.description} */}
                        {test.nodeid._text}
                        {'\n'}
                        {test.nodenm._text}
                        {'\n'}
                        {test.nodeno._text}
                      </Text>
                    </View>
                  </Callout>
                </Marker>
              ) : (
                <Marker
                  key={test.stationId._text}
                  coordinate={{
                    latitude: test.gpsY._text * 1,
                    longitude: test.gpsX._text * 1,
                  }}>
                  <Callout tooltip>
                    <View>
                      <Text>
                        {/* {marker.title}
                    {'\n'}
                    {marker.description} */}
                        {test.stationId._text}
                        {'\n'}
                        {test.stationNm._text}
                      </Text>
                    </View>
                  </Callout>
                </Marker>
              ),
            )}
        </MapView>
      )}
    </View>
  );
}
export default GoogleMap;

import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Button } from 'react-native-paper';
import RefreshButton from '../components/StationInfo/RefreshButton';
import StationInfoTitle from '../components/StationInfo/StationInfoTitle';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    BusText: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    PointText: {
        marginRight: 10,
        fontSize: 18,
    },
    DirectionInfoText: {
        fontSize: 20,
        margin: 12,
    },
    rowView: {
        flexDirection: 'row',
    },
    listContainer: {
        flex: 1,
    },
    listView: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#000000',
        padding: 20
    },
    ReservationButton: {
        backgroundColor: '#2C3E50',
        height: 38,
        width: '23%',
        marginTop: 13,
    },
    ReservationText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold'
    },
    arriveYes: {
        width: '75%',
        marginTop: 15,
        fontSize: 17,
        color: 'red'
    },
    arriveNo: {
        width: '75%',
        marginTop: 15,
        fontSize: 17,
        color: 'gray'
    },
});

const StationInfo: React.FunctionComponent = ({ route }: any) => {
    return (
        <View style={styles.container}>
            <StationInfoTitle />
            <View style={styles.listContainer}>
                <FlatList
                    data={[
                        {
                            key: '350',
                            direction: '남사박 방면',
                            start: '오이도 차고지',
                            end: '목감중심상업지구',
                            remaintime: '3',
                            remainstop: '1',
                            arrive: 'yes',
                        },
                        {
                            key: '50',
                            direction: '남사박 방면',
                            start: '안산해솔초등학교',
                            end: 'KTX 광명역 1번 출구',
                            remaintime: '48',
                            remainstop: '21',
                            arrive: 'yes',
                        },
                        {
                            key: '30-2',
                            direction: '남사박 방면',
                            start: '오이도 차고지',
                            end: '목감중심상업지구',
                            remaintime: '17',
                            remainstop: '9',
                            arrive: 'yes',
                        },
                        {
                            key: '8851',
                            direction: '남사박 방면',
                            start: '(구)터미널',
                            end: '수원공용버스터미널',
                            remaintime: '3',
                            remainstop: '2',
                            arrive: 'no',
                        },
                    ]}
                    renderItem={({ item }) => (
                        <View style={styles.listView}>
                            <View style={styles.rowView}>
                                <Text style={styles.BusText}>{item.key}번</Text>
                                <Text style={styles.DirectionInfoText}>{item.direction}</Text>
                            </View>
                            <View style={styles.rowView}>
                                <Text style={styles.PointText}>{item.start}  &lt;-&gt;</Text>
                                <Text style={styles.PointText}>{item.end}</Text>
                            </View>
                            <View style={styles.rowView}>
                                <Text
                                    style={[
                                        item.arrive === 'yes'
                                            ? styles.arriveYes
                                            : styles.arriveNo,
                                    ]}>
                                    {item.arrive === 'yes'
                                        ? <Text>{item.remaintime}분  ({item.remainstop}정류장)</Text>
                                        : '도착예정정보 없음'}
                                </Text>
                                <Button style={styles.ReservationButton}>
                                    <Text style={styles.ReservationText}>예약</Text>
                                </Button>
                            </View>
                        </View>
                    )}
                />
            </View>
            <RefreshButton />
        </View>
    );
};

export default StationInfo;
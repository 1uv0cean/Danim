import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Button } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        width: '100%',
        height: '23%',
        backgroundColor: '#2C3E50',
    },
    StationText: {
        color: '#FFFFFF',
        textAlign: 'left',
        fontSize: 35,
        fontWeight: 'bold',
        margin: 20,
        marginBottom: 5,
    },
    StationIdText: {
        color: '#FFFFFF',
        textAlign: 'left',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 25,
    },
    DirectionText: {
        color: '#FFFFFF',
        textAlign: 'left',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    AddressText: {
        color: '#FFFFFF',
        textAlign: 'right',
        fontSize: 14,
        marginTop: 12,
        marginRight: 10,
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
    RefreshImage: {
        width: 75,
        height: 75
    }, 
    footer: {
        marginTop: '120%',
        marginLeft: '73%',
        position: 'absolute'
    }
});

const StationInfo: React.FunctionComponent = ({ route }: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.rowView}>
                    <Text style={styles.StationText}>수암 파출소</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.StationIdText}>21515</Text>
                    <Text style={styles.DirectionText}>|</Text>
                    <Text style={styles.DirectionText}>남사박 방면</Text>
                </View>
                <Text style={styles.AddressText}>경기도 원곡동 안산동 수인로 495</Text>
            </View>
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
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image
                        style={styles.RefreshImage}
                        source={require('../img/refresh.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default StationInfo;
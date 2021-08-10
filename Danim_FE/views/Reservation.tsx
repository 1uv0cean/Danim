import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { HomeScreens } from '../navigators/index';
import {Button} from 'react-native-paper';
import Departure from '../components/reservation/Departure';
import Arrival from '../components/reservation/Arrival';
import GardianCheckbox from '../components/reservation/GardianCheckbox';
import { useNavigation } from '@react-navigation/native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        width: '100%',
    },
    busView: {
        flex: 1,
    },
    busidText: {
        margin:15,
        marginLeft:30,
        fontSize: 35,
        fontWeight: 'bold',
    },
    busText: {
        marginLeft:30,
        fontSize: 20,
    },
    reservationView: {
        flex: 3,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 8, 
        elevation: 5,
        paddingBottom: 20,
        margin: 20,
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        margin: 30,
    },
    stopText: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 35,
        marginTop: 20,
      },
    buttonView: {
        flex: 1,
        margin: 10,
    },
    reservationButton: {
        backgroundColor: '#2C3E50',
        width: '90%',
        alignSelf: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 17,
        fontWeight: 'bold',
    },
    GardianCheckbox: {
        flexDirection: 'row',
        marginLeft: 20,
    },
    checkboxText: {
        margin: 5,
        fontSize: 18,
    }
});
const Reservation = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
        <View style={styles.busView}>
            <Text style={styles.busidText}>11</Text>
            <Text style={styles.busText}>안산시 직행버스</Text>
        </View>
        <View style={styles.reservationView}>
            <Text style={styles.titleText}> 출발지와 목적지를 선택해주세요. </Text>
            <Text style={styles.stopText}>출발지</Text>     
            <View>
            <Departure />
            </View>
            <Text style={styles.stopText}>도착지</Text>     
            <View>
                <Arrival />
            </View>
            <View style={styles.GardianCheckbox}>
            <GardianCheckbox />
            <Text style={styles.checkboxText}>보호자와 함께 탑승</Text>
        </View>
        </View>
        <View style={styles.buttonView} >
                <Button style={styles.reservationButton} 
                onPress={() => navigation.navigate(HomeScreens.Reserved)}>
                    <Text style={styles.buttonText}>예약</Text>
                </Button>
            </View>
        </View>
    );
};

export default Reservation;

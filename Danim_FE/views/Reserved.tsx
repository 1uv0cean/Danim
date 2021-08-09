import React from 'react';
import {
    HomeScreens,
    HomeStackParamList,
} from '../navigators/index';
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button } from 'react-native-paper';

type EditRegistrationScreenNavigationProps = StackNavigationProp<
  HomeStackParamList,
  HomeScreens.EditRegistration
>;

interface EditRegistrationScreenProps {
    navigation: EditRegistrationScreenNavigationProps;
  }

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
    },
    reservedView:{
        flex: 3,
        width: '87%',
        alignSelf: 'center',
        borderRadius: 8,
        elevation: 5,
        paddingBottom: 10,
    },
    subjectView: {
        flex:2,
    },
    buttonView: {
        flex:1, 
    },
    subjectText:{
        fontSize: 20,
        margin: 20,
    },
    cancleButton:{
        backgroundColor: '#2C3E50',
        width: '87%',
        alignSelf: 'center',
        margin: 20,
    },
    buttonText:{
        color: '#ffffff',
        fontSize: 17,
        fontWeight: 'bold',
    },
    dateText:{
        fontSize: 18,
        margin: 20,
    },
    busText:{
        fontSize: 35,
        fontWeight: 'bold',
        marginLeft: 25,
        marginBottom: 25,
    },
    stopText:{
        fontSize: 19,
        marginLeft: 25,
    },
    downAllowsImage:{
        width: 15,
        height: 15,
        marginLeft: 30,
        marginTop: 10,
        marginBottom: 10,
    },
    clockImage:{
        width: 30,
        height: 30,
    },
    timeText:{
        fontSize: 17,
        color: '#FF0000',
        marginLeft: 10,
        marginTop: 2,
    },
    timeView:{
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 25,
    },
    topView:{
        flexDirection: 'row',
    },
    destinationImage:{
        width: 100,
        height: 100,
        alignSelf: 'center',
    },
    refreshbuttonImage:{
        width: 40,
        height: 40,
        marginTop: 25,
        marginLeft: 50,
    },
});

const Reserved: React.FunctionComponent<EditRegistrationScreenProps> = () =>{
    return (
        <View style={styles.container}>
            <View style={styles.subjectView}>
                <Text style={styles.subjectText}>예약정보를 확인하세요.</Text>
                <Image
                    style={styles.destinationImage}
                    source={require('../img/destination.png')}
                 />
            </View>
            <View style={styles.reservedView}>
                <View style={styles.topView}>
                    <Text style={styles.dateText}>2021.07.26(월요일) 18:13</Text>
                    <TouchableOpacity>
                        <Image
                            style={styles.refreshbuttonImage}
                            source={require('../img/refresh-button.png')}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.busText}>350번</Text>
                <Text style={styles.stopText}>창원시청</Text>
                <Image
                    style={styles.downAllowsImage}
                    source={require('../img/arrows-down.png')}
                 />
                <Text style={styles.stopText}>롯데백화점(인천터미널)</Text>
                <View style={styles.timeView}>
                    <Image
                        style={styles.clockImage}
                        source={require('../img/clock.png')}
                    />
                    <Text style={styles.timeText}>버스가 약 3분 뒤 도착합니다.</Text>
                 </View>
            </View>
            <View style={styles.buttonView}>
                <Button style={styles.cancleButton}>
                    <Text style={styles.buttonText}>예약취소</Text>
                </Button> 
            </View>
        </View>
    );
}

export default Reserved;
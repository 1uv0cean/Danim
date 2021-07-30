import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
    HomeScreens,
    HomeStackParamList,
} from '../navigators/index';
import { StackNavigationProp } from '@react-navigation/stack';
import { redA700 } from 'react-native-paper/lib/typescript/styles/colors';

type MyPageScreenNavigationProps = StackNavigationProp<
    HomeStackParamList,
    HomeScreens.MyPage
>;

interface MyPageScreenProps {
    navigation: MyPageScreenNavigationProps;
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    idView:{
        flex: 1,
    },
    personalInfoView:{
        flex:3,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        flexDirection: 'row',
        alignItems:'flex-end',
        padding: 11,
    },
    disabilityView:{
        flex:4,
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderTopColor: 'black',
        flexDirection: 'row',
        padding: 11,
    },
    subjectText:{
        fontSize: 18,
        fontWeight: 'bold',
        flex: 0.98,
    },
    idText:{
        margin: 15,
        marginBottom: 0,
        fontSize: 35,
        fontWeight: 'bold',
    },
    hiText:{
        margin: 15,
        marginTop: 0,
        fontSize: 20,
    },
    allowsImage:{
        width: 25,
        height: 25,
    },
});

const MyPage: React.FunctionComponent<MyPageScreenProps> = (props) => {
     const {navigation} = props;
    return (
        <View style={styles.container}>
            <View style={styles.idView}>
                <Text style={styles.idText}>DINO</Text> 
                <Text style={styles.hiText}>안녕하세요!</Text>
            </View>
            <View style={styles.personalInfoView}>
                <Text style={styles.subjectText}>개인정보수정</Text>
                <TouchableOpacity onPress={() => navigation.navigate(HomeScreens.EditProfile)}>
                    <Image
                        style={styles.allowsImage} source={require('../img/arrows.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.disabilityView}>
                <Text style={styles.subjectText}>장애인등록증수정</Text>
                <TouchableOpacity onPress={() => navigation.navigate(HomeScreens.EditRegistration)} >
                    <Image 
                        style={styles.allowsImage} source={require('../img/arrows.png')}
                    />
                </TouchableOpacity>
            </View>
        </View >
    );
}

export default MyPage
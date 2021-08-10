import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';

const styles = StyleSheet.create({
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

const RefreshButton = () => {
    return (
        <View style={styles.footer}>
            <TouchableOpacity>
                <Image
                    style={styles.RefreshImage}
                    source={require('../../img/refresh.png')} />
            </TouchableOpacity>
        </View>
    );
};

export default RefreshButton;
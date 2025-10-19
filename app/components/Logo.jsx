import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Logo = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Silent</Text>
            <Image source={require('../../assets/pngs/logo.png')} style={styles.img} />
            <Text style={styles.text}>Moon</Text>
        </View>
    )
}

export default React.memo(Logo);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: '#3F414E',
        fontFamily: 'HelveticaNeue-Bold',
        fontSize: 16,
        marginHorizontal: 6,
        letterSpacing: 16 * 0.16,
    },
    img: {
        height: 30,
        width: 30,
    }
})
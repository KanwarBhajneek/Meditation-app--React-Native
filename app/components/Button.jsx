
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import FbSVG from '../../assets/svgs/fb.svg';
import GoogleSVG from '../../assets/svgs/google.svg';

const Button = (props) => {
    const { text, onPress } = props;
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

const FbButton = (props) => {
    const { onPress } = props;
    return (
        <Pressable onPress={onPress} style={styles.pressable}>
            <View style={styles.fbBtn}>
                <View style={styles.icon}>
                    <FbSVG width={24} height={24} />
                </View>
                <Text style={styles.fbtext}>CONTINUE WITH FACEBOOK</Text>
            </View>
        </Pressable>
    )
}

const GoogleButton = (props) => {
    const { onPress } = props;
    return (
        <Pressable onPress={onPress} style={styles.pressable}>
            <View style={styles.googleBtn}>
                <View style={styles.icon}>
                    <GoogleSVG width={24} height={24} />
                </View>
                <Text style={styles.googletext}>CONTINUE WITH GOOGLE</Text>
            </View>
        </Pressable>
    )
}


export const PrimaryButton = React.memo(Button);
export const SocialButton = {
    fb: React.memo(FbButton),
    google: React.memo(GoogleButton)
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 63,
        borderRadius: 38,
        backgroundColor: '#8E97FD',
        width: '100%'
    },
    text: {
        fontSize: 14,
        color: 'white'
    },
    fbBtn: {
        flexDirection: 'row',
        width: '100%',
        height: 63,
        backgroundColor: '#7583CA',
        borderRadius: 38,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fbtext: {
        fontSize: 14,
        fontFamily: 'HelveticaNeue-Medium',
        color: '#F6F1FB',
        lineHeight: 14 * 1.08,
        letterSpacing: 14 * 0.05,
    },
    googleBtn: {
        flexDirection: 'row',
        width: '100%',
        height: 63,
        backgroundColor: 'white',
        borderRadius: 38,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#EBEAEC",
        borderWidth: 1,
    },
    googletext: {
        fontSize: 14,
        fontFamily: 'HelveticaNeue-Medium',
        color: '#3F414E',
        lineHeight: 14 * 1.08,
        letterSpacing: 14 * 0.05,
    },
    pressable: {
        width: '100%'
    },
    icon: {
        position: 'absolute',
        left: 30
    }
})
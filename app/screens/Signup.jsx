import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Back from '../../assets/svgs/back.svg';
import { PrimaryButton, SocialButton } from './../components/Button';
import { Inputs } from './../components/Inputs';

const Signup = () => {
    const navigation = useNavigation()
    const insets = useSafeAreaInsets();
    const [accepted, setAccepted] = useState(false);

    return (
        <View style={styles.parent}>
            <Image
                source={require('../../assets/pngs/auth_background.png')}
                style={styles.image}
                resizeMode='contain' />
            <View style={[styles.container, { marginTop: insets.top }]}>

                <Pressable onPress={() => navigation.goBack()} style={styles.back}>
                    <Back />
                </Pressable>
                <Text style={styles.header}>Create your account</Text>

                <View style={styles.socialSpacing}>
                    <SocialButton.fb />
                </View>
                <View style={styles.googleContainer}>
                    <SocialButton.google />
                </View>

                <Text style={styles.loginText}>OR SIGNUP WITH EMAIL</Text>

                <Inputs.name />
                <View style={styles.inputSpacing}>
                    <Inputs.email />
                </View>
                <View style={styles.inputSpacing}>
                    <Inputs.password />
                </View>

                <View style={styles.privacyRow}>
                    <Pressable onPress={() => setAccepted(!accepted)} style={styles.checkbox}>
                        {accepted ? <View style={styles.checked} /> : null}
                    </Pressable>
                    <Text style={styles.privacyText}>
                        I have read the <Text style={styles.privacyLink}>Privacy Policy</Text>
                    </Text>
                </View>

                <View style={styles.btnContainer}>
                    <PrimaryButton text="GET STARTED" onPress={() => { }} />
                </View>

            </View>
        </View>
    )
}

export default React.memo(Signup);

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        alignItems: 'center',
        marginHorizontal: 20,
    },
    header: {
        fontSize: 28,
        fontFamily: 'HelveticaNeue-Bold',
        fontWeight: 'bold',
        color: '#3F414E',
        lineHeight: 28 * 1.35,
        letterSpacing: 0,
        marginTop: 28,
        marginBottom: 18
    },
    loginText: {
        fontSize: 14,
        fontFamily: 'HelveticaNeue-Bold',
        color: '#A1A4B2',
        lineHeight: 14 * 1.08,
        letterSpacing: 0.05 * 14,
        marginVertical: 24
    },
    btnContainer: {
        width: '100%',
        marginTop: 30,
        marginBottom: 20
    },
    googleContainer: {
        width: '100%',
        marginTop: 20,
        marginBottom: 16
    },
    socialSpacing: {
        width: '100%',
        marginBottom: 12
    },
    image: {
        ...StyleSheet.absoluteFillObject
    },
    back: {
        marginTop: 5,
        alignSelf: 'flex-start',
        width: 55,
        height: 55,
        borderRadius: 28,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#EBEAEC'
    },
    inputSpacing: {
        width: '100%',
        marginTop: 20
    },
    privacyRow: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 18
    },
    checkbox: {
        width: 26,
        height: 26,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#C4C4C4',
        marginLeft: 10,
        marginRight: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    checked: {
        width: 16,
        height: 16,
        backgroundColor: '#8E97FD',
        borderRadius: 2
    },
    privacyText: {
        color: '#A1A4B2',
        fontSize: 14,
        flex: 1
    },
    privacyLink: {
        color: '#8E97FD'
    }
})

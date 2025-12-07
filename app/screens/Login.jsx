import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Back from '../../assets/svgs/back.svg';
import { PrimaryButton, SocialButton } from './../components/Button';
import { Inputs } from './../components/Inputs';

const Login = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
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

        <Text style={styles.header}>Welcome Back!</Text>

        <SocialButton.fb />
        <View style={styles.googleContainer}>
          <SocialButton.google />
        </View>
        <Text style={styles.loginText}>OR LOG IN WITH EMAIL</Text>
        <Inputs.email />
        <View style={styles.passContainer}>
          <Inputs.password />
        </View>
        <View style={styles.btnContainer}>
          <PrimaryButton
            text="LOG IN"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    fontFamily: 'HelveticaNeue-Bold',
    fontWeight: 'bold',
    color: '#3F414E',
    lineHeight: 28 * 1.35,
    letterSpacing: 0,
    marginTop: 28,
    marginBottom: 33
  },
  loginText: {
    fontSize: 14,
    fontFamily: 'HelveticaNeue-Bold',
    color: '#A1A4B2',
    lineHeight: 14 * 1.08,
    letterSpacing: 0.05 * 14,
    marginVertical: 40
  },
  btnContainer: {
    width: '100%',
    marginTop: 30,
    marginBottom: 20
  },
  googleContainer: {
    width: '100%',
    marginTop: 20,
    marginBottom: 40
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
  passContainer: {
    width: '100%',
    marginTop: 20,
    marginBottom: 30
  }
})
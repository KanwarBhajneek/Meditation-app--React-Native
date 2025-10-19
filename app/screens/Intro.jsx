/* eslint-disable react/display-name */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import BackgroundSVG from '../../assets/svgs/intro_background.svg';
import Curve from '../../assets/svgs/intro_curve.svg';
import { PrimaryButton } from './../components/Button';
import Logo from './../components/Logo';

export default function Intro() {
  const navigation = useNavigation();

  return (
    <View>
      <TopSection />
      <View style={[styles.container]}>
        <Text style={styles.title}>We are what we do</Text>
        <Text style={styles.subtitle}>Thousands of people are using silent moon for regular meditation</Text>
        <View style={styles.btnContainer}>
          <PrimaryButton
            text="SIGN UP"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
        <Text style={styles.btnSubText}>
          ALREADY HAVE AN ACCOUNT?{' '}
          <Text
            style={styles.btnSubTextPrimary}
            onPress={() => navigation.navigate('Login')}
          >
            LOG IN
          </Text>
        </Text>
      </View>
    </View>
  )
}

const TopSection = React.memo(() => {
  return (<View>
    <BackgroundSVG />
    <Curve style={{ marginTop: -70 }} />
    <View style={styles.imgContainer} >
      <Logo />
      <Image
        source={require('../../assets/pngs/intro_image.png')}
        style={styles.image}
        resizeMode='contain' />
    </View>
  </View>);
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    marginHorizontal: 40,
    marginTop: 90,
    ...StyleSheet.absoluteFillObject
  },
  imgContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    top: 70
  },
  title: {
    fontSize: 30,
    fontFamily: 'HelveticaNeue-Bold',
    fontWeight: 'bold',
    color: '#3F414E',
    lineHeight: 30 * 1.35,
    letterSpacing: 0,
    marginTop: 30,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'HelveticaNeue-Light',
    color: '#A1A4B2',
    lineHeight: 16 * 1.65,
    letterSpacing: 0,
    marginHorizontal: 50,
    textAlign: 'center',
    marginTop: 15
  },
  btnContainer: {
    width: '90%',
    marginHorizontal: 40,
    marginTop: 60,
  },
  btnSubText: {
    marginTop: 20,
    fontSize: 12,
    fontFamily: 'HelveticaNeue-Medium',
    color: '#A1A4B2',
    lineHeight: 1.08 * 14,
    letterSpacing: 0.05 * 14
  },
  btnSubTextPrimary: {
    color: '#8E97FD'
  }
})
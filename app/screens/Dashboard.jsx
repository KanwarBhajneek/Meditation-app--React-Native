import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import HomeIcon from '../../assets/svgs/home.svg';
import MeditateIcon from '../../assets/svgs/meditate.svg';
import MusicIcon from '../../assets/svgs/music.svg';
import ProfileIcon from '../../assets/svgs/profile.svg';
import SleepIcon from '../../assets/svgs/sleep.svg';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();

export default function Dashboard() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 112,
                    paddingTop: 10,
                    paddingBottom: 36,
                },
                tabBarItemStyle: {
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                tabBarLabelStyle: {
                    marginTop: 17,
                    fontSize: 14,
                    fontFamily: 'HelveticaNeue',
                    fontWeight: '500',
                },
                tabBarInactiveTintColor: '#A0A3B1',
                tabBarActiveTintColor: '#8e97fd',

            }}
        >
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <View style={focused ? styles.iconContainerActive : styles.iconContainer}>
                            <HomeIcon width={22} height={22} color={focused ? '#FFF' : color} />
                        </View>)
                }} />
            <Tab.Screen name="Sleep" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <View style={focused ? styles.iconContainerActive : styles.iconContainer}>
                            <SleepIcon width={22} height={22} color={focused ? '#FFF' : color} />
                        </View>)
                }} />
            <Tab.Screen name="Meditate" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <View style={focused ? styles.iconContainerActive : styles.iconContainer}>
                            <MeditateIcon width={22} height={22} color={focused ? '#FFF' : color} />
                        </View>)
                }} />
            <Tab.Screen name="Music" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <View style={focused ? styles.iconContainerActive : styles.iconContainer}>
                            <MusicIcon width={22} height={22} color={focused ? '#FFF' : color} />
                        </View>)
                }} />
            <Tab.Screen name="Profile" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <View style={focused ? styles.iconContainerActive : styles.iconContainer}>
                            <ProfileIcon width={22} height={22} color={focused ? '#FFF' : color} />
                        </View>)
                }} />
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainerActive: {
        width: 46,
        height: 46,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8e97fd',
    }
})
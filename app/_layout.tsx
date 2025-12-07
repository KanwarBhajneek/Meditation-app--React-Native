import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import 'react-native-reanimated';
import Intro from './screens/Intro';
import Login from './screens/Login';
import Signup from './screens/Signup';

const Stack = createStackNavigator();

export default function RootLayout() {
  const [loaded] = useFonts({
    'HelveticaNeue-Light': require('../assets/fonts/HelveticaNeue-Light.otf'),
    'HelveticaNeue-Bold': require('../assets/fonts/HelveticaNeue-Bold.otf'),
    'HelveticaNeue-Medium': require('../assets/fonts/HelveticaNeue-Medium.otf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }
  return (
    <Stack.Navigator initialRouteName="Intro" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

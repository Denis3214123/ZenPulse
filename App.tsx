import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MeditationsScreen from './src/screens/MeditationsScreen';
import PaywallScreen from './src/screens/PaywallScreen';

type RootStackParamList = {
  Paywall: undefined;
  Meditations: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Paywall">
        <Stack.Screen name="Paywall" component={PaywallScreen} />
        <Stack.Screen name="Meditations" component={MeditationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

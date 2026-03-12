import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
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
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Paywall">
          <Stack.Screen
            name="Paywall"
            component={PaywallScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Meditations" component={MeditationsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

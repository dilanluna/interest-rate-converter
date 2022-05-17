import Rates from '@screens/rates';
import Calculate from '@screens/calculate';
import { StatusBar } from 'expo-status-bar';
import { StackParamList } from 'types/navigation';
import { NavigationContainer } from '@react-navigation/native';
import InterestRatePrivider from '@features/rates/rates-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <InterestRatePrivider>
        <NavigationContainer>
          <StatusBar style="auto" />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Rates"
              component={Rates}
            />

            <Stack.Screen
              name="Calculate"
              component={Calculate}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </InterestRatePrivider>
    </SafeAreaProvider>
  );
}

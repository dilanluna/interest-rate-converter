import Rates from '@screens/rates';
import { AppTheme } from '@consts';
import Calculate from '@screens/calculate';
import { StatusBar } from 'expo-status-bar';
import { StackParamList } from 'types/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={AppTheme}>
        <StatusBar
          translucent
          style="auto"
        />
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
    </SafeAreaProvider>
  );
}

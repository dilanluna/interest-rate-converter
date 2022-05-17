import { StackParamList } from 'types/navigation';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Rates from './rates';

function renderRatesScreen() {
  const Stack = createNativeStackNavigator<StackParamList>();
  return render(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Rates"
          component={Rates}
        />
      </Stack.Navigator>
    </NavigationContainer>,
  );
}

describe('Rates screen', () => {
  it('should display a list of rates', () => {
    const { getByA11yRole } = renderRatesScreen();

    const rates = getByA11yRole('list');
    expect(rates).toBeTruthy();
  });
});

import { render } from '@testing-library/react-native';
import { Rate, StackParamList } from 'types/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RateCard from './rate-card';

const rate: Rate = {
  id: 'test',
  title: 'Test',
  description: 'This is a test',
};

function renderRatesScreen() {
  const Stack = createNativeStackNavigator<StackParamList>();
  return render(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Rates"
          component={() => (
            <RateCard
              id={rate.id}
              title={rate.title}
              description={rate.description}
            />
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>,
  );
}

describe('Rate Card', () => {
  it('should display a title, a description and a button', () => {
    const { getByText, getByA11yRole } = renderRatesScreen();

    const title = getByText(rate.title);
    expect(title).toBeTruthy();

    const description = getByText(rate.description);
    expect(description).toBeTruthy();

    const button = getByA11yRole('button');
    expect(button).toBeTruthy();
  });
});

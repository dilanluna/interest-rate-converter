import { Rate } from 'types/navigation';
import { FlatList, View } from 'react-native';
import RateCard from '@features/rates/rate-card';
import { useRates } from '@features/rates/rates-context';
import { SafeAreaView } from 'react-native-safe-area-context';
import RatesHeaderTitle from '@features/rates/rates-header-title';

function rateCardRenderItem({ item }: { item: Rate }) {
  return (
    <RateCard
      id={item.id}
      title={item.title}
      description={item.description}
    />
  );
}

export default function Rates() {
  const rates = useRates();

  return (
    <SafeAreaView>
      <FlatList
        data={rates}
        accessible={true}
        accessibilityRole="list"
        renderItem={rateCardRenderItem}
        contentContainerStyle={{ padding: 24 }}
        ListHeaderComponent={<RatesHeaderTitle />}
        ItemSeparatorComponent={() => <View style={{ paddingTop: 32 }} />}
      />
    </SafeAreaView>
  );
}

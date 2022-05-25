import Select from '@components/select';
import { Frequency, periods } from '@consts';

export default function PeriodicitySelect({
  value,
  onChange,
}: {
  value?: Frequency;
  onChange: (value: Frequency) => void;
}) {
  const handleChange = (item: Frequency) => {
    onChange(item);
  };

  return (
    <Select
      value={value}
      items={periods}
      onChange={handleChange}
      placeholder="Selecciona"
      keyExtractor={(item) => item.value}
    />
  );
}

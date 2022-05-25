import { periods } from '@consts';
import Select from '@components/select';

export default function PeriodicitySelect({
  value,
  onChange,
}: {
  value?: string;
  onChange: (value: string) => void;
}) {
  const handleChange = (item: string | number) => {
    onChange(item.toString());
  };

  return (
    <Select
      value={value}
      items={periods}
      onChange={handleChange}
      placeholder="Selecciona"
    />
  );
}

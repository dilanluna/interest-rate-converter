import Select from '@components/select';

const periods = [
  { label: 'Anual', value: 'yearly' },
  { label: 'Semestral', value: 'semiannual' },
  { label: 'Cuatrimestral', value: 'quarterly' },
  { label: 'Trimestral', value: 'quarterly' },
  { label: 'Bimestral', value: 'bimonthly' },
  { label: 'Mensual', value: 'monthly' },
];

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

import './Select.scss'

export type OptionValue = {label: string, value: string};

interface Props {
  id: string;
  placeholder: string;
  options: OptionValue[];
  onSelect: (value: string) => void;
  label: string;
  value: string;
}

export default function Select(props: Props) {
  const {
    id,
    options,
    placeholder,
    onSelect,
    value,
    label
  } = props;

  const handleChange = (event: { target: { value: string; }; }) => {
    if(onSelect){
      onSelect(event.target.value);
    }
  };

  return (
    <div className='select__container'>
      {label && <label className='select__label' htmlFor={id}>{label}</label>}
      <select
        className="select"
        id={id}
        value={value}
        onChange={handleChange}
        style={{ padding: '10px', margin: '10px 0' }}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

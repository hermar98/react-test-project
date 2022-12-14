type InputFieldProps = {
  value: string;
  onChange: (value: string) => void;
};

const InputField = ({ value, onChange }: InputFieldProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    onChange(event.currentTarget.value);

  return <input value={value} onChange={handleChange} type="text" />;
};

export default InputField;

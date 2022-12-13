import { useState } from "react";

const InputField = () => {
  const [value, setValue] = useState("Hello world");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.currentTarget.value);

  return (
    <>
      <input value={value} onChange={handleChange} type="text" />
    </>
  );
};

export default InputField;

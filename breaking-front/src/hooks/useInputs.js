import { useState } from 'react';

const useInputs = (initialForm) => {
  const [form, setForm] = useState(initialForm);
  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((form) => ({ ...form, [name]: value }));
  };
  return [form, onChange, setForm];
};

export default useInputs;

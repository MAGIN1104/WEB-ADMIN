import { useState } from "react";

export const useFormLogin = (initialForm = {}) => {
  const [formState, setformState] = useState(initialForm);
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setformState({
      ...formState,
      [name]: value,
    });
  };
  return {
    ...formState,
    formState,
    onInputChange
  };
};

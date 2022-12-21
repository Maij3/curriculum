import { useState, useEffect, useMemo } from "react";

//UseForm

export const useForm = (initialForm = {}, formValidations = {}) => {
  //UseState

  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  //UseEffect

  useEffect(() => {
    createValidators();
  }, [formState]);

  //isFormValid

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false;
    }
    return true;
  }, [formValidation]);

  //OnInputchange

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //OnResetForm

  const onResetForm = () => {
    setFormState(initialForm);
  };

  //Create Validators

  const createValidators = () => {
    const formCheckedValues = {};
    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];
      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }

    setFormValidation(formCheckedValues);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    ...formValidation,
    isFormValid,
  };
};

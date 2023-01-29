import React, { createContext, useContext, useState} from "react";

const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
  const initialForm = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    birthdate: Date,
    weight: Number,
    location: "",
    phone: "",
    opened: false
  }

  const [form, setForm] = useState(initialForm)

  function openForm(){
    setForm((form) => ({ ...form, opened: true }))
  }

  function closeForm(){
    setForm((form) => ({ ...form, opened: false }))
  }

  function setEmail(e) {
    e.preventDefault()
    openForm();
  }

  function handleChange(e){
    const name = e.target.name;
    const value = e.target.value;

    setForm((form) => ({ ...form, [name]: value }))
    console.log(form[name])
  }

  return (
    <FormContext.Provider value={
      { handleChange, setEmail, form, openForm, closeForm }
    }>
      { children }
    </FormContext.Provider>
  )
}

export const useFormContext = () => useContext(FormContext);
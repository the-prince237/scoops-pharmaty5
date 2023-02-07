import React, { createContext, useContext, useState} from "react";


// creating and exporting context for form handling
const FormContext = createContext();

const FormContextProvider = ({ children }) => {
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


// creating and exporting context for language handling
const LanguageContext = createContext();

const LanguageContextProvicer = ({ children }) => {
  
  const [language, setLanguage] = useState("en")

  function switchLanguage() {
    language === "en" ? setLanguage("fr") : setLanguage("en");
  }

  return (
    <LanguageContext.Provider value={
      { language, switchLanguage }
    }>
      { children }
    </LanguageContext.Provider>
  )
}

export const useLanguageContext = () => useContext(LanguageContext)
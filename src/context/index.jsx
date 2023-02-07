import React, { createContext, useContext, useState} from "react";
import { useEffect } from "react";


// creating and exporting context for form handling
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


// creating and exporting context for language handling
const LanguageContext = createContext();

export const LanguageContextProvicer = ({ children }) => {
  
  const [language, setLanguage] = useState(localStorage.getItem("sp-language") || "en")

  function switchLanguage() {
    language === "en" ? setLanguage("fr") : setLanguage("en");
  }

  useEffect(() => {
    localStorage.setItem("sp-language", language)
  }, [language])

  return (
    <LanguageContext.Provider value={
      { language, switchLanguage }
    }>
      { children }
    </LanguageContext.Provider>
  )
}

export const useLanguageContext = () => useContext(LanguageContext)
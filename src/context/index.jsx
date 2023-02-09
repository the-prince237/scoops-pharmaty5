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

  function translator(fv, ev){
    if(language === "fr"){
      return fv
    } else {
      return ev
    }
  }

  const [cw, setCw] = useState(
    {
      hero: {
        title: translator("Naturothérapie Vision Holistique", "naturopathy holistic vision"),
        description: translator("Nous oeuvrons tous les jours pour une Afrique et un Monde meilleur.", "We work everyday for a better Africa and a better future.")
      },
      mission: {
        title: translator("Ouvrir les yeux du monde sur ce qui est à la porté de tous", "Open the world's eyes on what is available for everyone"),
        description: translator("Le sol regorge de tous les traitements dont nous avons besoin. Nous engageons à les vulgariser et à mettre terme à beaucoup de souffrances inutiles.", "The earth gets everything treatments we need to heal. We are commited to make them known, and to stop a lot of sufferings")
      },
      specialities: {
        title: translator("Nos Spécialités", "Our Specialities"),
        description: translator("Il est une solution pour tout, même pour les situations les plus difficiles à surpasser !", "There is a solution to everything, even for the most difficult to overcome situations !"),
        subDescription: translator("Nous savons quelle est la voix à suivre !", "We know the way to follow !")
      },
      products: {
        title: translator("Nos Produits Fars", "Our Main Products"),
        description: translator("Nos prodruits rassemblent les meilleurs ressources que vous trouverez. Vous les connaissez bien, vous pouver leur faire confiance !", "Our products a made of the best ressources you will ever find. You know them well, you can put your trust on them !"),
      }
    }
  )

  function changeCw() {
    return setCw(
      {
        hero: {
          title: translator("Naturopathie Vision Holistique", "Holistic vision naturopathy"),
          description: translator("Nous oeuvrons tous les jours pour une Afrique et un Monde meilleur.", "We work everyday for a better Africa and a better future.")
        },
        mission: {
          title: translator("Ouvrir les yeux du monde sur ce qui est à la porté de tous", "Open the world's eyes on what is available for everyone"),
          description: translator("Le sol regorge de tous les traitements dont nous avons besoin. Nous engageons à les vulgariser et à mettre terme à beaucoup de souffrances inutiles.", "The earth gets everything treatments we need to heal. We are commited to make them known, and to stop a lot of sufferings")
        },
        specialities: {
          title: translator("Nos Spécialités", "Our Specialities"),
          description: translator("Il est une solution pour tout, même pour les situations les plus difficiles à surpasser !", "There is a solution to everything, even for the most difficult to overcome situations !"),
          subDescription: translator("Nous savons quelle est la voix à suivre !", "We know the way to follow !")
        },
        products: {
          title: translator("Nos Produits Fars", "Our Main Products"),
          description: translator("Nos prodruits rassemblent les meilleurs ressources que vous trouverez. Vous les connaissez bien, vous pouver leur faire confiance !", "Our products a made of the best ressources you will ever find. You know them well, you can put your trust on them !"),
        }
      })
  }
  
  function switchLanguage() {
    language === "en" ? setLanguage("fr") : setLanguage("en");
  }

  useEffect(() => {
    localStorage.setItem("sp-language", language)
    changeCw()
  }, [language])


  return (
    <LanguageContext.Provider value={
      { language, switchLanguage, cw }
    }>
      { children }
    </LanguageContext.Provider>
  )
}

export const useLanguageContext = () => useContext(LanguageContext)
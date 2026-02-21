import { createContext, useContext, useState } from "react";

const defaultContent = {
  heroTitle: "Compare Smarter Shop Better",
  subtitle:
    "Compare products from Amazon, Flipkart, and Meesho in one click with our smart AI-powered tool.",
  home: "Home",
  contacts: "Contacts",
  reels: "Reels",
};

const TranslationContext = createContext<any>(null);

export const TranslationProvider = ({ children }: any) => {
  const [content, setContent] = useState(defaultContent);

  return (
    <TranslationContext.Provider value={{ content, setContent, defaultContent }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
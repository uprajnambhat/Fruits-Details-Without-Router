import { createContext, useState } from "react";
import { fruitsDetails } from "./json-fruit-details";

export const FruitContext = createContext();

export const FruitProvider = ({ children }) => {
  const [selectedFruit, setSelectedFruit] = useState(fruitsDetails);
  const [catDetails, setCatDetails] = useState([]);
  const [selectedCategory, setSelectedCategoryDetails] = useState({});

  return (
    <FruitContext.Provider
      value={{
        selectedFruit,
        setSelectedFruit,
        selectedCategory,
        setSelectedCategoryDetails,
        catDetails,
        setCatDetails,
      }}
    >
      {children}
    </FruitContext.Provider>
  );
};

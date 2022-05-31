import React, { useCallback, useContext, useEffect, useState } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchText}`);
      const data = await response.json();
      const { drinks } = data;

      if (drinks) {
        const newDrinks = drinks.map(
          ({ idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass }) => {
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            };
          }
        );

        setCocktails(newDrinks);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [searchText]);

  useEffect(() => {
    fetchDrinks();
  }, [searchText, fetchDrinks]);

  return (
    <AppContext.Provider value={{ loading, setSearchText, cocktails }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

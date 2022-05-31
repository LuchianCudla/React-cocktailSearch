import Loading from "./Loading";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [singleCocktail, setSingleCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };

          setSingleCocktail(newCocktail);
        } else {
          setSingleCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!singleCocktail) {
    return <h2>No cocktail to display!</h2>;
  }
  const { name, image, info, category, glass, instructions, ingredients } =
    singleCocktail;

  return (
    <section className="section">
      <Link to="/React-cocktailSearch" className="btn">
        back home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="info">
          <p>
            <span className="name">name: </span>
            {name}
          </p>
          <p>
            <span className="name">category: </span>
            {category}
          </p>
          <p>
            <span className="name">info: </span>
            {info}
          </p>
          <p>
            <span className="name">glass: </span>
            {glass}
          </p>
          <p>
            <span className="name">instructions: </span>
            {instructions}
          </p>
          <p>
            <span className="data">
              ingredients:
              {ingredients.map((item, index) => {
                return item ? <span key={index}>{` ${item} `}</span> : null;
              })}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;

import { useRef } from "react";
import { useGlobalContext } from "../context/context";

const SearchBar = () => {
  const searchValue = useRef("");
  const { setSearchText } = useGlobalContext();

  const searchCocktail = () => {
    setSearchText(searchValue.current.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section-form">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-control">
          <label htmlFor="name">Search your cocktail:</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchBar;

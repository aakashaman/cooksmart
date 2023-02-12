import { useEffect, useState, useRef } from "react";
import RecipeCard from "./RecipeCard";
import styles from "../Recipe.module.css";

export default function Recipe() {
  const [typeMain, setTypeMain] = useState(true);
  const [type2, setType2] = useState(false);
  const inputRef = useRef(null);
  function onSearch() {
    setType2(true);
    setTypeMain(false);
    let searchItem = inputRef.current.value;
    getSearched(searchItem);
  }
  const [popular, setPopular] = useState([]);
  const [searched, setSearched] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=279925372bab43d28538c44a31f0a3e5&number=50`
    );
    const data = await api.json();
    setPopular(data.recipes);
    console.log(data);
  };

  const getSearched = async (searchItem) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=279925372bab43d28538c44a31f0a3e5&query=${searchItem}&number=50`
    );
    const data = await api.json();
    setSearched(data.results);
    console.log(data.results);
    console.log("searched clicked");
  };

  return (
    <div>
      <label htmlFor="">Find the recipes</label>
      <input type="text" ref={inputRef} />
      <button onClick={onSearch}>Search</button>
      <div className={styles.cardDiv}>
        {type2 &&
          searched.map((recipe) => {
            return (
              <RecipeCard
                title={recipe.title}
                id={recipe.id}
                image={recipe.image}
              ></RecipeCard>
            );
          })}
        {typeMain &&
          popular.map((recipe) => {
            return (
              <RecipeCard
                title={recipe.title}
                id={recipe.id}
                image={recipe.image}
              ></RecipeCard>
            );
          })}
      </div>
    </div>
  );
}

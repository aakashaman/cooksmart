import styles from "../RecipeCard.module.css";

function RecipeCard(props) {
  const id = props.id;

  async function findUrl() {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=279925372bab43d28538c44a31f0a3e5&includeNutrition=false`
    );
    const data = await api.json();
    let url = data.sourceUrl;
    console.log("this url found");
    console.log(data);
    window.open(url, "_blank");
  }

  return (
    <button target="_blank" rel="noopener noreferrer" onClick={findUrl}>
      <div className={styles.card}>
        <img src={props.image} alt="" />
        <h1>{props.title}</h1>
      </div>
    </button>
  );
}

export default RecipeCard;

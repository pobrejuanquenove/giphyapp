import { useState } from "react";
import { AddCategory, GiphyGrid } from "./components";

const GiphyApp = () => {
  const [categories, setCategories] = useState([]);
  const onAddCategoryHandler = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1>Giphy App</h1>
      <AddCategory onAddCategory={(value) => onAddCategoryHandler(value)} />
      {categories.map((category) => (
        <GiphyGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GiphyApp;

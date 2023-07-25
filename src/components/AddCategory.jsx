import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setinputValue] = useState("Hola Mundo");
  const onChange = ({ target }) => {
    setinputValue(target.value);
  };
  const onSubmit = (event ) => {
    event.preventDefault();
    const inputTrim = inputValue.trim()
    if(inputTrim.length <=1) return
    onAddCategory(inputTrim)
    setinputValue('')
  }
  return(
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar gifs"
        onChange={onChange}
        value={inputValue}
      />
    </form>
  );
};
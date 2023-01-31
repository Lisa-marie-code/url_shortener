import React, {useState} from "react";
import "../Link/link.css";

 export function Link(){

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  };

  return (
    <form  onSubmit={handleSubmit}>
      <input className="form-space"
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button type="submit">Shorten it!</button>
    </form>
  );
 
}

export default Link
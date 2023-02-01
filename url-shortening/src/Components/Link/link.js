import React, { useState } from "react";
import "../Link/link.css";

export function Link() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  };

  return (
    <div className="form-background">
      <form onSubmit={handleSubmit}>
        <input
          className="form-space"
          placeholder="Shorten a link here... "
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">Shorten it!</button>
      </form>
    </div>
  );
}

export default Link;

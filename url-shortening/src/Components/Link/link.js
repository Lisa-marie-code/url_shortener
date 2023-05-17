import React, { useState,useEffect } from "react";
import "../Link/link.css";
import ShortenBackground from "../Shorten/shortenbg";





export function Link() {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([])
  const [copyText, setCopyText] = useState("Copy");
  const [error, setError] = useState("");

 
  useEffect(() => {
    init();
  }, []);

 async function init(){
    const savedResults = localStorage.getItem("shortenedLinks");
    if (savedResults) {
      const data  = await JSON.parse(savedResults);
      setResults(data);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue === "") {
      setError("Please add a link");
    } else if (!inputValue.endsWith(".com") && !inputValue.endsWith(".org")) {
      setError("Invalid URL. Please provide a valid suffix (.com, .org, etc.)");
    } else {
      const shortenLink = async () => {
        const res = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${inputValue}`
        );
        const data = await res.json();
        setResults(results.concat(data.result));
        localStorage.setItem("shortenedLinks", JSON.stringify(results.concat(data.result)));
      };
      shortenLink();
      setError(null);
    }
    setInputValue("");
  };


  const handleCopy = (index) => {
    navigator.clipboard.writeText(results[index].full_short_link);
    setCopyText("Copied");
  };
  

  return (
    <div>
      <form className="form-background " onSubmit={handleSubmit}>
        <input
          className={`form-space ${error ? "has-error" : ""}`}
          placeholder="Shorten a link here... "
          type="text"
          id="form-shorten"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button onClick={handleSubmit} type="submit">
          Shorten it!
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <ShortenBackground
        results={results}
        handleCopy={handleCopy}
        copyText={copyText}
      />
    </div>
  );
}

export default Link;
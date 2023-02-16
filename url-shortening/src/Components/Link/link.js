import React, { useEffect, useState } from "react";
import "../Link/link.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

export function Link() {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);
  const [copyText, setCopyText] = useState("Copy");

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
    console.log(inputValue);

    const shortenLink = async () => {
      const res = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      const data = await res.json();
      console.log(data.result);
      setResults(results.concat(data.result));
    };
    shortenLink();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(results.full_short_link);
    setCopyText("Copied!");
  };

  return (
    <div>
      <form
        className="form-background"
        style={{ marginTop: 50 }}
        onSubmit={handleSubmit}
      >
        <input
          className="form-space"
          placeholder="Shorten a link here... "
          type="text"
          id="form-shorten"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button onClick={handleSubmit} type="submit">
          Shorten it!
        </button>
      </form>
      {results.length &&
        results.map((res, index) => (
          <div key={index}>
            <section>
              <p>{res.original_link}</p>{" "}
              <p className="short_link">{res.full_short_link}</p>
              <button className="copy_button" onClick={handleCopy}>
                {copyText}
              </button>
            </section>
          </div>
        ))}
    </div>
  );
}

export default Link;

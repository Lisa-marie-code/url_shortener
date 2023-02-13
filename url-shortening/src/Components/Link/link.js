import React, { useState } from "react";
import "../Link/link.css";

function Result({result}){
  return(
    <ul className="result_div">
      {result.map((value, index)=>(
         <li key={index}>{value}</li>
      ))}
    </ul>
  )
}



export function Link({ onResult}) {
  const [inputValue, setInputValue] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    onResult(inputValue)
    setInputValue('');
    console.log(inputValue);
  };




  return (
    <div className="form-background">
      <form onSubmit={handleSubmit}>
        <input
          className="form-space"
          placeholder="Shorten a link here... "
          type="text"
          id="form-shorten"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit" id="shorten-button">Shorten it!</button>
      </form>
    </div>
  );


}
export const Apple = () => {
  const [results, setResults] = useState([]);

  const handleResult = (result) => {
    setResults([...results,result]);
  };

  return (
<>
      <Link onResult={handleResult} />
      <Result result={results} />
    </>
  )

  }


export default Apple;

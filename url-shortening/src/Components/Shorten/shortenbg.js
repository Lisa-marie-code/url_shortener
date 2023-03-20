import React from "react";


export const ShortenBackground = ({ results, handleCopy, copyText }) =>{
    return(
        <div className="shorten-background">
        {results &&
          results.map((res, index) => (
            <div key={index} className="results-display">
              <section>
                <p>{res.original_link}</p>{" "}
                <hr></hr>
                <p className="short_link">{res.full_short_link}</p>
                <button
                  className="copy_button"
                  onClick={() => handleCopy(index)}
                >
                  {copyText}
                </button>
              </section>
            </div>
          ))}
      </div>
    )
}
export default ShortenBackground;
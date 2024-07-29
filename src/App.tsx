import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "bruh D:",
  "Are you sure?",
  "But I'm your Val duo",
  "I'm bout to cry :(",
  "These are my tears :'(",
  "Heart Broken </3",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  // Function to generate an array of sad cat GIF images
  const sadCatGifs = new Array(noCount).fill(
    "https://media1.tenor.com/m/t7_iTN0iYekAAAAd/sad-sad-cat.gif",
  ); // Replace this URL with your sad cat GIF URL

  return (
    <div className="valentine-container">
      {!yesPressed && noCount > 0 && (
        <div className="sad-cat-counter">
          Sad Cat Counter:{" "}
          {sadCatGifs.map((gif, index) => (
            <img key={index} src={gif} alt="Sad Cat" className="sad-cat-gif" />
          ))}
        </div>
      )}
      {yesPressed ? (
        <>
          <img
            alt="cat kisses"
            src="https://media1.tenor.com/m/ZXBks2QSfdgAAAAd/cats-kittens.gif"
          />
          <div className="text">:D LOVE YOU SHAWTY!!</div>
        </>
      ) : (
        <>
          <img
            alt="bear hearts"
            src="https://media.tenor.com/u8FqYvg4dxIAAAAi/transparent-milk-and-mocha.gif"
            className="bear-hearts-image"
          />
          <div>Will you be my Valentine?</div>
          <div>
            <button
              className="YesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => {
                setYesPressed(true);
              }}
            >
              YES
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

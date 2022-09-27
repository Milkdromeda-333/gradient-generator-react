import { useState } from "react";

/*
TODO:
-[]add option of additional colors
-[]add ability to view saved gradients
*/
function App() {
  // current gradient in the gradient viewer
  const [gradient, setGradient] = useState("linear-gradient(to bottom right, #ff0000, #ffff00)");

  // saves inputs before they are submitted as theyre being put in
  const [inputsObj, setInputsObj] = useState({
    color1: "#ff0000",
    color2: "#ffff00",
    direction: "to bottom right"
  });

  // the generated css to be displayed
  const [generatedCSS, setGeneratedCSS] = useState(`background: linear-gradient(to bottom right, #ff0000, #ffff00); 
-moz-background: linear-gradient(to bottom right, #ff0000, #ffff00); 
-webkit: linear-gradient(to bottom right, #ff0000, #ffff00)
  `);

  // takes the input an sets gradient to returned input, and sets the generated css in the textarea
  function handleSubmit(e) {
    setGradient(`linear-gradient(${inputsObj.direction}, ${inputsObj.color1}, ${inputsObj.color2})`);
    setGeneratedCSS(`background: linear-gradient(${inputsObj.direction}, ${inputsObj.color1}, ${inputsObj.color2}); 
-moz-background: linear-gradient(${inputsObj.direction}, ${inputsObj.color1}, ${inputsObj.color2}); 
-webkit: linear-gradient(${inputsObj.direction}, ${inputsObj.color1}, ${inputsObj.color2})`);
  }

  // updates inputs in form as it is put in
  function handleChange(e) {
    const { name, value } = e.target;
    setInputsObj(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const copyBtn = document.getElementById("copy-btn");

  function copyCSS() {
    const textField = document.getElementsByTagName("textarea")[0];
    textField.select();
    // for mobile
    textField.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textField.value);
  }

  return (
    <div>
      <header>
        <h1>CSS Gradient Generator</h1>
      </header>
      <main>
        <section className="gradient">
          <div className="gradient--viewer" style={{ background: gradient }}></div>
          <textarea readOnly value={generatedCSS} />
        </section>

        <form onSubmit={e => e.preventDefault()}>
          <label htmlFor="color1">
            Color 1:
            <input type="color" name="color1" id="color1" onChange={handleChange} />
          </label>

          <label htmlFor="color2">
            Color 2:
            <input type="color" name="color2" id="color2" onChange={handleChange} />
          </label>

          <select name="direction" onChange={handleChange}>
            <option value="top to bottom">Top to bottom</option>
            <option value="to right">Left to right</option>
            <option value="to bottom right">Top left to bottom right</option>
          </select>

          <button onClick={handleSubmit}>submit</button>
          <button id="copy-btn" className="copy-btn" onClick={copyCSS}>Copy CSS</button>
        </form>
      </main>
    </div >
  );
}

export default App;;

import { useState } from "react";

/*
Project: build a gradient generator that outputs generated css gradient for multiple browswers. form takes in colors, and angle, and direction.
IDEA: 
TODO:
-[]add option of additional colors
-[]add ability to view saved gradients

*/
function App() {
  const [gradient, setGradient] = useState("linear-gradient(to bottom right, #ff0000, #ffff00)");

  const [inputsObj, setInputsObj] = useState({
    color1: "#ff0000",
    color2: "#ffff00",
    direction: "to bottom right"
  });

  // takes the input an sets gradient to returned input
  function handleSubmit(e) {
    e.preventDefault();
    setGradient(`linear-gradient(${inputsObj.direction}, ${inputsObj.color1}, ${inputsObj.color2})`);
  }

  // updates inputs in form
  function handleChange(e) {
    const { name, value } = e.target;
    setInputsObj(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <div>
      <header>
        <h1>CSS Gradient Generator</h1>
      </header>
      <main>
        <section className="gradient">
          <div className="gradient--viewer" style={{ background: gradient }}></div>
          <textarea readOnly value={gradient} />
        </section>

        <form onSubmit={handleSubmit}>
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

          <button>submit</button>
        </form>
      </main>
    </div >
  );
}

export default App;;

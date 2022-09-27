import { useState } from "react";

/*
Project: build a gradient generator that outputs generated css gradient for multiple browswers. form takes in colors, and angle, and direction.
IDEA: 

-  gradient will load with a preset gradient.
- inputs: 
  - colors (optional to add more)
  - direction

  once the user submits the inputs , the textarea presents the css.

*/
function App() {
  const [gradient, setGradient] = useState("linear-gradient(to bottom right, red, yellow)");

  return (
    <div>
      <header>
        <h1>CSS Gradient Generator</h1>
      </header>
      <main>
        <section className="gradient">
          <div className="gradient--viewer" style={{ backgroundImage: gradient }}></div>
          <textarea readOnly></textarea>
        </section>

        <form>
          <label htmlFor="color1">
            Color 1:
            <input type="color" name="color1" id="color1" />
          </label>

          <label htmlFor="color2">
            Color 2:
            <input type="color" name="color2" id="color2" />
          </label>

          <select>
            <option value="top-to-bottom">Top to bottom</option>
            <option value="left-to-right">Left to right</option>
            <option value="top-left-to-bottom-right">Top left to bottom right</option>
          </select>

          <button>submit</button>
        </form>
      </main>
    </div>
  );
}

export default App;

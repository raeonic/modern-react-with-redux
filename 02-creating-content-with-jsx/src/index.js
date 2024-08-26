// 1. Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 2. Cet a reference to the div with ID root
// "<h1>Hello React World!</h1>"
const rootElement = document.getElementById("root");

// 3. Tell React to take control of that element
const root = ReactDOM.createRoot(rootElement);

// 4. Create a simple component
function BasicApp() {
  const message = "Hi There!";
  const inputType = "number";
  const minValue = 5;
  return (
    <>
      <div>
        <h1>{message} This is the updated root element.</h1>
        <input
          style={{ border: "3px solid black" }}
          type={inputType}
          min={minValue}
        />
      </div>
      <div>
        <textarea autoFocus={true} />
      </div>
      <div>
        <input style={{ border: "1px solid blue" }} />
      </div>
    </>
  );
}

// 5. Show the component on the screen
root.render(<App />);

// 6. Cheatsheet: https://jsx-notes.vercel.app/

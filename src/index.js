import React from "react";
import ReactDOM from "react-dom/client";
// import StarsRating from "./StarsRating";
// import { useState } from "react";
import App from "./App.js";
import "./index.css";

// function Test() {
//   const [moviesRating, setMovieRating] = useState(0);

//   return (
//     <>
//       <div>
//         <StarsRating color="blue" onSetRating={setMovieRating} />
//       </div>
//       <p>This movie has {moviesRating} stars</p>
//     </>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    {/* <StarsRating maxRating={10} size={36} />
    <StarsRating
      color="red"
      size={24}
      defaultRating={3}
      messages={["bad", "not bad", "ok", "good", "awsome"]}
    />
    <Test /> */}
  </React.StrictMode>
);

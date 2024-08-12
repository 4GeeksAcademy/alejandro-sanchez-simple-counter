//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/secondscounter.jsx";

//render your react application
const app = ReactDOM.createRoot(document.getElementById('app'));

let seconds = 0;


const renderCounter = () => {
    app.render(<SecondsCounter seconds={seconds} />);
    seconds++;
};

// Llama a renderCounter cada segundo usando setInterval
setInterval(renderCounter, 1000);
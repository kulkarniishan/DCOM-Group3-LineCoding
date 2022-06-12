import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './Styles.css'



function FavouriteColour() {
    const [color, setcolor] = useState("");
    

     return (
    <>
      <h1 className="Cen" >Line Encoding </h1>
      <button
        type="button"
        onClick={() => setcolor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setcolor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setcolor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setcolor("green")}
      >Green</button>
    </>
  );

}

export default FavouriteColour;
import React from "react";
import { useSelector } from "react-redux";
import Products from "./features/products";
function App() {
  const products= useSelector((state)=>state.products.items);
  console.log(products);

  return (
    <div className="App">
    {products.map((p,index)=>{
      return(
        <div key={index}>
          <ul><li>{p}</li></ul>
        </div>
      )
    })}
    <Products/>
    </div>
  );
}

export default App;

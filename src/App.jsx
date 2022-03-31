import { useState } from "react";


function App() {

  const [cuenta, setCuenta] = useState(0);

  const handleClick = () => {
    setCuenta(cuenta + 1);
  };

  return (
    <div className="App">
      <h3>Contador</h3>
      <hr />
      <h2 className="text-center">{cuenta}</h2>
      <hr />
      <div 
      style={{display: "flex", 
      justifyContent: "flex-end",
      marginRight:"5px"}}>
      <botton type="button" 
      class="btn btn-secondary" 
      onClick={handleClick}>
        +1
        </botton>
      </div>
    </div>
  );
}

export default App;

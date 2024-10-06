import React,{ useState } from "react";
import Button from "./components/Button";
import "./App.css";


const App = () => {

  const [numValue, setNumValue] = useState("");
  return (
    <>
      <section class="calculator">
        <form>
          <input type="text" className="screen" value={ numValue }/>
        </form>

        <div className="buttons">
          <Button operator="*" dataNum="*" setNumValue = { setNumValue } />
          <Button operator="/" dataNum="/" setNumValue = { setNumValue } />
          <Button operator="-" dataNum="-" setNumValue = { setNumValue } />
          <Button operator="+" dataNum="+" setNumValue = { setNumValue } />

          <Button operator="9" dataNum="9" setNumValue = { setNumValue } />
          <Button operator="8" dataNum="8" setNumValue = { setNumValue } />
          <Button operator="7" dataNum="7" setNumValue = { setNumValue } />
          <Button operator="6" dataNum="6" setNumValue = { setNumValue } />
          <Button operator="5" dataNum="5" setNumValue = { setNumValue } />
          <Button operator="4" dataNum="4" setNumValue = { setNumValue } />
          <Button operator="3" dataNum="3" setNumValue = { setNumValue } />
          <Button operator="2" dataNum="2" setNumValue = { setNumValue } />
          <Button operator="1" dataNum="1" setNumValue = { setNumValue } />
          <Button operator="0" dataNum="0" setNumValue = { setNumValue } />

          <Button operator="=" setNumValue = { setNumValue } />
          <Button operator="C" setNumValue = { setNumValue } />
        </div>
      </section>
    </>
  );
};

export default App;

import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [elif, setElif] = useState(0);
  const [kerem, setKerem] = useState(0);

  useEffect(() => {
    console.log("İlk kez render edildiğinde çalışır bir daha çalışmaz.");
  }, []);

  useEffect(() => {
    console.log("Her zaman çalışır.");
  });

  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde çalışır ve Elif değerinde bir değişiklik olduğunda çalışır ."
    );
  }, [elif]);

  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde çalışır ve Kerem değerinde bir değişiklik olduğunda çalışır ."
    );
  }, [kerem]);

  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde çalışır ve Elif veya Kerem değerinde bir değişiklik olduğunda çalışır ."
    );
  }, [elif, kerem]);

  return (
    <div className="App">
      <div className="firstDiv">
        <button onClick={() => setElif(elif + 1)}>Elif ++</button>
        <div>Elif : {elif}</div>
        <div>
          <button onClick={() => setKerem(kerem + 1)}>Kerem ++</button>
          <div>Kerem : {kerem}</div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  }, []);

  return (
    <div container="">
      <h1>
        Contador <div> {count}</div>
      </h1>

      <button onClick={() => setCount(0)}>RESET</button>
    </div>
  );
};

export default Home;

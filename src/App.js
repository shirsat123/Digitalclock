import React, { useState } from "react";

const App = () => {
  let time = new Date().toLocaleTimeString();
  const [stime, setStime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setStime(time);
  };
  setInterval(UpdateTime, 1000);
  return (
    <>
      <h1> {stime}</h1>
      {/* <button onClick={UpdateTime}> Get Time</button> */}
    </>
  );
};
export default App;

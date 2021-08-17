import React, { useState } from "react";

const Test = () => {
  const [state, setState] = useState([
    { id: 1, checked: false },
    { id: 2, checked: false },
    { id: 3, checked: false },
  ]);

  const handleClick = id => {
    let newState = [...state];
    newState[id - 1].checked = !newState[id - 1].checked;

    setState(newState);
  };

  return (
    <div>
      <button onClick={handleClick}>zmen</button>
      <div>
        {state.map(s => (
          <div>
            <span>{s.id}</span>
            <span className="m-3">{s.checked ? "true" : "false"}</span>
            <span onClick={() => handleClick(s.id)} className="m-3">
              sprav
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;

import React from "react";

const CountOfChoosenSeats = ({ count }) => {
  return (
    <p>
      Počet vybraných miest: <strong className="fw-bold">{count}</strong>
    </p>
  );
};

export default CountOfChoosenSeats;

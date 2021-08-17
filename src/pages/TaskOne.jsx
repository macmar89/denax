import React from "react";
import CountOfChoosenSeats from "../components/global/CountOfChoosenSeats";
import Header from "../components/global/Header";

import HighComponent from "../components/global/HighComponent";

const TaskOne = ({ choosenSeats, renderRow, numOfRows }) => {
  return (
    <div className="container">
      <Header title="Úloha 1" />
      <div className="row">
        <div className="col-8 mx-auto">
          <table className="table col-6 mx-auto">
            <tbody>{numOfRows.map(num => renderRow(num))}</tbody>
          </table>
          <CountOfChoosenSeats count={choosenSeats.length} />
        </div>
      </div>
    </div>
  );
};

export default HighComponent(TaskOne);

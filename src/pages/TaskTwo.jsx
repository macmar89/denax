import React from "react";
import Header from "../components/global/Header";

import CountOfChoosenSeats from "../components/global/CountOfChoosenSeats";

import HighComponent from "../components/global/HighComponent";

const TaskTwo = ({
  choosenSeats,
  renderRow,
  numOfRows,
  numOfSeatsInRow,
  urciMiesto,
}) => {
  return (
    <div className="container">
      <Header title="Úloha 2" />
      <div className="row">
        <div className="col-8">
          <table className="table col-6 mx-auto">
            <thead>
              <tr>
                <td>-</td>
                {numOfSeatsInRow.map(num => (
                  <th key={num} className="text-center">
                    {num}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>{numOfRows.map(num => renderRow(num))}</tbody>
          </table>
          <CountOfChoosenSeats count={choosenSeats.length} />
        </div>
        <div className="col-4">
          <h2 className="text-center">Vybrané miesta:</h2>
          <ul className="mx-2">
            {choosenSeats.map(seat => (
              <li key={seat.id}>{urciMiesto(seat.id)}&nbsp;</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HighComponent(TaskTwo, true);

import React from "react";
import CountOfChoosenSeats from "../components/global/CountOfChoosenSeats";
import Header from "../components/global/Header";
import HighComponent from "../components/global/HighComponent";

const TaskThree = ({
  choosenSeats,
  renderRow,
  numOfRows,
  numOfSeatsInRow,
  urciMiesto,
  chooseSeat,
}) => {
  return (
    <div className="container">
      <Header title="Úloha 3" />
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
              <li key={seat.id}>
                {urciMiesto(seat.id)}&nbsp;
                <span
                  onClick={() => chooseSeat(seat.id)}
                  className="ml-2 text-primary"
                  style={{ cursor: "pointer" }}
                >
                  (zrušiť)
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HighComponent(TaskThree, true);

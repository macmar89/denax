import React, { useState, useMemo, useContext } from "react";
import { NumberOfSeats, RowsContext } from "../App";
import Header from "../components/global/Header";

import CountOfChoosenSeats from "../components/global/CountOfChoosenSeats";

const TaskTwo = () => {
  const rows = useContext(RowsContext);
  const numberOfSeatsInRow = useContext(NumberOfSeats);

  const numberOfSeats = rows * numberOfSeatsInRow;

  const [seat, setSeat] = useState([]);

  // vyrenderuje sedadla s ID a stavom checknutia (false)
  useMemo(() => {
    console.log("tu sa robi renderSeats");
    let seats = [];
    for (let i = 1; i <= numberOfSeats; i++) {
      seats.push({ id: i, checked: false });
    }
    setSeat(seats);
  }, [numberOfSeats]);

  //  cisla radov
  let rowsNumbers = [];
  for (let i = 1; i <= rows; i++) {
    rowsNumbers.push(i);
  }

  //  cisla sedadiel
  let seatsNumbers = [];
  for (let i = 1; i <= numberOfSeatsInRow; i++) {
    seatsNumbers.push(i);
  }

  // vyberie oznacene sedadlo / takisto ho aj vymaze ak je uz oznacene
  const chooseSeat = num => {
    let newSeat = [...seat];
    newSeat[num - 1].checked = !newSeat[num - 1].checked;
    setSeat(newSeat);
  };

  //  pocet vybranych miest
  const choosenSeats = seat.filter(s => s.checked === true);

  //  urci miesto v hladisku
  const urciMiesto = seat => {
    function isInt(n) {
      return n % 1 === 0;
    }
    const rad = isInt(seat / numberOfSeatsInRow)
      ? seat / numberOfSeatsInRow
      : Math.ceil(seat / numberOfSeatsInRow);

    const miesto = numberOfSeatsInRow + (seat - rad * numberOfSeatsInRow);

    return `rad ${rad}, sedadlo: ${miesto}`;
  };

  const renderRow = numberOfRow => {
    const sliced = seat.slice(
      numberOfRow * numberOfSeatsInRow - numberOfSeatsInRow,
      numberOfRow * numberOfSeatsInRow
    );

    return (
      <tr>
        <td>{`Rad ${numberOfRow}`}</td>
        {sliced.map(num => (
          <td key={num}>
            <input
              type="checkbox"
              onChange={e => chooseSeat(+e.target.name)}
              checked={num.checked}
              className="form-check-label mx-1"
              name={num.id}
            />
          </td>
        ))}
      </tr>
    );
  };

  return (
    <div className="container">
      <Header title="Úloha 2" />
      <div className="row">
        <div className="col-8">
          <table className="table col-6 mx-auto">
            <thead>
              <tr>
                <td>-</td>
                {seatsNumbers.map(num => (
                  <th key={num} className="text-center">
                    {num}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>{rowsNumbers.map(num => renderRow(num))}</tbody>
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

export default TaskTwo;

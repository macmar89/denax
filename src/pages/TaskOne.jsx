import React, { useState, useMemo, useContext } from "react";
import { NumberOfSeats, RowsContext } from "../App";
import CountOfChoosenSeats from "../components/global/CountOfChoosenSeats";
import Header from "../components/global/Header";

const TaskOne = () => {
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

  const chooseSeat = num => {
    let newSeat = [...seat];
    newSeat[num - 1].checked = !newSeat[num - 1].checked;
    setSeat(newSeat);
  };

  //  pocet vybranych miest
  const countOfChoosenSeats = seat.filter(s => s.checked === true).length;

  const renderRow = numberOfRow => {
    const sliced = seat.slice(
      numberOfRow * numberOfSeatsInRow - numberOfSeatsInRow,
      numberOfRow * numberOfSeatsInRow
    );

    return (
      <tr>
        {sliced.map(num => (
          <td>
            <input
              key={num.id}
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
      <Header title="Úloha 1" />
      <div className="row">
        <div className="col-8 mx-auto">
          <table className="table col-6 mx-auto">
            <tbody>{rowsNumbers.map(num => renderRow(num))}</tbody>
          </table>
          <CountOfChoosenSeats count={countOfChoosenSeats} />
        </div>
      </div>
    </div>
  );
};

export default TaskOne;

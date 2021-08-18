import React, { useContext, useMemo, useState } from "react";
import { RowsContext, NumberOfSeats } from "../../App";

const HighComponent = (WrappedComponent, showRowInTable) => {
  const HighComponent = () => {
    const rows = useContext(RowsContext);
    const numberOfSeatsInRow = useContext(NumberOfSeats);
    const numberOfSeats = rows * numberOfSeatsInRow;

    const [seat, setSeat] = useState([]);

    useMemo(() => {
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

    //  vypise riadok so sedadlami
    const renderRow = numberOfRow => {
      const sliced = seat.slice(
        numberOfRow * numberOfSeatsInRow - numberOfSeatsInRow,
        numberOfRow * numberOfSeatsInRow
      );
      return (
        <tr>
          {showRowInTable ? <td>{`Rad ${numberOfRow}`}</td> : null}
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
      <WrappedComponent
        choosenSeats={choosenSeats}
        renderRow={renderRow}
        numOfRows={rowsNumbers}
        numOfSeatsInRow={seatsNumbers}
        urciMiesto={urciMiesto}
        chooseSeat={chooseSeat}
      />
    );
  };
  return HighComponent;
};

export default HighComponent;

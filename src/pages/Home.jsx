import React, { useState, useMemo } from "react";

const Home = () => {
  const [rows, setRows] = useState(10);
  const [numberOfSeatsInRow, setNumberOfSeatsInRow] = useState(20);
  const numberOfSeats = rows * numberOfSeatsInRow;

  const [seat, setSeat] = useState([]);

  // vyrenderuje sedadla s ID a stavom checknutia (false)
  const renderSeats = useMemo(() => {
    const numberOfSeats = rows * numberOfSeatsInRow;
    console.log("tu sa robi renderSeats");
    let seats = [];
    for (let i = 1; i <= numberOfSeats; i++) {
      seats.push({ id: i, checked: false });
    }
    setSeat(seats);
  }, [rows, numberOfSeatsInRow]);

  //  ulozim si do stavu

  const [choosenSeats, setChoosenSeats] = useState([]);

  // let arrayOfNumbers = [];

  // for (let i = 1; i <= numberOfSeats; i++) {
  //   arrayOfNumbers.push(i);
  // }

  const handleSubmit = e => {
    e.preventDefault();
    // alert(`Objednal si si ${choosenSeats.length} listkov `);
  };

  const checkSeat = num => {
    const ehm = choosenSeats.filter(seat => seat === num);
    if (ehm.length > 0) {
      const newSeats = choosenSeats.filter(seat => seat !== num);
      setChoosenSeats(newSeats);
    }
    if (ehm.length === 0) setChoosenSeats([...choosenSeats, num]);

    //  zmeni checked na opacnu hodnotu pri vybranom sedadle
    const findSeat = seat.filter(s => s.id === num);

    //  musim to zapisat do stavu aby to ukazovalo stav checknutia
    findSeat[0].checked = !findSeat[0].checked;
    console.log(findSeat);
  };

  const vybrane = seat.filter(s => s.checked === true);

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

  //  pocet vybranych miest
  const countOfChoosenSeats = seat.filter(s => s.checked === true).length;

  const renderRow = numberOfRow => {
    const sliced = seat.slice(
      numberOfRow * numberOfSeatsInRow - numberOfSeatsInRow,
      numberOfRow * numberOfSeatsInRow
    );

    return (
      <form className="d-flex">
        <p>{`Rad ${numberOfRow}`}</p>
        {sliced.map(num => (
          <input
            key={num.id}
            type="checkbox"
            onChange={e => checkSeat(+e.target.name)}
            checked={num.checked}
            className="form-check-label mx-1"
            name={num.id}
          />
        ))}
      </form>
    );
  };

  return (
    <div className="container">
      <button
        className="btn btn-primary"
        onClick={() => console.log(vybrane.length)}
      >
        click
      </button>
      <form onSubmit={handleSubmit}>
        {seat.map(seat => (
          <input
            className="form-check-label mx-1"
            checked={seat.checked}
            id={seat.id}
            key={seat.id}
            name={seat.id}
            onChange={e => checkSeat(+e.target.name)}
            type="checkbox"
          />
        ))}
      </form>

      <p>Počet vybraných miest: {countOfChoosenSeats}</p>

      <div>
        <h2>Vybrané miesta:</h2>
        <ul>
          {/* {choosenSeats.map(seat => (
            <li key={seat}>{urciMiesto(seat)}</li>
          ))} */}
          {/* vypise vybrane sedadla */}
          {vybrane.map(seat => (
            <li key={seat.id}>
              {urciMiesto(seat.id)}&nbsp;
              <span onClick={() => checkSeat(seat.id)}>zrušiť</span>
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        {renderRow(1)}
        {renderRow(2)}
      </form>
      <form></form>
    </div>
  );
};

export default Home;

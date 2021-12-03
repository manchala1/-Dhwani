import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InputBox from "./inputBox";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Card() {
  const [cardNumberValue, setCardNumberValue] = useState("");
  const [data, setData] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios
      .get("http://localhost:5000/card/list")
      .then((res) => {
        setData(res.data.data.Cards);
      })
      .catch((err) => console.log(err));
  });

  function deleteButton(id) {
    axios
      .delete(`http://localhost:5000/card/delete/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
    history.push("/");
  }

  function submitCard() {
    axios
      .post("http://localhost:5000/card", {
        cardNumber: cardNumberValue,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
    history.push("/");
  }
  const handleChange = (e) => {
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split("-");

    let fieldIntIndex = parseInt(fieldIndex, 10);

    // Check if no of char in field == maxlength
    if (value.length >= maxLength) {
      // It should not be last input field
      setCardNumberValue(cardNumberValue + value);
      if (fieldIntIndex < 4) {
        // Get the next input field using it's name
        const nextfield = document.querySelector(
          `input[name=field-${fieldIntIndex + 1}]`
        );

        // If found, focus the next field
        if (nextfield !== null) {
          nextfield.focus();
        }
      }
    } else if (value.length === 0) {
      if (fieldIntIndex > 1) {
        // Get the next input field using it's name
        const nextfield = document.querySelector(
          `input[name=field-${fieldIntIndex - 1}]`
        );

        // If found, focus the next field
        if (nextfield !== null) {
          nextfield.focus();
        }
      }
    }
  };

  return (
    <div className="container">
      <h1>Card Number*</h1>
      <div className="row">
        <div className="col-lg-3">
          <InputBox
            name="field-1"
            length="4"
            handleChange={handleChange}
            onChange={(e) => setCardNumberValue(e.target.value)}
          />
        </div>
        <div className="col-lg-3">
          <InputBox
            name="field-2"
            length="4"
            handleChange={handleChange}
            onChange={(e) => setCardNumberValue(e.target.value)}
          />
        </div>
        <div className="col-lg-3">
          <InputBox
            name="field-3"
            length="4"
            handleChange={handleChange}
            onChange={(e) => setCardNumberValue(e.target.value)}
          />
        </div>
        <div className="col-lg-3">
          <InputBox
            name="field-4"
            length="4"
            handleChange={handleChange}
            onChange={(e) => setCardNumberValue(e.target.value)}
          />
        </div>
      </div>
      <input
        disabled={cardNumberValue.length === 16 ? false : true}
        type="submit"
        className="btn btn-success my-3"
        name="cardNumber"
        onClick={submitCard}
      />
      <table className="table maintable">
        <thead>
          <tr className="table-dark ">
            <th>card Number</th>
            <th>Delete </th>
          </tr>
        </thead>
        <tbody className="container mx-auto">
          {data.length &&
            data.map((d) => (
              <tr>
                <td>
                  <h1>{d.cardNumber}</h1>
                </td>
                <td>
                  {" "}
                  <i class="fa fa-trash text-danger" onClick={deleteButton}></i>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Card;

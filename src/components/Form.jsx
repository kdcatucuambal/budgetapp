import React, { Fragment, useState } from "react";
import Error from "./Error";
import { generate } from "shortid";
import PropTypes from "prop-types";
const Form = ({ setSpend, setCreateSpend, remaining }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  //When user add spend
  const addSpend = (e) => {
    e.preventDefault();
    //validate:
    if (quantity < 1 || isNaN(quantity) || name.trim() === "") {
      setMessage("Both fields are required or budget is incorrect!");
      setError(true);
      return;
    }

    if (quantity > remaining) {
      setMessage("Your remaining budget is insufficient");
      setError(true);
      return;
    }

    //make spend
    setError(false);
    const spend = {
      name,
      quantity,
      id: generate(),
    };
    //pass gast to main component
    setSpend(spend);
    setCreateSpend(true);
    //reset form
    setName("");
    setQuantity(0);
  };

  return (
    <Fragment>
      <h5>Add your spend here</h5>
      {error ? <Error setError={setError} message={message} /> : null}
      <form onSubmit={addSpend}>
        <div className="form-group">
          <label htmlFor="name">Spend Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Put your spend name here"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="spend">Spend Quantity</label>
          <input
            type="number"
            className="form-control"
            name="spend"
            placeholder="Put your spent quantity here"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>
        <button type="submit" className="btn btn-info btn-block">
          Add Spend
        </button>
      </form>
    </Fragment>
  );
};

Form.propTypes = {
  setSpend: PropTypes.func.isRequired,
  setCreateSpend: PropTypes.func.isRequired,
};

export default Form;

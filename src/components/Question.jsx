import React, { Fragment, useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Question = ({ setBudget, setRemaining, updateQuestion }) => {
  //Define state
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(false);

  //Function for read budget
  const defineBudget = (event) => {
    event.preventDefault();
    setQuantity(Number(event.target.value));
  };

  //Submit for define the budget
  const addBudget = (event) => {
    event.preventDefault();
    //Validate
    if (quantity < 1 || isNaN(quantity)) {
      setError(true);
      return;
    }
    //If pass validate
    setError(false);
    setBudget(quantity);
    setRemaining(quantity);
    updateQuestion(false);
  };

  return (
    <Fragment>
      <form onSubmit={addBudget}>
        <div className="card">
          <div className="card-header">Put your current budget:</div>
          <div className="card-body">
            {error ? (
              <Error setError={setError} message="The budget is incorrect!" />
            ) : null}
            <div className="form-group">
              <label htmlFor="number">Budget: </label>
              <input
                type="number"
                className="form-control"
                name="budget"
                placeholder="Put your current budget"
                onChange={defineBudget}
              />
            </div>
            <button className="btn btn-primary btn-block">Define budget</button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

Question.propTypes = {
  setBudget: PropTypes.func.isRequired,
  setRemaining: PropTypes.func.isRequired,
  updateQuestion: PropTypes.func.isRequired,
};

export default Question;

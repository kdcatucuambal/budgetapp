import React, { Fragment } from "react";
import { checkBudget } from "./../helper";
import PropTypes from "prop-types";
const BudgetControl = ({ remaining, budget }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Budget: ${budget}</div>
      <div className={checkBudget(budget, remaining)}>
        Remaining: ${remaining}
      </div>
    </Fragment>
  );
};

BudgetControl.propTypes = {
  remaining: PropTypes.number.isRequired,
  budget: PropTypes.number.isRequired,
};

export default BudgetControl;

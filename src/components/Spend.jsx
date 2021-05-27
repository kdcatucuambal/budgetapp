import React from "react";
import PropTypes from "prop-types";

const Spend = ({ spend }) => (
  <li className="list-group-item d-flex justify-content-between align-items-center">
    {spend.name}
    <h4>
      <span className="badge badge-primary">$ {spend.quantity}</span>
    </h4>
  </li>
);


Spend.propTypes = {
  spend: PropTypes.object.isRequired,
};
export default Spend;

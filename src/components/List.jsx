import { Fragment } from "react";
import Spend from "./Spend";
import PropTypes from "prop-types";

const List = ({ spends }) => {
  return (
    <Fragment>
      <h5>Spend List</h5>
      <ul className="list-group mb-2">
        {spends.map((spend) => (
          <Spend key={spend.id} spend={spend} />
        ))}
      </ul>
    </Fragment>
  );
};

List.propTypes = {
  spends: PropTypes.array.isRequired,
};

export default List;

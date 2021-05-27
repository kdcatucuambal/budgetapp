import PropTypes from "prop-types";
const Error = ({ message, setError }) => (
  <div className="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Error! </strong>
    {message}
    <button
      type="button"
      className="close"
      data-dismiss="alert"
      aria-label="Close"
      onClick={() => setError(false)}
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
);

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;

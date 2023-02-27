import PropTypes from "prop-types";

export default function Customer(props) {
  return (
    <h5>
      {props.cust.id} {props.cust.name} {props.cust.address}
    </h5>
  );
}

Customer.propTypes = {
  cust: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    address: PropTypes.string,
  }),
};

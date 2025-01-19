import PropTypes from "prop-types";

const ButtonDelete = ({ deleteProduct, id }) => {
  return (
    <button
      type="button"
      onClick={() => {
        deleteProduct(id);
      }}
    >
      <img src="./img/icons/cross.svg" alt="Delete"></img>
    </button>
  );
};

ButtonDelete.propTypes = {
  deleteProduct: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ButtonDelete;

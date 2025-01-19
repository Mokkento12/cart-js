import PropTypes from "prop-types";
import "./style.scss";

const CartFooter = ({ total }) => {
  const { count, price } = total;
  return (
    <footer className="cart-footer">
      <div className="cart-footer__count">{count} ед.</div>
      <div className="cart-footer__price">{price} руб.</div>
    </footer>
  );
};

// Добавление PropTypes для проверки
CartFooter.propTypes = {
  total: PropTypes.shape({
    count: PropTypes.number.isRequired, // Ожидаем, что count — это число и оно обязательное
    price: PropTypes.number.isRequired, // Ожидаем, что price — это число и оно обязательное
  }).isRequired, // Объект total обязателен
};

export default CartFooter;

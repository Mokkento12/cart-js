import PropTypes from "prop-types";
import "./style.scss";

const Count = ({ count, increase, id }) => {
  return (
    <div className="count">
      <div className="count__box">
        <input
          type="number"
          className="count__input"
          min="1"
          max="100"
          value={count}
          readOnly // Добавлено, чтобы сделать input только для чтения
        />
      </div>
      <div className="count__controls">
        <button
          type="button"
          className="count__up"
          onClick={() => {
            increase(id);
          }}
        >
          <img src="./img/icons/icon-up.svg" alt="Increase" />
        </button>
        <button type="button" className="count__down">
          <img src="./img/icons/icon-down.svg" alt="Decrease" />
        </button>
      </div>
    </div>
  );
};

Count.propTypes = {
  count: PropTypes.number.isRequired, // Ожидаем, что count — это обязательное число
  increase: PropTypes.func.isRequired, // increase — обязательная функция
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // id может быть строкой или числом
};

export default Count;

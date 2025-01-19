import PropTypes from "prop-types";
import "./style.scss";

const Count = ({ count, increase, decrease, changeValue, id }) => {
  return (
    <div className="count">
      <div className="count__box">
        <input
          onChange={(e) => {
            changeValue(id, +e.target.value); // Вызов функции changeValue с преобразованием в число
          }}
          type="number"
          className="count__input"
          min="1"
          max="100"
          value={count}
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
        <button
          type="button"
          className="count__down"
          onClick={() => {
            decrease(id);
          }}
        >
          <img src="./img/icons/icon-down.svg" alt="Decrease" />
        </button>
      </div>
    </div>
  );
};

Count.propTypes = {
  count: PropTypes.number.isRequired, // Ожидаем, что count — это обязательное число
  increase: PropTypes.func.isRequired, // increase — обязательная функция
  decrease: PropTypes.func.isRequired, // decrease — обязательная функция
  changeValue: PropTypes.func.isRequired, // добавляем проверку для changeValue
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // id может быть строкой или числом
};

export default Count;

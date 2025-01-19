import ButtonDelete from "../ButtonDelete";
import PropTypes from "prop-types";
import Count from "../Count";
import "./style.scss";

const Product = ({ product, deleteProduct, increase }) => {
  const { img, title, priceTotal, count, id } = product;
  return (
    <section className="product">
      <div className="product__img">
        <img src={`./img/products/${img}`} alt={title} />
      </div>
      <div className="product__title">{title}</div>
      <div className="product__count">
        <Count count={count} increase={increase} id={id} />
      </div>
      <div className="product__price">{priceTotal}</div>
      <div className="product__controls">
        <ButtonDelete deleteProduct={deleteProduct} id={id} />
      </div>
    </section>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    priceTotal: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
  deleteProduct: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
};

export default Product;

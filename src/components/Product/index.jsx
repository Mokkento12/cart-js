import ButtonDelete from "../ButtonDelete";
// import Count from "../Count";
import "./style.scss";

const Product = ({ product }) => {
  const { img, title, price, count, id } = product;
  return (
    <section className="product">
      <div className="product__img">
        <img src={`./img/products/${img}`} alt={title} />
      </div>
      <div className="product__title">{title}</div>
      <div className="product__count">{/* <Count /> */}</div>
      <div className="product__price">{price}</div>
      <div className="product__controls">
        <ButtonDelete />
      </div>
    </section>
  );
};

export default Product;

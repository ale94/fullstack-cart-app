import PropTypes from "prop-types";

export const ProductCardView = ({ handler, id, name, description, price }) => {
  const onAddProduct = (product) => {
    handler(product);
  };
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">$ {price}</p>
          <button
            className="btn btn-primary"
            onClick={() => onAddProduct({ id, name, description, price })}
          >
            Agregar
          </button>
        </div>
      </div>
    </>
  );
};

ProductCardView.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

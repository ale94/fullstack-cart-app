import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ProductCardView } from "./ProductCardView";

export const CatalogView = ({ handler }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);
  return (
    <>
      <div className="row">
        {products.map(({ id, name, description, price }) => (
          <div className="col-4 my-2" key={id}>
            <ProductCardView
              handler={handler}
              id={id}
              name={name}
              description={description}
              price={price}
            />
          </div>
        ))}
      </div>
    </>
  );
};

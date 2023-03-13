import "../Components/Nav.css";
function Productlist({ product, addtoCart }) {
  return (
    <>
      <div className="flex">
        {product.map((productItem) => {
          return (
            <div style={{ width: "50%" }}>
              <div className="product-item">
                <img src={productItem.imagesrc} width="50%" />
                <p>
                  {productItem.name}|{product.decp}
                </p>
                <p>Rs .{productItem.price}</p>
                <button onClick={() => addtoCart(productItem)}>
                  Add to cart
                </button>
              </div>
            </div>
          );
        }, [])}
      </div>
    </>
  );
}
export default Productlist;

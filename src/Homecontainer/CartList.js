import React, { useState, useEffect } from "react";
import "../Components/Nav.css";
function CartList({ cart }) {
  const [Cart, setCart] = useState([]);
  useEffect(() => {
    setCart(cart);
  }, [cart]);
  return (
    <div>
      {Cart?.map((cartItem, cartindex) => {
        return (
          <div>
            <img src={cartItem.url} width={"40"} />
            <span>{cartItem.name}</span>
            <button
              onClick={() => {
                const _Cart = Cart.map((item, index) => {
                  return cartindex === index
                    ? { ...item, count: item.count > 0 ? item.count - 1 : 0 }
                    : item;
                });
                setCart(_Cart);
              }}
            >
              -
            </button>
            <span>{cartItem.count}</span>
            <button
              onClick={() => {
                const _Cart = Cart.map((item, index) => {
                  return cartindex === index
                    ? { ...item, count: item.count + 1 }
                    : item;
                });
                setCart(_Cart);
              }}
            >
              +
            </button>
            <p style={{ width: "10%" }}>
              RS. {cartItem.price * cartItem.count}
            </p>
          </div>
        );
      })}
      <div style={{ margin: "50px" }}>
        <span style={{ color: "red", fontSize: "30px", padding: "10px" }}>
          Rs.
          {cart
            .map((item) => item.price * item.count)
            .reduce((total, value) => total + value, 0)}
        </span>
        <button>Processed to Pay</button>
      </div>
    </div>
  );
}
export default CartList;

import React from "react";
import "./Checkout.css";
import { useStateValue } from "../../context/StateProvider";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__ad__img">
        <img
          className="checkout__ad"
          src="https://www.amazon.in/images/G/31/img19/AmazonPay/Boson/Sid/UPI/July/500/DesktopHero_1500x600._CB410515543_.jpg"
          alt="amazon ad"
        />
      </div>

      {basket.length === 0 ? (
        <div>
          <h2>Your Shopping Cart is empty!!</h2>
          <p>You have no items in your cart.</p>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your Shopping Basket!!</h2>
          {
            basket.map((item, i) => (
              <CheckoutProduct
              key={i}
              item={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              />
            ))
          }
        </div>
      )}
    </div>
  );
}

export default Checkout;

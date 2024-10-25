import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../Components/cart-item";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId: "sarkar",
    photo: "https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg",
    name: "macbook",
    price: 100000,
    quantity: 20,
    stock:10,
  },
  {
    productId: "143",
    photo: "https://in.canon/media/image/2024/07/17/3d47abeaf9574a9ba9401c6ff2ca7bb1_EOS+R5+Mark+II+%26+RF24-105mm+f4L+IS+USM+Front+Slant.png ",
    name: "canon",
    price: 80000,
    quantity: 18,
    stock:15,
  },
  {
    productId: " 145",
    photo: "https://m.media-amazon.com/images/I/61uTgCczoXL._AC_UF894,1000_QL80_.jpg ",
    name: "GTA-V",
    price: 1400,
    quantity: 30,
    stock:10,
  },
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const Discount = 400;
const total = subtotal + tax + shippingCharges;

const Cart = () => {

  const [couponCode, setcouponCode] = useState<string>("");
  const [isValidCouponCode, setisValidCouponCode] = useState<Boolean>(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (Math.random() > 0.5) setisValidCouponCode(true);
      else setisValidCouponCode(false);
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
      setisValidCouponCode(false);
    };
  }, [couponCode]);
  

  return (
    <div className="cart">
      <main>
        
{
          cartItems.length > 0 ? cartItems.map((i, idx) => (
            <CartItem  key={idx} cartItem={i}/>
          )) : (
              <h1>No items Added</h1>
          )
}





      </main>
      <aside>
      <p>Subtotal : ₹(subtotal)</p>
      <p>Shipping charges : ₹(shippingCharges)</p>
      <p>Tax : ₹(tax)</p>
        <p>   
          Discount : <em className="red"> - ₹{Discount}</em>
        </p>
        <b>Total : {total}</b>
        
        <input type="text" value={couponCode} onChange={(e) => setcouponCode(e.target.value)} placeholder="Coupon Code" />
        
        {
          couponCode && (
            isValidCouponCode ? <span className="green">₹{Discount} Off using the <code>{couponCode }</code></span> : <span className="red">Invalid Coupon <VscError/></span>
           )
        }

        {
          cartItems.length > 0 && <Link to="/shipping">Checkout</Link>

        }
        
      </aside> 

    </div>
  )
}

export default Cart

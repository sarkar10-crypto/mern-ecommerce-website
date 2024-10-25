import { ChangeEvent, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Shipping = () => {

    const navigate = useNavigate();


    const [shippingInfo, setShippingInfo] = useState({
        address: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
    });
    const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => { 
        setShippingInfo((prev) =>({...prev, [e.target.name] : e.target.value}))
    };
    
  return (
    <div className="shipping">
          <button className="back-btn" onClick={()=>navigate("/cart")}><BiArrowBack /></button>
          
          <form>
              <h1>SHIPPING ADDRESS</h1>
              <input type="text" placeholder="Address" name="address" value={shippingInfo.address}
                  onChange={changeHandler} required />
              <input type="text" placeholder="City" name="city" value={shippingInfo.city}
                  onChange={changeHandler} required />
              <input type="text" placeholder="State" name="state" value={shippingInfo.state}
                  onChange={changeHandler} required />
              <input type="text" placeholder="Country" name="country" value={shippingInfo.country}
                  onChange={changeHandler} required />
              <select name="country" required value={shippingInfo.country} onChange={changeHandler}>
                  <option value="">Select Country</option>
                  <option value="India">India</option>
                  <option value="America">America</option>
                  <option value="Russia">Russia</option>
                  </select>
              <input type="text" placeholder="Pincode" name="pincode" value={shippingInfo.pincode}
                  onChange={changeHandler} required />
              <button type="submit">Pay now</button>
          </form>

    </div>
  )
}

export default Shipping;

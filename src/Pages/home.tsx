import { Link } from "react-router-dom"
import ProductCard from "../Components/productCard"
const Home = () => {
  const addToCartHandler = () => {
  
}

  return (
    <div className="home">

      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className="findMore">More</Link>
      </h1>

      <main>
        <ProductCard productId="gsa" name="Macbook" price={456767} stock={500} handler={addToCartHandler} photo="https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg" />
        
        <ProductCard productId="143" name="canon" price={45676} stock={300} handler={addToCartHandler} photo="https://in.canon/media/image/2024/07/17/3d47abeaf9574a9ba9401c6ff2ca7bb1_EOS+R5+Mark+II+%26+RF24-105mm+f4L+IS+USM+Front+Slant.png" />
        
        <ProductCard productId="145" name="gta-5" price={1400} stock={ 300 }  handler={addToCartHandler} photo="https://m.media-amazon.com/images/I/61uTgCczoXL._AC_UF894,1000_QL80_.jpg" />
        
      </main>
       
    </div>
  )
}

export default Home

import { useState } from "react"
import ProductCard from "../Components/productCard";

 
const Search = () => {

  const [search, setsearch] = useState("");
  const [sort, setsort] = useState("");
  const [maxPrice, setmaxPrice] = useState(100000);
  const [category, setcategory] = useState("");
  const [page, setpage] = useState(1);

  const isPrevPage = page > 1;
  const isNextPage = page < 4;

  const addToCartHandler = () => { };

  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>sort</h4>
          <select value={sort} onChange={(e) => setsort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Price (Low to High)</option>
            <option value="dsc">Price (High to Low)</option>
          </select>
        </div>

        <div>
          <h4>Max  Price: {maxPrice || "" }</h4>
          <input type="range" min={100} max={100000} value={maxPrice} onChange={(e) => setmaxPrice(Number(e.target.value))}>
             
          </input>
        </div>

        <div>
          <h4>category</h4>
          <select value={category} onChange={(e) => setcategory(e.target.value)}>
            <option value="">All</option>
            <option value="">sample1</option>
            <option value="">sample2</option>
          </select>
        </div>

      </aside>
      <main>
        <h1>PRODUCTS</h1>
        <input type="text" placeholder="Search by name...." value={search} onChange={(e) => setsearch(e.target.value)} />
        
        <div className="search-product-list">
          <ProductCard productId="gsa" name="Macbook" price={456767} stock={500} handler={addToCartHandler} photo="https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg" />
          
          <ProductCard productId="143" name="canon" price={45676} stock={300} handler={addToCartHandler} photo="https://in.canon/media/image/2024/07/17/3d47abeaf9574a9ba9401c6ff2ca7bb1_EOS+R5+Mark+II+%26+RF24-105mm+f4L+IS+USM+Front+Slant.png" />

          <ProductCard productId="145" name="gta-5" price={1400} stock={ 300 }  handler={addToCartHandler} photo="https://m.media-amazon.com/images/I/61uTgCczoXL._AC_UF894,1000_QL80_.jpg" />
        </div>

        <article>
          <button disabled={!isPrevPage} onClick={()=>setpage((prev) => prev - 1)}> Prev </button>
          <span>{page} of {5}</span>
          <button disabled={!isNextPage} onClick={()=>setpage((prev)=> prev + 1)}>Next</button>
          
        </article>

      </main>
       
    </div>
  )
}

export default Search

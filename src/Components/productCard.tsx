import { FaPlus } from "react-icons/fa";

type productsProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};

// creating a normal for practice:
const server = "Ds-server-images";

const ProductCard = ({productId,price,photo,name,stock,handler } :productsProps) => {
  return <div className="productCard">
    <img src={photo} alt={name}/>
    <p>{name}</p>
    <span>₹{price}</span>

    <div>
      <button onClick={()=>handler()}>
        <FaPlus />
      </button>
    </div>
  
  
  </div>
     
}

export default ProductCard

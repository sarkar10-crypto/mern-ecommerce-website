import { useState } from "react";
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser} from "react-icons/fa"
import { Link } from "react-router-dom"

const user = { _id: "145", role: "" };
const Header = () => {
    
    const [isOpen, setisOpen] = useState<boolean>(false);

    const LogOutHandler = () => {
        setisOpen(false);
    }

  return (
    <nav className="header">
          <Link to={"/"} onClick={() => setisOpen(false)} >HOME</Link>
          
          <Link to={"/search"} onClick={() => setisOpen(false)}> <FaSearch/>   </Link>
          <Link to={"/cart"} onClick={() => setisOpen(false)}> <FaShoppingBag />   </Link>
          
          {
              user?._id ? (
                  <>
                  <button onClick={()=> setisOpen((prev)=> !prev)}>
                    <FaUser/> 
                      </button>
                      <dialog open={isOpen}>
                          <div>
                              {user.role == "admin" && (
                                      <Link to={"/admin/dashboard"} onClick={() => setisOpen(false)}>Admin</Link>
                                  )}
                              <Link to={"/orders"} onClick={() => setisOpen(false)}>orders</Link>
                              <button onClick={LogOutHandler}>
                                  <FaSignOutAlt/>
                              </button>
                          </div>
                      </dialog>
                  </>
              ) : <Link to={"/login"}> <FaSignInAlt />   </Link>
          }

     
    </nav>
  )
}

export default Header

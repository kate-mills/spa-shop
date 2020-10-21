import React from "react";
import {Link} from 'react-router-dom'
import {UserContext} from '../context/user'
import {CartContext} from '../context/cart'

const LoginLink = ()=> {
  const {user, userLogout} = React.useContext(UserContext);
  const {clearCart} = React.useContext(CartContext);

  return (
    user.token
    ?  <button className="login-btn" onClick={()=>{ userLogout(); clearCart(); }}> logout</button>
    : <Link to="/login">login</Link>
  )
}
export default LoginLink;

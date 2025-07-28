import React from "react";

export default class Navbar extends React.Component{
render(){
    return <>
    <nav className="navbar">
    <div className="navbar-left">
    <div className="navbar-logo">
      <img src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" alt="KFC logo" />
    </div>
    <div className="navbar-links">
      <p>Menu</p>
      <p>Deals</p>
    </div>
  </div>

  <div className="navbar-actions">
    <div className="signin">
      <img src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg?h=36&w=36&fm=webp&fit=fill" alt="User Icon" className="signin-icon" />
      <p>Sign In</p>
    </div>
    <div className="cart">
      <button className="cart-btn">
        <img src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg" alt="Cart" className="cart-icon" />
      </button>
    </div>
  </div>
</nav>
</>
}
}
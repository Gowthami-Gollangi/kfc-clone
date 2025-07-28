import React from "react"

import MenuCards from "./MenuCards"
import menuCardsData from "./menuCardsData"


// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

export default class Categories extends React.Component{
    render(){
        return <>
        <div className="menu-section">
        <h2 className="menu-heading">Browse Menu Categories</h2>
    <div className="menu-grid">
    <div className="left-large">
      <img src="https://images.ctfassets.net/wtodlh47qxpt/3FKqwvgXKVq5yEhGjNpVyV/d2ea446076c8aa56fc3caaa7ab2c3e8e/KFC-BOGO-Gold-Burger-Category-23MAY_3.jpg?fm=webp&fit=fill" alt="Buy 1 Get 1" />
      <p>GOLD:BUY 1 GET 1</p>
    </div>
    <div className="right-grid">
      <div className="menu-item">
        <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/no-image.jpg" alt="Coming Soon" />
        <p>ZINGER: BUY 1 GET 1</p>
      </div>
      <div className="menu-item">
        <img src="https://images.ctfassets.net/wtodlh47qxpt/3c6YNbEbbgvJ9srLDJxOfs/1d327228858c6242867d73a9a77159ed/Full_house_Popcorn_-_465x327.jpg?fm=webp&fit=fill" alt="Epic Bucket" />
        <p>EPIC BUCKET OF THE DAY</p>
      </div>
      <div className="menu-item">
        <img src="https://images.ctfassets.net/wtodlh47qxpt/4AcPJzGNNxfXiF1rWvlydj/2a8548a717ff678fbfb0d881b7367ba8/KFC-Gold-Burger-White-Category-23MAY_4.jpg?fm=webp&fit=fill" alt="Combo" />
        <p>GOLD EDITION</p>
      </div>
      <div className="menu-item">
        <img src="https://images.ctfassets.net/wtodlh47qxpt/7zQ4a4xD9BW9Qyl03WlTqR/bbcea04b544b8700ea7fe7834d85feb7/KFC-Box-Meals.jpg?fm=webp&fit=fill" alt="Burger Meal" />
        <p>BOX MEALS</p>
      </div>
    </div>
  </div>
  <div className="menu-cards-wrapper">
          {menuCardsData.map((item, index) => (
            <MenuCards
              key={index}
              imgSrc={item.imgSrc}
              imgAlt={item.imgAlt}
              desc={item.desc}
            />
          ))}
        </div>
</div>
</>
    }
}
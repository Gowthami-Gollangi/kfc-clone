import React from "react";

import Header from "./Components/Header"
import Navbar from "./Components/Navbar";
import Navbar2 from "./Components/Navbar2";
import Banner from "./Components/Banner"
import Categories from "./Components/Categories";
import Cards from "./Components/Cards"
import Footer from "./Components/Footer";

import cardImagedData from "./Components/cardImagesData"

export default class App extends React.Component{
  render(){
    return<>
      <Header/>
      <Navbar/>
      <Navbar2/>
      <Banner/>
      <Categories/>
      <h2 id="h2">SAVE MORE AS YOU ORDER</h2>
      <div style={{display:"flex",gap:"30px",width:"80%",margin:"20px auto"}}>
      {cardImagedData.map((item,index) =>{
    return (
    <Cards key={index}
    imgSrc={item.imgSrc}
    imgAlt={item.imgAlt}
    header={item.header}
    desc={item.desc}
    offer={item.offer}
    details={item.details}
    />
    )
  })}
</div>
<Footer/>
    </>
  }
}
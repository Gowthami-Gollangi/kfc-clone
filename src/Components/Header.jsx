import React from "react";

export default class Header extends React.Component{
    render(){
        return <>
        <hr className="line" />
        <header>
            <img src="https://online.kfc.co.in/static/media/Search_Pin.e88a4d93.svg" alt="Location icon" className="loc-icon"/>
            <p className="loc-txt">Allow location access for local store menu and promos</p>
            <button className="loc-btn">Set Location</button>
        </header>
        </>
    }
}
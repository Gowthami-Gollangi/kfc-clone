import React, { Component } from "react";

export default class Footer extends React.Component{
    render(){
        return(
            <>
            <footer >
                <div style={{display:"flex",gap:"70px",width:"80%",margin:"20px auto",paddingTop:"100px"}}>
                <div className="logo">
                    <img className="logo-img" src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg?h=120&w=120&fm=webp&fit=fill" alt="logo" />
                </div>
                <div>
                    <ul className="no-bullets">
                        <li><b>KFC India</b></li>
                        <li>About KFC</li>
                        <li>KFC care</li>
                        <li>Careers</li>
                        <li>Our Golden Past</li>
                        <li>Responsible</li>
                        <li>Disclosure</li>
                    </ul>
                </div>
                <div>
                    <ul className="no-bullets">
                        <li><b>Legal</b></li>
                        <li>Terms and</li>
                        <li>Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Disclaimer</li>
                        <li>Caution Notice</li>
                    </ul>
                </div>
                <div>
                    <ul className="no-bullets">
                        <li><b>KFC Food</b></li>
                        <li>Menu</li>
                        <li>Order Lookup</li>
                        <li>Gift Card</li>
                        <li>Nutrition &</li>
                        <li>Allergen</li>
                    </ul>
                </div>
                <div>
                    <ul className="no-bullets">
                        <li><b>Support</b></li>
                        <li>Get Help</li>
                        <li>Contact Us</li>
                        <li>KFC Feedback</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div style={{display:"flex",marginTop:"15px"}}>
                <img src="https://online.kfc.co.in/static/media/Search_Pin.e88a4d93.svg" alt="Location icon" className="loc-icon"/>
                <p style={{textDecoration:"underline",cursor:"pointer",color:"whitesmoke",fontSize:"13px"}}>Find a KFC</p>
                </div>
                
                </div>
            </footer>
            </>
        )
    }
}
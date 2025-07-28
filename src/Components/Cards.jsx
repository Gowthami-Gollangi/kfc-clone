import React from "react";

export default class Cards extends React.Component{
    constructor(props){
        super(props)
      }
    render(){
        return (
        <>
        <div className="card">
        <img src={this.props.imgSrc} alt={this.props.imgAlt} />
        <div className="card-body">
        <h2>{this.props.header}</h2><br />
        <p>{this.props.desc}</p><br />
        <p><u>{this.props.details}</u></p><br />
        <button>{this.props.offer}</button>
        </div>
        </div>
        </>
        )
    }
}
import React from "react";

export default class MenuCards extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <>
        <div className="menu-card">
        <img src={this.props.imgSrc} alt={this.props.imgAlt} />
        {this.props.desc && (
          <div className="menu-body">
            <p>{this.props.desc}</p>
          </div>
        )}
        </div>
        </>
        );
    }
}
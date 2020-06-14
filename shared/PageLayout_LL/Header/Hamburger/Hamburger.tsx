import React from "react";
import "./Hamburger.css";


interface IProps {
   click: ()=>any
}

const hamburger: React.FC<IProps> = (props) => {
 return ( <div className="hamburger" onClick={props.click}>
    <div className="hamburger__slice" />
    <div className="hamburger__slice" />
    <div className="hamburger__slice" />
 </div>);
};

export default hamburger;

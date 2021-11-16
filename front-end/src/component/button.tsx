import React, { Children } from "react";
import "../styles/main.scss";

export const Button = (props:any) => {
    const { className, value, children, onClick, width ='20', height='6', ...others } = props;
  return (
    <div className={`btn-container flex justify-center align-center`}>
        <button className={`btn w2-${width} h2-${height}`} onClick={onClick}>{value}</button>
    </div>
  );
};

import React from 'react';
import "../Header/sign.css";

const Logo = () => {
  return (
    <img className='logo' src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="logo"/>
  );
};

export default Logo;

import React, { Fragment } from "react";
import mealsImages from './../../assets/images/Meals.jpeg'
import classes from './Header.module.css'
import CartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes['header']}>
        <h1>Mc Donald's Favorite</h1>        
        <CartButton></CartButton>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImages} alt="PlaterFul"/>
      </div>
    </Fragment>
  );
};

export default Header;

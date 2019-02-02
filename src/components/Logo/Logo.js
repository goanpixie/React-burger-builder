import React from 'react';
import burgerLogo from '../../assests/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
	<div className={classes.Logo}>
		<img src={burgerLogo} alt="Burger Logo"></img>
	</div>
);

export default logo;
import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';


const toolbar = (props) => (
	<header className={classes.Toolbar}>
		<div>MENU</div>
		<Logo/>
		<nav>
			<a>a</a>
			<a>b</a>
			<a>c</a>
			<a>d</a>
		</nav>
	</header>
);

export default toolbar;
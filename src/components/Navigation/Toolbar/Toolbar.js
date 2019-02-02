import React from 'react';
import classes from './Toolbar.css'

const toolbar = (props) => (
	<header className={classes.Toolbar}>
		<div>MENU</div>
		<div>LOGO</div>
		<nav>
			<a>a</a>
			<a>b</a>
			<a>c</a>
			<a>d</a>
		</nav>
	</header>
);

export default toolbar;
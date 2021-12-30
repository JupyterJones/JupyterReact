import React from 'react';
import "../index.css";
const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<h1>My Reactjs Notes and Links</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				Toggle Mode
			</button>
		</div>
	);
};

export default Header;

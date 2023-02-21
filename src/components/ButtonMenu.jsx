import React, { useState } from 'react';
import { RiMenu3Fill } from 'react-icons/ri';

const ButtonMenu = ({ handleShowMenu }) => {
	return (
		<div
			onClick={() => handleShowMenu()}
			className="lg:hidden fixed bottom-4 right-4 bg-purple-600 p-3 rounded-full text-white z-50"
		>
			<RiMenu3Fill />
		</div>
	);
};

export default ButtonMenu;

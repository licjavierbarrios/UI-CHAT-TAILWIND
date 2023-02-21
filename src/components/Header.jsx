import React from 'react';
import {
	RiSearchLine,
	RiHomeHeartLine,
	RiNotification3Line,
	RiArrowDownSLine,
} from 'react-icons/ri';

const Header = () => {
	return (
		<header className="w-full h-[8vh] md:h-[5vh] flex items-center justify-between px-8 bg-[#141517]">
			<div>
				{/* <img src="logo.png" className="w-10 h-10" alt="logo" /> */}
				<RiHomeHeartLine className="w-8 h-8 text-gray-300" />
			</div>
			<form className='hidden md:block'>
				<div className="flex items-center relative">
					<input
						type="text"
						placeholder="Search"
						className="bg-[#050505] outline-none py-1 pl-4 pr-6 rounded-sm text-gray-300"
					/>
					<RiSearchLine className="absolute right-1 text-gray-300 cursor-pointer" />
				</div>
			</form>

			<div className="flex items-center gap-6">
				<div className="relative">
					<RiNotification3Line className="text-xl text-gray-300 cursor-pointer" />
					<span className="absolute bg-purple-600 rounded-full text-[10px] text-white py-[2px] px-[6px] -top-2 -right-2">
						2
					</span>
				</div>
				<div className="flex items-center gap-2">
					<img
						src="https://img.freepik.com/foto-gratis/chico-worldface-espanol-fondo-blanco_53876-137665.jpg"
						className="w-8 h-8 rounded-full ring-2"
						alt="profile"
					/>
					<RiArrowDownSLine className="text-gray-300 cursor-pointer" />
				</div>
			</div>
		</header>
	);
};

export default Header;

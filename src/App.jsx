import React, { useState } from 'react';
import { Header, ContentCenter, ContentRight, ContentLeft } from './components';
import ButtonMenu from './components/ButtonMenu';

export default function App() {
	const [showMenu, setShowMenu] = useState(false);
	const handleShowMenu = () => {
		setShowMenu(!showMenu);
	};
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<div className="h-[92vh] md:h-[95vh] grid grid-cols-1 lg:grid-cols-8">
				<ButtonMenu handleShowMenu={handleShowMenu} />
				<ContentLeft showMenu={showMenu} />
				<ContentCenter />
				<ContentRight />
			</div>
		</div>
	);
}

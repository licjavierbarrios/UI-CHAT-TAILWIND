import React from 'react';
import Infogroup from './Infogroup';
import SendMessage from './SendMessage';
import Mensajes from './Mensajes';

const ContentCenter = () => {
	return (
		<div className="col-span-4 bg-[#1e1f24] p-8 relative">
			<Infogroup />
			<div className='h-[85%] overflow-y-scroll max-h[calc(100%-500px)] p-4'>
				<Mensajes />
			</div>
			<SendMessage />
		</div>
	);
};

export default ContentCenter;

import React from 'react';
import { BiMap, BiMicrophone } from 'react-icons/bi';
import { RiEmotionHappyLine, RiImage2Line, RiSendPlaneLine } from 'react-icons/ri';

const SendMessage = () => {
	return (
		<div className="absolute bg-[#22222A]  left-0 bottom-0 w-full p-8">
			<form className="relative">
				<BiMicrophone className="absolute text-xl top-3 left-2 text-gray-300 hover:cursor-pointer" />
				<input
					type="text"
					className="bg-[#1e1f24] py-2 pl-8 pr-32 outline-none w-full rounded-md text-white"
					placeholder="Type a message"
				/>
				<div className='absolute top-3 right-4 flex items-center gap-2 text-gray-300 text-xl'>
					<RiImage2Line className='hover:cursor-pointer' />
					<RiEmotionHappyLine className='hover:cursor-pointer' />
                    <RiSendPlaneLine className='hover:cursor-pointer' />
                    <BiMap className='hover:cursor-pointer' />
				</div>
			</form>
		</div>
	);
};

export default SendMessage;

import { RiSearchLine } from 'react-icons/ri';
import Users from './Users';

const ContentLeft = ({ showMenu }) => {
	return (
		<div
			className={`col-span-2 bg-[#22222A] p-8 overflow-y-scroll top-0 h-full w-[80%] md:w-[50%] lg:w-full fixed lg:static z-50 ${
				showMenu ? 'left-0' : '-left-full'
			} transition-all `}
		>
			<div className="text-white text-3xl mb-4">Messages</div>
			<form className="hidden md:block mb-4">
				<div className="flex items-center relative">
					<input
						type="text"
						placeholder="Search"
						className="bg-[#050505] outline-none py-1 pl-4 pr-6 rounded-sm text-gray-300 w-full py-2"
					/>
					<RiSearchLine className="absolute right-1 text-gray-300" />
				</div>
			</form>
			<Users />
		</div>
	);
};

export default ContentLeft;

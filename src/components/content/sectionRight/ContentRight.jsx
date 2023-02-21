import React from 'react';
import { RiFacebookBoxLine, RiInstagramLine, RiTwitchLine, RiTwitterLine } from 'react-icons/ri';

const ContentRight = () => {
	return (
		<div className="hidden lg:block col-span-2 bg-[#22222A] py-10">
			<div className="flex flex-col items-center justify-center gap-2">
				<img
					src="https://img.freepik.com/foto-gratis/abuelo-humoristico-amistoso-barba-blanca-sonriendo-alegria-camara-elegante-ordenado-hombre-negocios-mayor-gafas-regocijandose-resultados-exitosos-trabajo-efectivo-posando-aislado-estudio_343059-4215.jpg"
					alt="avatar"
					className="h-20 w-20 rounded-full object-cover"
				/>
				<div>
					<h2 className="text-gray-300 text-xl">Jonas Walas</h2>
					<p className="text-gray-500">@jonaswalas</p>
				</div>
			</div>
			{/* Attachment */}
			<div className="p-8">
        {/* Social media */}
				<div className="flex items-center gap-4 mb-4 cursor-pointer p-4 rounded-lg hover:bg-[#292a30] transition-colors">
					{/* iconos */}
					<div className="bg-[#1e1f24] p-4 text-xl rounded-lg text-purple-600">
						<RiInstagramLine />
					</div>
					<div>
						<span className="text-gray-300 font-semibold">@jonaswalas</span>
						<p className="text-gray-500">150.000 followers</p>
					</div>
				</div>
         {/* Social media */}
				<div className="flex items-center gap-4 mb-4 cursor-pointer p-4 rounded-lg hover:bg-[#292a30] transition-colors">
					{/* iconos */}
					<div className="bg-[#1e1f24] p-4 text-xl rounded-lg text-purple-600">
						<RiTwitterLine />
					</div>
					<div>
						<span className="text-gray-300 font-semibold">@jonaswalasDev</span>
						<p className="text-gray-500">150.000 followers</p>
					</div>
				</div>
         {/* Social media */}
				<div className="flex items-center gap-4 mb-4 cursor-pointer p-4 rounded-lg hover:bg-[#292a30] transition-colors">
					{/* iconos */}
					<div className="bg-[#1e1f24] p-4 text-xl rounded-lg text-purple-600">
						<RiTwitchLine />
					</div>
					<div>
						<span className="text-gray-300 font-semibold">jonaswalas</span>
						<p className="text-gray-500">150.000 followers</p>
					</div>
				</div>
         {/* Social media */}
				<div className="flex items-center gap-4 mb-4 cursor-pointer p-4 rounded-lg hover:bg-[#292a30] transition-colors">
					{/* iconos */}
					<div className="bg-[#1e1f24] p-4 text-xl rounded-lg text-purple-600">
						<RiFacebookBoxLine />
					</div>
					<div>
						<span className="text-gray-300 font-semibold">jonaswalas</span>
						<p className="text-gray-500">150.000 followers</p>
					</div>
				</div>
			</div>
      
		</div>
	);
};

export default ContentRight;

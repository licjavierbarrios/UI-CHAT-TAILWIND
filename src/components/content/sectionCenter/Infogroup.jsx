import React from 'react';
import { RiAddLine } from 'react-icons/ri';

const Infogroup = () => {
	return (
		<>
			<h1 className="absolute w-full left-0 top-0 flex items-center gap-4 p-4 md:p-8 ">
				<div>
					<img
						src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
						alt="imagen de perfil"
						className="w-14 h-14 md:w-20 md:h-20 rounded-full object-cover"
					/>
				</div>
				<div className="flex-1 flex flex-col md:flex-row gap-2 items-center justify-between">
					<div>
						<h1 className="text-2xl md:text-3xl text-gray-300">Design Team</h1>
						<p className="text-gray-500 text-sm md:text-base">60 members, 10 online</p>
					</div>
					<div className="flex items-center gap-3">
						<div className="flex items-center">
							<img
								src="https://img.freepik.com/foto-gratis/sonriente-hombre-senior-escuchando-musica-auriculares-traves-movil_23-2147859702.jpg"
								alt="imagen de perfil"
								className="w-8 h-8 rounded-full object-cover"
							/>
							<img
								src="https://img.freepik.com/foto-gratis/alegre-mujer-mediana-edad-cabello-rizado_1262-20859.jpg"
								alt="imagen de perfil"
								className="w-8 h-8 rounded-full object-cover"
							/>
							<img
								src="https://img.freepik.com/foto-gratis/mujer-joven-rubia-confiada-brazos-cruzados-que-oponen-al-fondo-blanco_23-2148028933.jpg"
								alt="imagen de perfil"
								className="w-8 h-8 rounded-full object-cover"
							/>
						</div>
						<button className="bg-[#050505] p-2 rounded-full ring-2 ring-gray-300">
							<RiAddLine className="text-gray-300" />
						</button>
					</div>
				</div>
			</h1>
			<div>
				<hr className="border-1 border-gray-700 mt-24" />
			</div>
		</>
	);
};

export default Infogroup;

import React from 'react';
import { RiMore2Fill, RiMore2Line } from 'react-icons/ri';

const Mensajes = () => {
	return (
		<div>
			<div >
				<div className="mt-2 h-full flex gap-4">
					<img
						src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
						alt="avatar"
						className="h-10 w-10 rounded-full object-cover"
					/>
					<div>
						<h4 className="text-gray-300 font-semibold mb-2">
							Killan James <span className="text-gray-500 font-normal text-sm ml-8">10:12 AM</span>
						</h4>
						<div className="flex items-center gap-2 mb-2">
							<p className="bg-[#292a30] py-2 px-4 rounded-r-lg rounded-b-lg text-sm text-gray-500">
								Hi, Are you still Web Designer
							</p>
							<button className="text-gray-500 cursor-pointer hover:text-gray-300 ">
								<RiMore2Fill />
							</button>
						</div>
						<div className="flex items-center gap-2 mb-2">
							<p className="bg-[#292a30] py-2 px-4 rounded-r-lg rounded-b-lg text-sm text-gray-500">
								Would love to see some design 😃
							</p>
							<button className="text-gray-500 cursor-pointer hover:text-gray-300 ">
								<RiMore2Fill />
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* divider */}
			<div className="my-8 relative">
				<p className="text-gray-600 text-sm text-center bg-[#1e1f24] px-4  absolute -top-[11px] ml-[50%] -translate-x-[50%]">
					Today, March 24
				</p>
				<hr className="border-gray-600" />
			</div>
			{/* fin divider */}
			{/* mensaje claudia */}
			<div>
				<div className="h-full flex gap-4">
					<img
						src="https://img.freepik.com/foto-gratis/alegre-mujer-mediana-edad-cabello-rizado_1262-20859.jpg"
						alt="avatar"
						className="h-10 w-10 rounded-full object-cover"
					/>
					<div>
						<h4 className="text-gray-300 font-semibold mb-2">
							Cluadia Maudi <span className="text-gray-500 font-normal text-sm ml-8">10:30 AM</span>
						</h4>
						<div className="flex items-center gap-2 mb-2">
							<p className="bg-[#292a30] py-2 px-4 rounded-r-lg rounded-b-lg text-sm text-gray-500">
								Yes, I am still Web Designer
							</p>
							<button className="text-gray-500 cursor-pointer hover:text-gray-300 ">
								<RiMore2Fill />
							</button>
						</div>
						<div className="flex items-center gap-2 mb-2">
							<p className="bg-[#292a30] py-2 px-4 rounded-r-lg rounded-b-lg text-sm text-gray-500">
								maybe you can see my design in my portfolio 🙏
							</p>
							<button className="text-gray-500 cursor-pointer hover:text-gray-300 ">
								<RiMore2Fill />
							</button>
						</div>
						<div className="flex flex-wrap items-center gap-2 mb-2">
							<img
								src="https://img.freepik.com/foto-gratis/audiencia-emocionada-viendo-fuegos-artificiales-confeti-divirtiendose-festival-musica-noche-copiar-espacio_637285-559.jpg"
								alt="imagen"
								className="h-40 w-32 rounded-lg object-cover"
							/>
							<img
								src="https://img.freepik.com/fotos-premium/gente-disfrutando-fiesta_53876-150249.jpg"
								alt="imagen"
								className="h-40 w-32 rounded-lg object-cover"
							/>
							<button className="text-gray-500 cursor-pointer hover:text-gray-300 ">
								<RiMore2Fill />
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* fin mensaje claudia */}
			{/* respuesta claudia */}
			<div className="mt-4 h-full flex flex-row-reverse gap-4">
				<img
					src="https://img.freepik.com/foto-gratis/abuelo-humoristico-amistoso-barba-blanca-sonriendo-alegria-camara-elegante-ordenado-hombre-negocios-mayor-gafas-regocijandose-resultados-exitosos-trabajo-efectivo-posando-aislado-estudio_343059-4215.jpg"
					alt="avatar"
					className="h-10 w-10 rounded-full object-cover"
				/>
				<div>
					<div className="flex flex-row-reverse items-center justify-start mb-2">
						<h4 className="text-gray-300 font-semibold ml-8 ">Distin Watson</h4>
						<span className="text-gray-500 font-normal text-sm">10:12 AM</span>
					</div>

					<div className="flex flex-row-reverse items-center gap-2 mb-2">
						<p className="bg-purple-600 py-2 px-4 rounded-l-lg rounded-b-lg text-sm text-white">
							Hi, Are you still Web Designer
						</p>
						<button className="text-gray-500 cursor-pointer hover:text-gray-300 ">
							<RiMore2Fill />
						</button>
					</div>
				</div>
			</div>
			{/* fin respuesta claudia */}
			{/* mensaje */}
			<div>
				<div className="h-full flex gap-4">
					<img
						src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
						alt="avatar"
						className="h-10 w-10 rounded-full object-cover"
					/>
					<div>
						<h4 className="text-gray-300 font-semibold mb-2">
							Killan James <span className="text-gray-500 font-normal text-sm ml-8">10:12 AM</span>
						</h4>
						<div className="flex items-center gap-2 mb-2">
							<p className="bg-[#292a30] py-2 px-4 rounded-r-lg rounded-b-lg text-sm text-gray-500">
								Hi, Are you still Web Designer
							</p>
							<button className="text-gray-500 cursor-pointer hover:text-gray-300 ">
								<RiMore2Fill />
							</button>
						</div>
						<div className="flex items-center gap-2 mb-2">
							<p className="bg-[#292a30] py-2 px-4 rounded-r-lg rounded-b-lg text-sm text-gray-500">
								Would love to see some design 😃
							</p>
							<button className="text-gray-500 cursor-pointer hover:text-gray-300 ">
								<RiMore2Fill />
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* fin mensaje */}
			{/* respuesta claudia */}
			<div className="mt-4 h-full flex flex-row-reverse gap-4">
				<img
					src="https://img.freepik.com/foto-gratis/abuelo-humoristico-amistoso-barba-blanca-sonriendo-alegria-camara-elegante-ordenado-hombre-negocios-mayor-gafas-regocijandose-resultados-exitosos-trabajo-efectivo-posando-aislado-estudio_343059-4215.jpg"
					alt="avatar"
					className="h-10 w-10 rounded-full object-cover"
				/>
				<div>
					<div className="flex flex-row-reverse items-center justify-start mb-2">
						<h4 className="text-gray-300 font-semibold ml-8 ">Distin Watson</h4>
						<span className="text-gray-500 font-normal text-sm">10:12 AM</span>
					</div>

					<div className="flex flex-row-reverse items-center gap-2 mb-2">
						<p className="bg-purple-600 py-2 px-4 rounded-l-lg rounded-b-lg text-sm text-white">
							Hi, Are you still Web Designer
						</p>
						<button className="text-gray-500 cursor-pointer hover:text-gray-300 ">
							<RiMore2Fill />
						</button>
					</div>
				</div>
			</div>
			{/* fin respuesta claudia */}
			{/* mensaje */}
			<div>
				<div className="h-full flex gap-4">
					<img
						src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
						alt="avatar"
						className="h-10 w-10 rounded-full object-cover"
					/>
					<div>
						<h4 className="text-gray-300 font-semibold mb-2">
							Killan James <span className="text-gray-500 font-normal text-sm ml-8">10:12 AM</span>
						</h4>
						<div className="flex items-center gap-2 mb-2">
							<p className="bg-[#292a30] py-2 px-4 rounded-r-lg rounded-b-lg text-sm text-gray-500">
								Hi, Are you still Web Designer
							</p>
							<button className="text-gray-500 cursor-pointer hover:text-gray-300 ">
								<RiMore2Fill />
							</button>
						</div>
						<div className="flex items-center gap-2 mb-2">
							<p className="bg-[#292a30] py-2 px-4 rounded-r-lg rounded-b-lg text-sm text-gray-500">
								Would love to see some design 😃
							</p>
							<button className="text-gray-500 cursor-pointer hover:text-gray-300 ">
								<RiMore2Fill />
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* fin mensaje */}
			<hr className='py-5 border-gray-800'/>
		</div>
	);
};

export default Mensajes;

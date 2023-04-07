'use client';

import Image from 'next/image';

type CardProperties = {
	image: string;
	title: string;
	subtitle: string;
};

const Card = ({image, title, subtitle}: CardProperties): React.ReactElement => (
	<div className="group relative flex items-center justify-center bg-gray-700 shadow-lg hover:bg-blue-500 rounded-lg aspect-video w-full transition-colors duration-300 ease-out">
		<div className="relative flex flex-col items-start justify-end w-full h-full bg-gray-950 rounded-lg m-[2px] overflow-hidden p-4">
			<Image
				className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-20 blur-none group-hover:blur-sm saturate-100 group-hover:saturate-0 transition-[filter,opacity] duration-700 ease-out"
				src={image}
				alt=""
				width={300}
				height={530}
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/75"/>
			<div className="absolute inset-0 bg-gradient-to-tl from-blue-500 opacity-0 group-hover:opacity-25"/>
			<h3 className="relative font-bold text-lg text-gray-50">{title}</h3>
			<span className="relative text-sm text-gray-300">{subtitle}</span>
		</div>
	</div>
);

export default Card;

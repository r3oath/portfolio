import * as React from 'react';
import Markdown from 'react-markdown';
import Image from 'next/image';
import {HeartIcon} from '@heroicons/react/20/solid';
import content from '@app/content.json';

const PlaygroundPage = (): React.ReactElement => (
	<div className="mx-auto p-4 w-full max-w-4xl">
		<h1 className="text-4xl lg:text-6xl font-extrabold mt-8 lg:mt-32 text-grey-200">{content.playground.heading}</h1>
		<p className="text-lg lg:text-2xl text-gray-200 mt-8 text-justify markdown">
			<Markdown components={{p: React.Fragment}}>{content.playground.subheading}</Markdown>
		</p>
		<p className="text-md lg:text-lg text-gray-400 mt-4 text-justify markdown">
			<Markdown components={{p: React.Fragment}}>{content.playground.intro}</Markdown>
		</p>
		<div className="hidden lg:block relative border-b border-gray-900 w-full mt-32">
			<div className="absolute flex items-center justify-center left-[50%] top-[50%] -mt-4 -ml-4 w-8 h-8 bg-gray-950 rounded-full">
				<HeartIcon className="w-5 text-gray-700"/>
			</div>
		</div>
		<div className="flex flex-wrap items-center justify-center md:gap-16 mt-8">
			{content.playground.logos.map((logo) => (
				<div key={logo.src} className="w-1/2 sm:w-1/3 p-4 md:p-0 md:flex-1">
					<Image
						className="w-full"
						src={logo.src}
						alt={logo.alt}
						width={200}
						height={200}
					/>
				</div>
			))}
		</div>
		<p className="block lg:flex items-center text-gray-700 mt-6 text-center uppercase text-xs tracking-wider font-bold markdown gap-4 leading-6">
			<span className="border-b border-gray-900 flex-1"/>
			<span className="flex-shrink-0">
				<Markdown components={{p: React.Fragment}}>{content.playground.tooling}</Markdown>
			</span>
			<span className="border-b border-gray-900 flex-1"/>
		</p>
		<p className="text-lg text-center mt-12 lg:mt-32 text-gray-300 max-w-2xl mx-auto">{content.playground.placeholder}</p>
	</div>
);

export default PlaygroundPage;

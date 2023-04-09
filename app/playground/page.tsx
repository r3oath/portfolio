import * as React from 'react';
import Markdown from 'react-markdown';
import Image from 'next/image';
import {CodeBracketIcon} from '@heroicons/react/20/solid';
import content from '@app/content.json';
import ChaosTwo from '@app/components/svg/chaos-two';

const PlaygroundPage = (): React.ReactElement => (
	<div className="relative mx-auto p-4 w-full max-w-4xl">
		<ChaosTwo className="hidden lg:block absolute top-0 -mt-[130px] blur-lg chaos z-0"/>
		<h1 className="relative text-4xl lg:text-6xl font-extrabold mt-8 lg:mt-32 text-grey-200">{content.playground.heading}</h1>
		<p className="relative text-lg lg:text-2xl text-gray-200 mt-8 text-justify markdown">
			<Markdown components={{p: React.Fragment}}>{content.playground.subheading}</Markdown>
		</p>
		<p className="relative text-md lg:text-lg text-gray-400 mt-4 text-justify markdown">
			<Markdown components={{p: React.Fragment}}>{content.playground.intro}</Markdown>
		</p>
		<p className="relative text-md lg:text-lg text-gray-400 mt-4 text-justify markdown">
			<Markdown components={{p: React.Fragment}}>{content.playground.repo}</Markdown>
		</p>
		<div className="hidden lg:block relative border-b border-white/25 w-full mt-32">
			<div className="absolute flex items-center justify-center left-[50%] top-[50%] -mt-4 -ml-6 w-12 h-8 bg-white/5 rounded backdrop-blur">
				<CodeBracketIcon className="w-5 text-gray-200"/>
			</div>
		</div>
		<div className="relative flex flex-wrap items-center justify-center md:gap-16 mt-8">
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
		<p className="relative block lg:flex items-center mt-6 text-center gap-4">
			<span className="border-b border-white/25 flex-1"/>
			<span className="flex-shrink-0 text-white uppercase text-xs tracking-wider font-bold leading-6 markdown">
				<Markdown components={{p: React.Fragment}}>{content.playground.tooling}</Markdown>
			</span>
			<span className="border-b border-white/25 flex-1"/>
		</p>
		<p className="text-lg text-center mt-12 lg:mt-32 text-gray-300 max-w-2xl mx-auto">{content.playground.placeholder}</p>
	</div>
);

export default PlaygroundPage;

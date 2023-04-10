import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {Roboto_Mono} from 'next/font/google';
import Markdown from 'react-markdown';
import ElapsedTime from '@app/components/elapsed-time';
import Card from '@app/components/card';
import content from '@app/content.json';
import ChaosOne from '@app/components/svg/chaos-one';

const robotoMono = Roboto_Mono({subsets: ['latin']});

const HeroSection = (): React.ReactElement => (
	<div className="relative">
		<ChaosOne className="hidden lg:block absolute bottom-0 -mb-[190px] blur-lg chaos z-[-100]"/>
		<div className="lg:absolute rounded-full mx-auto top-[50%] left-[50%] mt-16 lg:-mt-[280px] lg:-ml-[150px] w-[150px] lg:w-[300px] h-[150px] lg:h-[300px] bg-gradient-to-b from-gray-500 p-1 lg:p-2 z-20">
			<Image
				priority
				className="rounded-full w-full h-full object-cover"
				src="/profile-pic.png"
				alt="Tristan's headshot"
				width={300}
				height={300}
			/>
		</div>
		<div className="relative z-30 text-center mt-6 lg:mt-12">
			<h1 className="text-4xl lg:text-6xl text-gray-100 font-extrabold markdown">
				<Markdown components={{p: React.Fragment}}>{content.home.heading}</Markdown>
			</h1>
			<p className="text-2xl text-gray-400 mt-4 max-w-md lg:max-w-full markdown">
				<Markdown components={{p: React.Fragment}}>{content.home.subheading}</Markdown>
			</p>
		</div>
	</div>
);

const CardGridSection = (): React.ReactElement => (
	<div className="mt-16 lg:mt-36 w-full">
		<div className="flex flex-wrap w-full">
			{content.home.cards.map((card) => (
				<Link key={card.title} className="w-full md:w-1/2 lg:w-1/4 p-2" href={card.link}>
					<Card image={card.thumbnail} title={card.title} subtitle={card.description}/>
				</Link>
			))}
		</div>
	</div>
);

const ElapsedTimeSection = (): React.ReactElement => (
	<div className={`lg:absolute left-0 bottom-0 right-0 w-full my-16 flex flex-col items-center justify-center ${robotoMono.className}`}>
		<p className="text-center text-sm">
			<span className="text-green-400">tristan@pixls</span>
			<span>:</span>
			<span className="text-blue-400">~/work</span>
			<span>
				<span>$ ./start-tracker --time-since-first-</span>
				<a className="hover:underline underline-offset-2" href="https://en.wikipedia.org/wiki/Source_lines_of_code">sloc</a>
			</span>
		</p>
		<div className="text-center font-extrabold text-md text-gray-500 uppercase tracking-wider mt-2">
			<ElapsedTime startDate="2006-09-25T00:00:00.000Z"/>
		</div>
	</div>
);

const RootPage = (): React.ReactElement => {
	return (
		<main className="w-screen lg:h-screen flex items-center justify-center overflow-hidden px-4">
			<div className="flex flex-col items-center justify-center m-auto h-full w-full max-w-[90rem]">
				<HeroSection/>
				<CardGridSection/>
				<ElapsedTimeSection/>
			</div>
		</main>
	);
};

export default RootPage;

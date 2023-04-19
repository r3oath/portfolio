import * as React from 'react';
import {lazy, Suspense} from 'react';
import Markdown from 'react-markdown';
import Image from 'next/image';
import Link from 'next/link';
import {CodeBracketIcon, ArrowTopRightOnSquareIcon} from '@heroicons/react/20/solid';
import content from '@app/content.json';
import ChaosTwo from '@app/components/svg/chaos-two';
import {metadata as PodcastAppMetadata} from '@app/components/playground/podcast-app';
import {metadata as GameStreamTournamentMetadata} from '@app/components/playground/game-stream-tournament';
import type {PlaygroundMetadata} from '@app/components/playground/types';

type PlaygroundItem = {
	component: React.ComponentType;
	metadata: PlaygroundMetadata;
};

const items: PlaygroundItem[] = [
	{
		component: lazy(async () => import('@app/components/playground/podcast-app')),
		metadata: PodcastAppMetadata,
	},
	{
		component: lazy(async () => import('@app/components/playground/game-stream-tournament')),
		metadata: GameStreamTournamentMetadata,
	},
].sort((a, b) => {
	return a.metadata.granularity === b.metadata.granularity
		? a.metadata.name.localeCompare(b.metadata.name)
		: a.metadata.granularity.localeCompare(b.metadata.granularity);
});

const PlaygroundPage = (): React.ReactElement => (
	<div>
		<div className="relative mx-auto px-4 pb-48 w-full max-w-5xl overflow-hidden">
			<ChaosTwo className="hidden lg:block absolute top-0 left-[50%] w-[800px] -mt-[100px] -ml-[400px] blur-lg chaos z-[-100]"/>
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
		</div>
		<div className="relative mx-auto px-4 pb-32 w-full max-w-5xl -mt-48">
			<div className="hidden lg:block relative border-b border-white/10 w-full mt-28">
				<div className="absolute flex items-center justify-center left-[50%] top-[50%] -mt-4 -ml-6 w-12 h-8 bg-white/5 rounded backdrop-blur">
					<CodeBracketIcon className="w-5 text-gray-200"/>
				</div>
			</div>
			<div className="relative flex flex-wrap items-center justify-center md:gap-16 mt-8 xl:-ml-24 xl:-mr-24">
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
			<p className="relative block lg:flex items-center mt-6 text-center gap-6">
				<span className="border-b border-white/10 flex-1"/>
				<span className="flex-shrink-0 text-white uppercase text-xs tracking-wider font-bold leading-6 markdown">
					<Markdown components={{p: React.Fragment}}>{content.playground.tooling}</Markdown>
				</span>
				<span className="border-b border-white/10 flex-1"/>
			</p>
			<p className="block lg:hidden text-center max-w-xl mx-auto mt-16 bg-gray-900 border border-gray-600 p-6 rounded-lg">
				<Markdown components={{p: React.Fragment}}>{content.playground.viewport}</Markdown>
			</p>
			<div className="hidden lg:block mt-24 space-y-16">
				{items.map((item) => (
					<div key={item.metadata.name}>
						<h2 className="flex items-center">
							<span className="uppercase text-xs font-bold text-gray-300 tracking-wide bg-gray-800 px-2 py-1 rounded-full">{item.metadata.granularity}</span>
							<span className="ml-2 text-xl">{item.metadata.name}</span>
						</h2>
						<div className="relative flex items-center justify-between markdown">
							<p className="text-gray-400">{item.metadata.description}</p>
							<Link className="flex items-center text-gray-400" href={item.metadata.inspirationSource} target="_blank">
								<ArrowTopRightOnSquareIcon className="w-4"/>
								<span className="ml-2 text-sm">Reference</span>
							</Link>
						</div>
						<div className="border border-gray-800 bg-gray-900 shadow-lg rounded-lg mt-3 p-8">
							<Suspense>
								<item.component/>
							</Suspense>
						</div>
					</div>
				))}
			</div>
			<p className="hidden lg:block text-xs max-w-2xl mx-auto text-gray-400 text-center mt-32">
				<span className="font-bold block text-sm text-gray-300 mb-2">Disclaimer</span>
				<Markdown components={{p: React.Fragment}}>{content.playground.disclaimer}</Markdown>
			</p>
		</div>
	</div>
);

export default PlaygroundPage;

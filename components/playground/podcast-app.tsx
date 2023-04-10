import Image from 'next/image';
import {Roboto_Slab} from 'next/font/google';
import {
	FingerPrintIcon, MusicalNoteIcon, FolderPlusIcon, ArrowDownCircleIcon, UserIcon, Cog6ToothIcon, EllipsisHorizontalIcon,
	PlayCircleIcon, MicrophoneIcon, ArrowTopRightOnSquareIcon, GlobeAltIcon, UsersIcon, ArrowTrendingUpIcon, WalletIcon,
	SparklesIcon, FolderIcon,
} from '@heroicons/react/20/solid';
import type {PlaygroundMetadata} from './types';

type Recommendation = {
	icon: React.ElementType;
	label: string;
};

type Category = {
	icon: React.ElementType;
	label: string;
	stat: string;
};

type Podcaster = {
	name: string;
	avatar: string;
	followers: number;
};

const roboto = Roboto_Slab({subsets: ['latin']});

const metadata: PlaygroundMetadata = {
	name: 'Podcast App',
	description: 'A modern podcast app interface with hints of glassmorphism.',
	granularity: 'page',
	theme: 'dark',
	inspirationSource: 'https://dribbble.com/shots/18909356-Podcast-App-Exploration',
};

const menuIcons: React.ElementType[] = [
	FingerPrintIcon,
	MusicalNoteIcon,
	FolderPlusIcon,
	ArrowDownCircleIcon,
	UserIcon,
	Cog6ToothIcon,
];

const recommendations: Recommendation[] = [
	{
		icon: GlobeAltIcon,
		label: 'Worldwide events',
	},
	{
		icon: UsersIcon,
		label: 'Popular discussions',
	},
	{
		icon: ArrowTrendingUpIcon,
		label: 'Up and coming',
	},
];

const categories: Category[] = [
	{
		icon: WalletIcon,
		label: 'Financial',
		stat: '120+',
	},
	{
		icon: SparklesIcon,
		label: 'Insights',
		stat: '220+',
	},
	{
		icon: FolderIcon,
		label: 'Business',
		stat: '100+',
	},
	{
		icon: UsersIcon,
		label: 'Social',
		stat: '100+',
	},
];

const podcasters: Podcaster[] = [
	{
		name: 'Chance Herwitz',
		avatar: '/avatar-1.jpg',
		followers: 2_234_112,
	},
	{
		name: 'Aspen Aminoff',
		avatar: '/avatar-2.jpg',
		followers: 2_044_153,
	},
	{
		name: 'Sarah Levin',
		avatar: '/avatar-3.jpg',
		followers: 1_255_323,
	},
];

const PodcastApp = (): React.ReactElement => (
	<div className="flex bg-gray-200 rounded mt-16">
		<div className="w-16 border-r border-black/5">
			<ul className="flex flex-col">
				{menuIcons.map((Icon, index) => (
					// eslint-disable-next-line react/no-array-index-key
					<li key={index} className="flex items-center justify-center py-6 w-full cursor-pointer group">
						<Icon className={`text-gray-400 ${index === 0 ? 'text-black' : ''} group-hover:text-black w-5 transition-colors`}/>
					</li>
				))}
			</ul>
		</div>
		<div className="flex flex-col flex-1">
			<div className="relative h-[400px] overflow-hidden -mt-16 shadow-2xl">
				<Image
					className="absolute inset-0 object-cover object-center w-full h-full"
					src="/forest-1.jpg"
					alt="Misty forest"
					width={500}
					height={800}
				/>
				<div className="absolute inset-0 w-full h-full bg-gradient-to-br from-black/50"/>
				<div className="relative flex flex-col h-full">
					<div className="h-2/3 p-10">
						<h2 className="text-5xl max-w-sm">The Twilight Traveller</h2>
						<span className="block w-12 border-b border-white/20 my-6"/>
						<p className="text-sm font-medium">A podcast by Stefano Mandala</p>
						<div className="flex items-center gap-8 mt-2">
							<div className="flex items-cetner gap-2 text-white/75">
								<MicrophoneIcon className="w-4"/>
								<span className="text-sm">80,342 plays</span>
							</div>
							<div className="flex items-cetner gap-2 text-white/75">
								<ArrowTopRightOnSquareIcon className="w-4"/>
								<span className="text-sm">34,458 shares</span>
							</div>
						</div>
					</div>
					<div className="flex items-center h-1/3 translate-y-1">
						<div className="flex items-center justify-center gap-2 w-1/3 bg-white/5 hover:bg-white/25 transition-colors duration-700 backdrop-blur-md h-full cursor-pointer">
							<PlayCircleIcon className="w-5"/>
							<span className="text-sm">Play now</span>
						</div>
						<div className="flex items-center justify-center gap-2 w-1/3 bg-white/5 backdrop-blur-sm h-full border-t border-r border-white/10">
							<MusicalNoteIcon className="w-5"/>
							<span className="text-sm">Music and Art</span>
						</div>
						<div className="flex items-end justify-end w-1/3 h-full pr-2">
							<span className={`${roboto.className} text-9xl/none font-bold opacity-25`}>01</span>
						</div>
					</div>
				</div>
			</div>
			<div className="text-gray-950">
				<div className="p-10">
					<h3 className="font-bold">Recommendations</h3>
					<div className="flex items-center mt-6 gap-2">
						{recommendations.map(({icon: Icon, label}) => (
							<div key={label} className="flex items-center gap-2 border border-gray-300 rounded p-4 cursor-pointer hover:bg-gray-100 hover:shadow-md transition-[box-shadow,background-color]">
								<Icon className="w-5"/>
								<span className="text-xs font-semibold">{label}</span>
							</div>
						))}
					</div>
					<h3 className="font-bold mt-8">Popular today</h3>
					<div className="flex items-center gap-5 mt-6">
						<div className="w-16">
							<Image
								className="saturate-50"
								src="/owl.jpg"
								alt="Owl"
								width={200}
								height={200}
							/>
						</div>
						<div className="flex-1 cursor-pointer">
							<p className="font-bold text-sm">Find a solution to every problem in life</p>
							<span className="text-xs font-bold text-gray-500">Mikael Sumakir</span>
						</div>
						<div className="flex items-center justify-between text-gray-500 border w-28">
							<MusicalNoteIcon className="w-5 cursor-pointer hover:text-black transition-colors"/>
							<PlayCircleIcon className="w-5 cursor-pointer hover:text-black transition-colors"/>
							<EllipsisHorizontalIcon className="w-5 cursor-pointer hover:text-black transition-colors"/>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="w-64 bg-gray-100 rounded text-gray-950 p-8">
			<h3 className="font-bold">Kategori</h3>
			<div className="flex flex-wrap mt-6">
				{categories.map(({icon: Icon, label, stat}, index) => (
					<div key={label} className={`flex flex-col items-center justify-center w-1/2 p-4 border-gray-300 cursor-pointer hover:bg-gray-200 transition-colors ${index === 0 ? 'border-r border-b' : ''} ${index === 3 ? 'border-l border-t -translate-x-[1px] -translate-y-[1px] bg-gradient-to-b from-gray-200' : ''}`}>
						<Icon className="w-5 text-gray-600"/>
						<span className="block text-sm font-bold mt-2">{label}</span>
						<span className="text-gray-500 text-xs mt-1">{stat}</span>
					</div>
				))}
			</div>
			<h3 className="font-bold mt-8">Top Podcaster</h3>
			<div className="mt-6 space-y-4">
				{podcasters.map(({name, avatar, followers}) => (
					<div key={name} className="flex items-center gap-3 cursor-pointer">
						<Image
							className="rounded-full w-10 h-10 object-cover flex-shrink-0"
							src={avatar}
							alt={name}
							width={100}
							height={100}
						/>
						<div>
							<span className="block text-sm/none font-bold">{name}</span>
							<span className="text-xs/none text-gray-500 -translate-y-2">
								{`${followers.toLocaleString()} followers`}
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	</div>
);

export default PodcastApp;

export {
	metadata,
};

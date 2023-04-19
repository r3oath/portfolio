import {useMemo} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
	PlayIcon, CheckBadgeIcon, ChevronLeftIcon,
	EllipsisHorizontalIcon, UserGroupIcon, GlobeAsiaAustraliaIcon,
} from '@heroicons/react/20/solid';
import {BellIcon, CameraIcon, HomeIcon, MagnifyingGlassIcon, TvIcon, UserIcon} from '@heroicons/react/24/outline';
import type {PlaygroundMetadata} from './types';

type AppFrameProperties = {
	children?: React.ReactNode;
};

type NavButtonProperties = {
	icon: React.ElementType;
	isSmall?: boolean;
};

type StreamCardProperties = {
	title: string;
	avatar: string;
	username: string;
	game: string;
	viewers: number;
	thumbnail: string;
};

type GameCardProperties = {
	game: string;
	tagline: string;
	thumbnail: string;
};

type Team = {
	name: string;
	logo: string;
};

type MatchCardProperties = {
	icon: React.ElementType;
	title: string;
	teamA: Team;
	teamB: Team;
	map: string;
	teamAScore: number;
	teamBScore: number;
	totalRounds: number;
	roundsPlayed: number;
};

type RoundsLog = Array<{key: number; played: boolean}>;

type TeamScoreCardProperties = {
	score: number;
	rounds: RoundsLog;
};

const streams: StreamCardProperties[] = [
	{
		title: 'Radiant Ranked | ROAD TO 1M FOLLOWERS !newvid',
		avatar: '/avatar-1.jpg',
		username: 'Subroza',
		game: 'Valorant',
		viewers: 4200,
		thumbnail: '/stream-thumbnail-1.jpg',
	},
	{
		title: '@juliettearz - Deathmatch 💎 | !levlup !steelseries',
		avatar: '/avatar-2.jpg',
		username: 'JulietteArz',
		game: 'Valorant',
		viewers: 5800,
		thumbnail: '/stream-thumbnail-2.jpg',
	},
];

const games: GameCardProperties[] = [
	{
		game: 'Valorant',
		tagline: 'A 5v5 character-based tactical shooter',
		thumbnail: '/game-poster.jpg',
	},
	{
		game: 'Halo Infinite',
		tagline: 'Season 3: Echoes Within',
		thumbnail: '/game-thumbnail-2.jpg',
	},
	{
		game: 'Rainbow Six Siege',
		tagline: 'Master the art of destruction',
		thumbnail: '/game-thumbnail-1.jpg',
	},
];

const matches: MatchCardProperties[] = [
	{
		icon: GlobeAsiaAustraliaIcon,
		title: 'EU HCS 4000 Series',
		teamA: {
			name: 'Navi',
			logo: '/navi-logo.png',
		},
		teamB: {
			name: 'Quadrant',
			logo: '/quadrant-logo.png',
		},
		map: 'Empyrean',
		teamAScore: 9,
		teamBScore: 5,
		totalRounds: 3,
		roundsPlayed: 1,
	},
	{
		icon: GlobeAsiaAustraliaIcon,
		title: 'EU HCS 4000 Series',
		teamA: {
			name: 'Quadrant',
			logo: '/quadrant-logo.png',
		},
		teamB: {
			name: 'Aw0babobs',
			logo: '/aw0babobs-logo.png',
		},
		map: 'Aquarius',
		teamAScore: 6,
		teamBScore: 4,
		totalRounds: 3,
		roundsPlayed: 2,
	},
];

const metadata: PlaygroundMetadata = {
	name: 'Game Streaming & Tournaments App',
	description: 'An app providing an immerse experience for live game streaming and tournaments.',
	granularity: 'page',
	theme: 'dark',
	inspirationSource: 'https://dribbble.com/shots/21218164-UFG-Ultimate-Fanatic-Gamer-Game-Streaming-Tournament',
};

const suffixCount = (count: number): string => {
	const suffixes = ['', 'K', 'M', 'B', 'T'];
	const suffixNumber = Math.floor(`${count}`.length / 3);
	const shortValue = Number.parseFloat((suffixNumber === 0 ? count : count / 1000 ** suffixNumber).toPrecision(2));

	if (suffixNumber < 1) {
		return shortValue.toString();
	}

	return `${shortValue}${suffixes[suffixNumber]}`;
};

const AppFrame = ({children}: AppFrameProperties): React.ReactElement => (
	<div className="relative bg-black rounded-3xl aspect-[10/21] w-[340px] shadow-lg shadow-gray-950 overflow-hidden">
		<div className="absolute w-32 h-3 bg-black top-0 left-[50%] -ml-16 z-40 rounded-b-2xl"/>
		{children}
	</div>
);

const NavButton = ({icon: Icon, isSmall = false}: NavButtonProperties): React.ReactElement => (
	<button className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/30 transition-colors border border-transparent hover:border-white/50" type="button">
		<Icon className={`${isSmall ? 'w-5' : 'w-6'} text-white`}/>
	</button>
);

const GameCard = ({game, tagline, thumbnail}: GameCardProperties): React.ReactElement => (
	<div className="relative flex items-end aspect-[14/15] rounded-xl p-4 overflow-hidden shadow-lg">
		<Image
			className="absolute inset-0 w-full h-full object-cover z-10"
			src={thumbnail}
			alt={game}
			width={200}
			height={200}
		/>
		<div className="absolute bottom-0 left-0 right-0 w-full h-28 z-20 bg-gradient-to-t from-black/80"/>
		<div>
			<span className="block relative z-30 text-lg font-medium">{game}</span>
			<span className="block relative z-40 text-xs text-white/75">{tagline}</span>
		</div>
	</div>
);

const StreamCard = ({username, thumbnail, title, viewers, avatar, game}: StreamCardProperties): React.ReactElement => (
	<div>
		<div className="relative rounded-lg aspect-video overflow-hidden">
			<Image
				className="absolute inset-0 w-full h-full object-cover"
				src={thumbnail}
				alt={title}
				width={300}
				height={169}
			/>
			<div className="absolute flex items-center justify-between top-0 inset-x-0 w-full px-2 pt-2">
				<span className="text-xs bg-black/70 rounded-lg px-2 py-[3px]">{`${suffixCount(viewers)} watching`}</span>
				<div className="flex items-center gap-1 text-xs bg-red-500 rounded-lg px-2 py-[3px]">
					<PlayIcon className="w-3"/>
					<span>Live</span>
				</div>
			</div>
		</div>
		<p className="text-sm mt-2 font-bold">{title}</p>
		<div className="flex items-center mt-2">
			<Image
				className="w-8 h-8 object-cover rounded-full"
				src={avatar}
				alt={username}
				width={32}
				height={32}
			/>
			<div className="flex flex-col ml-2">
				<div className="flex items-center gap-1">
					<span className="text-xs/none font-medium">{username}</span>
					<CheckBadgeIcon className="w-4 text-blue-600"/>
				</div>
				<span className="text-xs/none text-white/50 mt-1">{game}</span>
			</div>
		</div>
	</div>
);

const TeamScoreCard = ({score, rounds}: TeamScoreCardProperties): React.ReactElement => (
	<div className="px-[2px] flex-1">
		<span className="text-xl font-bold">{score}</span>
		<div className="flex items-center justify-between">
			{rounds.map(round => (
				<span key={round.key} className={`block w-1 h-1 rounded-full ${round.played ? 'bg-white' : 'bg-blue-500'}`}/>
			))}
		</div>
	</div>
);

const MatchCard = ({icon: Icon, title, map, teamA, teamB, teamAScore, teamBScore, totalRounds, roundsPlayed}: MatchCardProperties): React.ReactElement => {
	const rounds = useMemo<RoundsLog>(
		() => Array.from({length: totalRounds}, (_, index) => ({key: index, played: index < roundsPlayed})),
		[totalRounds, roundsPlayed],
	);

	return (
		<div className="bg-gray-900 p-3 rounded-lg">
			<div className="flex items-center justify-center gap-2 text-white/75">
				<Icon className="w-5 text-red-600"/>
				<span className="text-sm">{title}</span>
			</div>
			<div className="flex items-start mt-3">
				<div className="w-1/3 text-center bg-gray-900">
					<Image
						className="w-10 mx-auto"
						src={teamA.logo}
						alt={teamA.name}
						width={50}
						height={50}
					/>
					<span className="font-bold text-xs">{teamA.name}</span>
				</div>
				<div className="w-1/3 mx-2 text-center">
					<span className="text-xs font-medium text-gray-200">{map}</span>
					<div className="flex items-center justify-center">
						<TeamScoreCard score={teamAScore} rounds={rounds}/>
						<span className="text-sm mx-1 text-gray-400">vs</span>
						<TeamScoreCard score={teamBScore} rounds={rounds}/>
					</div>
				</div>
				<div className="w-1/3 text-center">
					<Image
						className="w-10 mx-auto"
						src={teamB.logo}
						alt={teamB.name}
						width={50}
						height={50}
					/>
					<span className="font-bold text-xs">{teamB.name}</span>
				</div>
			</div>
			<button className="bg-blue-600 hover:bg-blue-500 text-blue-50 rounded-md px-4 py-2 text-center w-full text-xs mt-4 uppercase font-medium tracking-wide transition-colors" type="button">View the match</button>
		</div>
	);
};

const GameScreen = (): React.ReactElement => (
	<AppFrame>
		<div className="relative flex flex-col justify-between h-full">
			<Image
				className="absolute inset-0 w-full h-full object-cover z-10"
				src="/game-poster.jpg"
				alt="Valorant poster"
				width={500}
				height={800}
			/>
			<div className="absolute inset-0 w-full h-full z-20 bg-gradient-to-t from-gray-950/100 via-gray-950/90 to-gray-950/20"/>
			<div className="flex z-30 p-4 items-center justify-between">
				<NavButton icon={ChevronLeftIcon}/>
				<span>Details</span>
				<NavButton icon={EllipsisHorizontalIcon}/>
			</div>
			<div className="z-40">
				<div className="p-4 pb-0">
					<h1 className="text-5xl font-bold">Valorant</h1>
					<ul className="flex items-center gap-2 mt-1">
						{['FPS', 'Competitive', 'Adventure'].map((tag) => (
							<li key={tag}>
								<span className="rounded-full px-2 py-1 bg-white/10 text-xs font-medium">{tag}</span>
							</li>
						))}
					</ul>
					<button className="rounded-lg border border-white/25 hover:border-transparent hover:bg-blue-700 transition-colors px-5 py-1 text-white text-sm mt-6" type="button">Follow</button>
					<div className="flex items-center justify-between mt-4">
						<span className="text-sm">Lives</span>
						<Link className="text-white/50 text-xs" href="#">See all</Link>
					</div>
				</div>
				<div className="relative flex gap-4 overflow-hidden mt-2 pl-4 pb-4">
					<div className="absolute inset-y-0 right-0 w-36 h-full bg-gradient-to-l from-black/50 pointer-events-none z-50"/>
					{streams.map((stream) => (
						<Link key={stream.title} className="w-3/4 flex-shrink-0" href="#">
							<StreamCard key={stream.username} {...stream}/>
						</Link>
					))}
				</div>
			</div>
		</div>
	</AppFrame>
);

const StreamScreen = (): React.ReactElement => (
	<AppFrame>
		<Image
			className="absolute inset-0 w-full h-full object-cover blur-sm z-10"
			src={games[1].thumbnail}
			alt={games[1].game}
			width={500}
			height={500}
		/>
		<div className="absolute inset-0 w-full h-full z-20 bg-gradient-to-t from-gray-950/100 via-gray-950/90 to-gray-950/20"/>
		<div className="relative flex items-center justify-between p-4 z-30">
			<div>
				<UserGroupIcon className="w-10 text-white cursor-pointer"/>
			</div>
			<div className="flex items-center gap-2">
				<NavButton isSmall icon={TvIcon}/>
				<NavButton isSmall icon={BellIcon}/>
			</div>
		</div>
		<div className="relative flex items-center overflow-hidden gap-4 p-4 z-40">
			{games.map((game, index) => (
				<div key={game.game} className={`w-[90%] -translate-x-[100%] flex-shrink-0 ${index === 1 ? 'z-40 scale-100 hover:scale-105 transition-transform duration-500 ease-out' : ''}`}>
					<Link href="#">
						<GameCard {...game}/>
					</Link>
				</div>
			))}
		</div>
		<div className="relative z-50">
			<div className="flex items-center justify-between p-4 pt-0 pb-0">
				<span className="text-sm">Matches</span>
				<Link className="text-white/50 text-xs" href="#">See all</Link>
			</div>
			<div className="relative flex items-center gap-4 overflow-hidden pl-4 mt-2">
				<div className="absolute inset-y-0 right-0 w-36 h-full bg-gradient-to-l from-black/50 pointer-events-none z-50"/>
				{matches.map((match) => (
					<div key={match.title} className="w-[75%] flex-shrink-0">
						<MatchCard {...match}/>
					</div>
				))}
			</div>
			<div className="flex items-center justify-between p-4 pb-0">
				<span className="text-sm">Popular streams</span>
				<Link className="text-white/50 text-xs" href="#">See all</Link>
			</div>
			<div className="flex items-center gap-4 px-4 mt-2">
				<Image
					className="rounded-lg flex-1 object-cover aspect-square"
					src="/game-thumbnail-1.jpg"
					alt="Streamer 1"
					width={50}
					height={50}
				/>
				<Image
					className="rounded-lg flex-1 object-cover aspect-square"
					src="/game-thumbnail-2.jpg"
					alt="Streamer 2"
					width={50}
					height={50}
				/>
				<Image
					className="rounded-lg flex-1 object-cover aspect-square"
					src="/game-poster.jpg"
					alt="Streamer 3"
					width={50}
					height={50}
				/>
			</div>
		</div>
		<div className="absolute flex items-center justify-around z-50 bottom-0 left-0 right-0 w-full px-6 py-4 bg-black/80 backdrop-blur rounded-t-3xl">
			<HomeIcon className="w-7 flex-shrink-0 text-blue-500 cursor-pointer"/>
			<UserIcon className="w-7 flex-shrink-0 text-white cursor-pointer"/>
			<MagnifyingGlassIcon className="w-7 flex-shrink-0 text-white cursor-pointer"/>
			<CameraIcon className="w-7 flex-shrink-0 text-white cursor-pointer"/>
			<Image
				className="rounded-full w-7 h-7 flex-shrink-0 object-cover cursor-pointer"
				src="/avatar-2.jpg"
				alt="Avatar"
				width={50}
				height={50}
			/>
		</div>
	</AppFrame>
);

const GameStreamTournament = (): React.ReactElement => (
	<div className="flex items-center justify-center gap-16">
		<GameScreen/>
		<StreamScreen/>
	</div>
);

export default GameStreamTournament;

export {
	metadata,
};

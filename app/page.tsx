import Image from 'next/image';
import Link from 'next/link';
import {Roboto_Mono} from 'next/font/google';
import ElapsedTime from '@app/components/elapsed-time';
import Card from '@app/components/card';

const robotoMono = Roboto_Mono({subsets: ['latin']});

const Page = (): React.ReactElement => {
	return (
		<main className="w-screen lg:h-screen flex items-center justify-center overflow-hidden px-4">
			<div className="flex flex-col items-center justify-center m-auto h-full w-full max-w-[90rem]">
				<div className="relative">
					<Image
						priority
						className="absolute rounded-full top-[50%] left-[50%] -mt-[350px] -ml-[250px] w-[500px] h-[500px] object-cover z-10 opacity-10 blur-xl scale-125"
						src="/profile-pic.png"
						alt="Tristan Strathearn's headshot"
						width={500}
						height={500}
					/>
					<div className="lg:absolute rounded-full mx-auto top-[50%] left-[50%] mt-16 lg:-mt-[280px] lg:-ml-[150px] w-[150px] lg:w-[300px] h-[150px] lg:h-[300px] bg-gradient-to-b from-gray-500 p-1 lg:p-2 z-20">
						<Image
							priority
							className="rounded-full w-full h-full object-cover"
							src="/profile-pic.png"
							alt="Tristan Strathearn's headshot"
							width={300}
							height={300}
						/>
					</div>
					<div className="relative z-30 text-center mt-6 lg:mt-12">
						<h1 className="text-4xl lg:text-6xl text-gray-100 font-extrabold">
							Hi, my name is
							{' '}
							<span className="text-blue-500">Tristan.</span>
						</h1>
						<p className="text-2xl text-gray-400 mt-4 max-w-md lg:max-w-full">
							I&apos;m a full-stack web developer, 3D generalist, gamer, and glorified
							{' '}
							<span className="underline text-blue-100 decoration-wavy decoration-2 underline-offset-4 decoration-blue-400 font-extrabold">nerd.</span>
						</p>
					</div>
				</div>
				<div className="mt-16 lg:mt-36 w-full">
					<div className="flex flex-wrap w-full">
						<Link className="w-full md:w-1/2 lg:w-1/4 p-2" href="https://github.com/r3oath">
							<Card image="/open-source.jpg" title="Open Source" subtitle="Libraries, frameworks, and tooling."/>
						</Link>
						<Link className="w-full md:w-1/2 lg:w-1/4 p-2" href="/showcase">
							<Card image="/components.jpg" title="Components" subtitle="Atoms, molecules, and organisms."/>
						</Link>
						<Link className="w-full md:w-1/2 lg:w-1/4 p-2" href="https://www.artstation.com/tristomenace">
							<Card image="/3d-modelling.jpg" title="3D Modelling" subtitle="Hard surface, game assets, and stylised."/>
						</Link>
						<Link className="w-full md:w-1/2 lg:w-1/4 p-2" href="https://500px.com/dunebox">
							<Card image="/photography.jpg" title="Photography" subtitle="Landscape, industrial, and creative."/>
						</Link>
					</div>
				</div>
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
			</div>
		</main>
	);
};

export default Page;

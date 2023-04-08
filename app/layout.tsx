import {Inter} from 'next/font/google';
import './globals.css';

type LayoutProperties = {
	children: React.ReactNode;
};

const inter = Inter({subsets: ['latin']});

const metadata = {
	title: 'Hi, my name is Tristan.',
	description: 'I\'m a full-stack web developer, 3D generalist, gamer, and glorified nerd.',
};

const RootLayout = ({children}: LayoutProperties): React.ReactElement => (
	<html lang="en">
		<body className={`antialiased ${inter.className} bg-gray-950 text-gray-50 selection:bg-blue-500 selection:text-blue-950`}>
			{children}
		</body>
	</html>
);

export default RootLayout;

export {
	metadata,
};

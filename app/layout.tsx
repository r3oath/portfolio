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

const Layout = ({children}: LayoutProperties): React.ReactElement => (
	<html lang="en">
		<body className={`antialiased ${inter.className} bg-gray-950 text-gray-50`}>
			{children}
			{/* <div className="absolute inset-0 bg-gray-950 z-50"/> */}
		</body>
	</html>
);

export default Layout;

export {
	metadata,
};

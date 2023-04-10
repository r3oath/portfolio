type Granularity = 'atom' | 'molecule' | 'organism' | 'page' | 'template';

type Theme = 'dark' | 'light';

type PlaygroundMetadata = {
	name: string;
	description: string;
	theme: Theme;
	granularity: Granularity;
	inspirationSource: string;
};

export type {
	Granularity,
	Theme,
	PlaygroundMetadata,
};

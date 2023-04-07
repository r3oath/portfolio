'use client';

import {useEffect, useState} from 'react';

type ElapsedTimeProperties = {
	startDate: string;
};

const pluralise = (value: number, label: string): string => `${value} ${label}${value > 1 ? 's' : ''}`;

const ElapsedTime = ({startDate}: ElapsedTimeProperties): React.ReactElement => {
	const [label, setLabel] = useState('Loading...');

	useEffect(() => {
		const date = new Date(startDate);

		const interval = setInterval(() => {
			const now = new Date();
			const diff = now.getTime() - date.getTime();

			const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
			const months = Math.floor(diff % (1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24 * 30));
			const days = Math.floor(diff % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24));
			const hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
			const minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
			const seconds = Math.floor(diff % (1000 * 60) / 1000);

			setLabel(`${years} years, ${pluralise(months, 'month')}, ${pluralise(days, 'day')}, ${pluralise(hours, 'hour')}, ${pluralise(minutes, 'minute')}, ${pluralise(seconds, 'second')}`);
		}, 1000);

		return () => { clearInterval(interval); };
	}, [startDate]);

	return (
		<span>{label}</span>
	);
};

export default ElapsedTime;

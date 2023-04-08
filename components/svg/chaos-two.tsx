const ChaosTwo = ({className}: {className?: string}): React.ReactElement => (
	<svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
		<defs>
			<linearGradient
				id="a"
				x1="50%"
				x2="50%"
				y1="0%"
				y2="100%"
			>
				<stop offset="0%" stopColor="hsl(206, 75%, 49%)"/>
				<stop offset="100%" stopColor="hsl(331, 90%, 56%)"/>
			</linearGradient>
		</defs>
		<g fill="none" stroke="url(#a)" strokeLinecap="round" strokeWidth="2">
			<path strokeDasharray="1 8" d="M419.1 118.1c10.4 5 21.1 9 32.3 11.6 11.1.6 22.7-.4 34.5-2.4 11.9-3.1 23.9-6 36-8.2 11.8-1.2 23.5-.5 34.8 2.3a102 102 0 0 1 29.4 19.1c7.8 9 14 18.8 18.5 28.7a60.9 60.9 0 0 1 3.2 26.2 41 41 0 0 1-11 17.4c-7.8 5.6-19.2 15.3-18.4 20.7 4.8 4 13.1 8.7 25 14.3 15.3 6 33.3 12.8 53.2 20.3 20.6 8 40.6 16.5 58.4 25.6 14.5 9.3 24.2 18.9 28.2 28.7-1.7 9.9-9.4 19.8-22.5 29.7a729.6 729.6 0 0 1-55.7 29.4 209 209 0 0 0-41.3 27.4c-3.5 8.7-1.5 17 5.3 25 11.5 8 25.4 15.9 40.3 23.6 15 8.1 28 16.4 37.8 25 6.3 9.3 7.9 19.1 4.8 29.7a190.7 190.7 0 0 1-32.8 37 1950.8 1950.8 0 0 1-107.4 81.2 250.5 250.5 0 0 1-39.7 22.2 33.4 33.4 0 0 1-23.7-2.1c-7.3-7.8-18.1-22-23.4-21.8-3.4 5-7.4 13.9-12.2 26a433.5 433.5 0 0 1-17.2 43.9c-6.7 11.7-14.2 19.2-22.6 21.4-8.5-3-17.8-11.4-27.8-23.7-10-14-20.4-27.7-31.2-39.2a46.1 46.1 0 0 0-33.1-9 201.4 201.4 0 0 0-34 24c-11.2 9.5-22.3 17-33.3 21.1-10.6.7-20.8-3-30.6-10.7a213.9 213.9 0 0 1-25.5-39.3 737.3 737.3 0 0 1-18.6-44c-4.7-11.9-8.5-21.7-11.4-29.5a82 82 0 0 0-24.3-23.3c-5.2-3.4-11-8-17.1-13.7a197.2 197.2 0 0 1-20-21.3 145.6 145.6 0 0 1-15.9-26.7c-3.3-9.6-5.3-19.4-5.7-29.5.6-10 2.6-20.3 5.8-30.5 3.6-10.2 7.6-20.3 11.8-30.1a424 424 0 0 0 9.7-29.5c1.7-9.8 2.9-19.7 3.6-29.8l-.4-31.3c0-11 .5-22.2 2-33.6a181 181 0 0 1 10.2-34.6 180 180 0 0 1 20.3-31.8c8.8-9.1 18.3-17 28.5-23.6 10.5-5.4 21.3-9.4 32.2-11.9a229 229 0 0 1 31.6-2.8c10-.6 19.6-1.5 29-3.2 8.8-3.1 17.5-7.5 26-13.2a623 623 0 0 0 24.4-23c8-7.8 16.1-14.6 24.6-19.6 8.3-3.2 17-4 26.2-2.3 9.2 3.3 18.9 8.1 29.2 13.7"/>
			<path strokeDasharray="3 10" d="M448.2 132c9.8 5.6 19.9 10.4 30.3 13.9 10.5 1.5 21.4 1.7 32.4.7 11-2.2 22-4.4 32.7-6 10.4-1 20.2-.3 29.2 2.2 8.4 4 15.6 10 21.4 17.6 4.8 8.7 8 18.1 9.6 28 .5 9.6-.7 18.9-3.5 27.4a76.3 76.3 0 0 1-12.6 19.8c-6.4 6.8-11.8 17.6-7.4 23.2 7.1 4 17.2 8.7 30.4 14.3 15.7 6 33.5 12.8 52.4 20.4a456.4 456.4 0 0 1 51.8 25.2c11.8 8.8 19 17.7 20.8 26.5-3.3 8.6-12 17-25.5 25.2-16.6 8-35.4 15.8-54.8 23.7-17.5 7.9-31.7 15.8-41.7 23.8-4.8 8.4-4.5 17 .4 25.7 9 9.2 20.8 18.6 33.9 28.3 13.6 10 25.8 20.3 35.4 30.9 7 10.9 9.8 22.2 8.4 33.8a123.4 123.4 0 0 1-26.7 36.6c-15 12.4-32 24.6-50.1 36.3a601.1 601.1 0 0 1-54.6 28.4c-16.5 6-31.4 9.7-44.6 11a67 67 0 0 1-29.6-8.9c-7-5.4-13-11-18.2-16-4.7-2.8-9.2-3.2-14-.4a197 197 0 0 0-15.8 28c-6 14-12.6 28-19.8 40.6-7 10-14.6 15.9-22.5 16.7-7.6-3.9-15.6-12.6-24-25a410.8 410.8 0 0 0-26.4-39.6 47 47 0 0 0-30-13.2 138 138 0 0 0-32.5 18.3 156 156 0 0 1-31.4 20 32.8 32.8 0 0 1-26.2-6.1 133 133 0 0 1-19-34.5 459 459 0 0 1-11.7-44.1c-2.8-13.3-5-25-6.6-35a84.6 84.6 0 0 0-11.3-28.6l-12-7.6a142.9 142.9 0 0 1-36.3-30.7 103.4 103.4 0 0 1-13.8-23.7 79.2 79.2 0 0 1-3.2-26.7c1.5-9.2 4.4-18.6 8.4-28.2 4.4-9.5 9.3-19 14.3-28.6a388 388 0 0 0 12.3-29c2.7-10 4.7-20.1 6.2-30.4.7-10.6 1.2-21.3 1.8-32.3.4-11 1.4-22.2 3-33.3 2.3-11 5.6-21.7 10-32 5.3-9.7 11.8-18.6 19.4-26.4a113 113 0 0 1 27.3-16.8c10.2-3.3 20.8-5.2 31.5-6 10.8-.4 21.6-.2 32.2.2a214 214 0 0 0 30.8-3c9.9-3.2 19.6-7.7 29.2-13.4 9.4-6.8 18.7-14.1 28-21.4 9-6.9 18-12.5 27.2-16.4a53 53 0 0 1 27 .8c9 4 18.3 9.5 28 15.7"/>
			<path strokeDasharray="11 10" d="M471.7 148c9 6.1 18.4 11.6 27.9 15.9a117 117 0 0 0 29.5 3.4l28.8-4c8.9-.9 16.9-.5 23.8 1.5 6.2 3.4 11 8.5 14.4 15.1a69.2 69.2 0 0 1 2.6 25.7 109.3 109.3 0 0 1-20.6 49.2c-4.5 8.3-3.9 22.2 3.8 29.1 8.9 4.9 20.3 10.3 34.2 16.5 15.8 6.5 33 13.8 50.5 21.6a345 345 0 0 1 45.2 24.8c9.3 8.2 14.2 16.2 14.2 24-4.7 7.2-14.1 14-27.9 20.5a1380 1380 0 0 1-53.4 18.4c-17 6.5-31.3 13.3-41.8 20.6-5.8 8-7.2 16.7-4.4 26 6.9 10.2 16.3 20.8 27.2 32a312.1 312.1 0 0 1 31.8 35.6 72 72 0 0 1 10.5 36.7 88.4 88.4 0 0 1-20.9 34.9c-12.9 10.6-28 20.4-44.6 29.2A316.6 316.6 0 0 1 550 642c-16.6 2.3-32 2.4-46 .4a126.3 126.3 0 0 1-33.5-14.2c-8.6-5.7-16.2-10.9-23.1-14.9a24.5 24.5 0 0 0-19.2 3.6 219.4 219.4 0 0 0-20.6 28.9c-7.3 12.9-15 25.5-23 36.4-7.4 8.3-15 12.6-22.4 12.2a76.5 76.5 0 0 1-20.8-26c-6.8-13.6-14-27.3-21.6-39.5-8-9-16.7-14.7-26-16.6-9.8 2-19.9 6.7-30 13a234.1 234.1 0 0 1-29 18.5c-8.5 2.6-16 2-22.5-2a80.3 80.3 0 0 1-13.5-28.4 348.8 348.8 0 0 1-5.9-41.7c-1-13.8-1.7-26.5-2-38-.7-10-1.4-18.5-2.3-25.7a72.8 72.8 0 0 0-19-26.2c-5.6-3.7-11.5-8-17.5-12.8-6.4-5-12.5-10.8-18-17.3a79.8 79.8 0 0 1-12-21.4 63.1 63.1 0 0 1-1-24c2.2-8.2 5.7-16.8 10.5-25.6 5.1-8.7 10.8-17.5 16.6-26.5a370 370 0 0 0 14.8-28 273 273 0 0 0 9-29.9c1.5-10.3 2.8-21 4-31.6 1-10.7 2.3-21.2 4.2-31.6a136 136 0 0 1 9.4-28.2c4.8-8 10.6-15 17.5-20.8a82.6 82.6 0 0 1 24.9-10.7c9.5-1.4 19.4-1.8 29.6-1.3 10.5.6 21 1.4 31.7 2.2 10.7-.2 21.4-1 32-3 10.8-3.2 21.4-7.7 32-13 10.4-6.3 20.8-12.9 31-19.2 10-5.7 19.8-10.1 29.4-12.7a59 59 0 0 1 27.3 3.9c8.8 4.7 17.6 10.8 26.7 17.6" opacity=".9"/>
			<path strokeDasharray="5 2" d="M488.8 164.9a203 203 0 0 0 25 17.6c8.7 3.1 17.5 5 26.1 5.7a440 440 0 0 0 25-2.5c10.5-.8 25 5 28 12.5.7 6.6 0 14.1-2.1 22.5a171 171 0 0 1-10.2 26.2l-11.2 23.7a48 48 0 0 0-2.1 19.5c3 6 8.2 11.9 15.8 18.1 10 6.3 22.1 13 36.1 20.4a1536 1536 0 0 1 47.3 23.7c15 8.2 28.2 16.5 38.4 24.7 7 7.6 10 14.8 8.3 21.5a79.3 79.3 0 0 1-29.4 16.2c-15.9 4.5-33.5 9-51.6 13.8a188.4 188.4 0 0 0-41.6 17.5 32.8 32.8 0 0 0-8.9 25.8 195 195 0 0 0 20.2 34 438 438 0 0 1 27.4 38.5 97.2 97.2 0 0 1 11.4 37.7 66.3 66.3 0 0 1-15.2 32c-10.5 8.6-23.3 16-37.7 21.7a204.5 204.5 0 0 1-47.4 7.2c-15.7-1-30.7-3.9-44.5-8.4-13-5.3-24.8-11.5-35.5-18-9.8-5.6-19-10.2-27.5-13.3a44.2 44.2 0 0 0-24.7 6.4c-8.4 7.5-17 17.2-26 28.2a370.4 370.4 0 0 1-26.2 31.7c-8 6.5-15.6 9.3-22.7 7.8a77.5 77.5 0 0 1-17.8-26.5c-5.4-13.4-11-26.8-17-39a50.5 50.5 0 0 0-21.8-19.3c-8.6.3-17.7 3.3-26.9 8-9.2 6.2-18.1 12-26.3 16.7-7.6 3.3-14.1 4-19.4 1.8a45.3 45.3 0 0 1-9.5-21.9 280.8 280.8 0 0 1-1.5-37.3c.3-13.4 1-26.5 1.7-38.7.2-11.3.2-21.5-.1-30.6-1.3-7.9-3.2-15-5.7-21.2a121 121 0 0 0-12.4-16c-5.5-4.9-11.3-10-17.1-15.4-6.1-5.5-11.8-11.3-16.8-17.7a68 68 0 0 1-10.2-20.1 53 53 0 0 1 1-21.7c2.9-7.4 7-15 12.4-23 5.8-7.8 12-15.8 18.5-24 6-8.3 11.7-17 17-25.9 4.4-9 8.2-18.4 11.5-28 2.4-9.9 4.4-19.8 6.3-29.7 1.4-9.8 3-19.3 5-28.5a112 112 0 0 1 8.5-23.7c4.1-6.3 9.1-11.6 15-15.5 6.4-3.1 13.6-5 21.5-5.7 8.5-.2 17.5.5 26.9 1.8 9.8 1.1 20 2.2 30.3 3a208 208 0 0 0 32.6-3c11.2-3.3 22.5-7.5 33.8-12.4 11.3-5.6 22.5-11.2 33.4-16.3 10.6-4.5 20.9-7.6 30.7-8.9a65 65 0 0 1 27.1 7c8.4 5.4 16.6 12 24.8 19.3" opacity=".9"/>
			<path strokeDasharray="10 2" d="M499.5 181.6a228 228 0 0 0 21.8 18.8 82.4 82.4 0 0 0 22.5 7.5c7.6 0 14.7-.5 21.2-1.2 14 .8 19.9 16.6 16.5 27-2.9 7.8-6.4 16.1-10.3 24.6-3.3 8.5-6.3 17-8.6 25.2-.8 8.1-.2 16 2 23.9 4.5 7.7 10.9 15.5 19.3 23.5 10.5 8.1 22.6 16.5 36 25.3 14.4 8.6 29 17.6 42.9 26.6a206 206 0 0 1 31.4 25c5 7 6 13.5 3 19.2a96 96 0 0 1-30.4 12.6l-49.6 9.8c-16 3.9-30 8.6-41.2 14.5a37.5 37.5 0 0 0-12.9 24.5c2.5 10.6 7.2 22.1 13.6 34.5 7.7 12.8 15.5 26 22.4 39.2A128.2 128.2 0 0 1 611 599a51 51 0 0 1-9.7 28.2c-8 6.6-18 11.5-29.7 14.7a146.4 146.4 0 0 1-40.3-1c-14-3.6-27.6-8.6-40.6-14.7a672.5 672.5 0 0 1-35.6-19.9c-10.8-5.3-21.1-9.3-31-11.5-10 .3-20 3-30.2 8a294 294 0 0 0-31 26 332 332 0 0 1-29.3 26.4c-8.5 4.7-16.1 6-22.8 3.5a77.4 77.4 0 0 1-15.3-26.8c-4.2-13-8.4-26-12.9-38-5.1-9.9-11-17-17.4-21.3-7.4-1-15.2.4-23.3 3.7l-23.7 14.5c-9.8 4.5-22-.5-24.4-10.6-.5-9.2 0-20 1.1-31.7 1.2-12.4 2.7-25 4.2-37.3 1-12 1.6-23.2 1.8-33.6-.8-9.7-2.3-18.6-4.5-26.8-3.2-7.6-7-14.7-11.4-21.5-5.1-6.5-10.4-13-15.8-19.4a176.8 176.8 0 0 1-15-19.3 65 65 0 0 1-8-19.9c-.5-6.5.4-13.2 2.9-20 3.4-6.6 8-13.4 14-20.4 6.1-6.8 12.9-13.9 19.9-21.2 6.5-7.3 12.9-15 18.8-23 5-8 9.6-16.5 13.6-25.1 3-8.8 5.7-17.6 8-26.3 1.8-8.5 3.6-16.8 5.6-24.5 2-7.2 4.3-13.7 7.2-19.2a47.3 47.3 0 0 1 29.8-13.2c7.3.6 15.1 1.8 23.5 3.3 9 1.2 18.5 2.3 28.5 2.9 10.4-.4 21.3-1.6 32.4-3.6a408 408 0 0 0 34.8-11.2c11.7-4.7 23.3-9.2 34.5-13.1 11-3.1 21.4-4.9 31.2-5 9.3 1.5 18 4.8 26.1 9.8 7.8 6 15.3 13.2 22.6 20.7" opacity=".8"/>
			<path strokeDasharray="5 7" d="M504.1 197.2c6.4 7.3 12.6 14 18.6 19.6a70.6 70.6 0 0 0 19 8.9c9.5.4 25.3-1.3 30.6-1.4 3.4 1.7 3 12.3-.2 21-2.5 7-5.4 14.6-8.5 22.8a177 177 0 0 0-5.3 26.5 96 96 0 0 0 5.5 28 167 167 0 0 0 20.9 29c10.2 10 21.7 20 34 30.3 12.7 10 25.3 20 37 29.7a154 154 0 0 1 24.2 25.4c3 6.8 2.3 12.7-2 17.6a114 114 0 0 1-31 9.6c-14.7 2-30.8 4-47.3 6.4-15.4 2.8-29 6.5-40.4 11.5a41.9 41.9 0 0 0-16.3 22.4c.5 10 3.2 21 7.5 33 5.8 12.4 12 25 17.7 37.7 5.5 12.3 9.5 24 11.7 34.5.7 9.6-.8 17.7-4.4 24-5.4 5-12.6 8-21.3 9-9.9-.4-20.6-2.6-32-6.6-11.7-5-23.5-11.1-35.2-18-11.7-6.9-23.2-13.7-34.3-19.9a130 130 0 0 0-33.6-9.5c-11.4.8-22.9 3.6-34.5 8.5a377 377 0 0 0-35.2 22.8 286.3 286.3 0 0 1-31.7 20.6c-8.8 3-16.4 2.9-22.8-.6a76.5 76.5 0 0 1-13-27c-3.2-12.5-6.1-25-9.3-36.8a64.1 64.1 0 0 0-13.2-22.5 31 31 0 0 0-19.7-.1c-7.4 3.7-14.6 8-21.2 12-9 5-20.3 4.2-22.3-2.7-.3-7 .4-15.7 1.8-25.6l5.2-34.3a542 542 0 0 0 3-34.9c-.3-11-1.3-21.3-3-31a202 202 0 0 0-9.6-26.8c-4.4-8.1-9-16-13.5-23.7-4.7-7.3-8.9-14.6-12.4-21.8a68 68 0 0 1-5.6-20.4c.2-6.3 1.8-12.6 4.8-18.8 4-6 9-12 15.3-18 6.5-6 13.6-12 21-18.1 6.9-6.3 13.6-12.7 20-19.5 5.6-6.9 10.7-14 15.1-21.3 3.6-7.5 6.6-14.9 9.3-22.1l5.8-20.1c2.6-8.4 9.7-19.8 14.7-22.6 6.4-1 23.5.8 34.3 2.8 8.1.8 16.9 1.5 26.3 1.6 10-.7 20.5-2 31.5-4.1 11.4-3 23-6.3 34.7-10 11.8-3.7 23.4-7.1 34.5-9.8 10.9-1.8 21-2.2 30.5-1.2 8.9 2.5 17 6.7 24.4 12.3a195 195 0 0 1 20 21.7" opacity=".8"/>
			<path strokeDasharray="0 11" d="M504 210.9c5.4 7.4 10.4 14.1 15.3 19.9 8 6.2 24 11.1 31.2 10.9 10.6-.8 15.3 7.2 13.3 14.5l-5.3 21.1c-1.2 8.6-1.9 17.8-1.7 27.5 1.4 10.1 4 20.6 8 31.5 5.6 11 12.5 22.4 20.7 34a749.7 749.7 0 0 0 30.2 34.6c10.7 11.1 21 22 30.2 32.3 7.8 9.5 13.7 18.1 17 25.9.9 6.5-1.2 11.9-6.5 16.2-7.8 3.2-18.4 5.5-31.4 7.1l-45 3.5a198 198 0 0 0-39.4 8.5c-8.7 5.1-15 11.6-18.8 19.4-1 9-.1 19 2.3 29.9 4.1 11.4 8.8 23 13.5 34.6a284 284 0 0 1 11.5 31c1.8 11.8-4.8 24.7-12.8 25.3a93 93 0 0 1-23.5-9.5 501.5 501.5 0 0 1-29.2-18.5 411.9 411.9 0 0 0-32.1-18c-11.4-4-23-6.6-34.8-7.4a155 155 0 0 0-37.6 8.2c-13 5.7-25.7 12.1-38.1 18.8-12 6.2-23 11.3-33 14.7a30 30 0 0 1-22.4-4.5c-4.8-6.8-8.5-16-11-27.1-2.3-12-4.3-24-6.2-35.3a79 79 0 0 0-9.6-23.3 22.8 22.8 0 0 0-16.1-3.4c-6.5 2.5-13 5.8-19 9.3-14.3 6-22.8-5.6-21.5-17 1.3-9.2 3-19.5 4.7-30.3 1.4-11.3 2.6-22.9 3.4-34.3 0-11.6-.5-22.8-1.7-33.7a297 297 0 0 0-7.3-30.9c-3.4-9.5-7-18.7-10.5-27.6-3.5-8.5-6.6-16.6-9-24.4-2-7.4-3-14.5-2.8-21.3 1-6.3 3.4-12.3 7-18 4.3-5.5 9.8-10.7 16.3-15.9 6.8-5 14-10 21.6-15a435 435 0 0 0 20.7-15.5c5.9-5.6 11.2-11.4 16-17.1 3.9-6 7.2-12 10-17.7 3.1-8.4 7.8-22.3 10.1-27.3 7-5 25.2-5 34.5-4 7.3.2 15.3.2 24-.2 9.5-1.1 19.6-2.8 30.1-5 11-2.6 22.4-5.6 33.7-8.5 11.4-2.9 22.6-5.2 33.2-6.7 10.4-.6 20 0 28.7 2.2a72.5 72.5 0 0 1 22.1 14.2c6.2 6.9 11.9 14.4 17 22.2" opacity=".8"/>
			<path strokeDasharray="9 5" d="M500.7 222.5c4.3 7.3 8.3 14 12.2 20a53.8 53.8 0 0 0 26.6 13c10.5-.7 18 5.6 17.7 11.9l-1.3 19.9c0 8.5.6 17.9 1.9 28a247 247 0 0 0 9.7 34 395.4 395.4 0 0 0 19.1 37.3c8 12.7 16.5 25.3 25 37.8 8.5 11.9 16.2 23.3 22.8 34a82.3 82.3 0 0 1 9.9 26c-1 6.1-4.5 11.1-10.8 15-8.3 2.5-18.8 4.1-31.4 5l-42.8 1.1c-13.9 1-26.6 2.7-37.8 5.5-8.9 4-15.7 9.2-20.4 15.6a63.8 63.8 0 0 0-1.8 25.7c2.7 10 6 20.3 9.9 30.3 4.2 10 8 19.1 11.1 27.1 2.9 15.2-8.7 16.7-17.5 10.6L479.4 604c-9.2-5.5-19-10.6-29.4-14.8a148 148 0 0 0-34.9-5.1 219.2 219.2 0 0 0-39 7.4 956.9 956.9 0 0 0-39.4 14.3 190.3 190.3 0 0 1-33.1 9c-8.7-.3-15.9-3-21.4-8a76.9 76.9 0 0 1-9.3-27 810 810 0 0 1-3.5-33.7c-1.7-9.7-3.7-17.7-6.4-23.7-6-5-21.7-4-30.1 0-14.4 6-25.4-.3-25.2-9.1a939.8 939.8 0 0 0 5.6-58.5c.1-11.5 0-23-.7-34.5a465.9 465.9 0 0 0-4.8-33.4l-7-30.4c-2.3-9.4-4.2-18.2-5.4-26.6-.8-7.8-.7-15.2.5-22a53.2 53.2 0 0 1 9-17.4c4.8-5 10.6-9.5 17.2-13.8 7-4.2 14.4-8.1 21.8-11.9 7.3-4 14.3-7.9 21-11.8 6-4.2 11.4-8.5 16.3-12.8a138 138 0 0 0 16-25.5c3.6-8.5 11.7-14.9 16.7-15.1 4.1-.3 9-.4 14.8-.5 6.5-.6 13.9-1.4 22-2.5a845 845 0 0 0 28.2-5.8c10.4-2.5 21-5 31.7-7.3 10.7-2 21-3.4 31-3.9 9.4.4 18.1 2 26 5 7.2 4 13.6 9.3 19.2 15.6 5.2 7 9.8 14.6 13.9 22.3" opacity=".7"/>
			<path strokeDasharray="5 1" d="M495.8 232.3c3.4 7.3 6.5 14 9.5 19.8 5.4 6.9 17 14.2 23 15.4 11.1.3 22.3 6.4 24.1 12.3 1.1 5.3 2 11.7 3 19.1 1.4 8.4 3 17.8 5.2 28.1 2.8 11 6.3 22.8 10.6 35.1 4.9 12.8 10.5 25.9 16.6 39.1a3484 3484 0 0 0 19.3 39.1c6 12.2 11.1 23.7 15.2 34.4 2.8 9.6 4 18 3 25.2a27.4 27.4 0 0 1-14.4 13.6c-8.6 2-19.2 3.1-31.3 3.4-12.9-.2-26.4-.7-40.3-1-13 0-25.2.8-36 2.4-8.8 2.8-16 6.7-21.2 11.6a45.3 45.3 0 0 0-4.7 21c1.4 8.4 3.8 17 6.8 25.4 3.6 8.6 7.2 16.4 10.6 23.2 4.3 14.3-11.4 4.6-21.4-2-8-4-17-7.6-26.6-10.5-10.7-2-22-2.9-34-2.7a321 321 0 0 0-39 6.3l-38.8 10a153 153 0 0 1-32 3.8 35.1 35.1 0 0 1-19.8-11 78.2 78.2 0 0 1-7.6-26.7c-.9-11-1.2-21.8-1.4-32.2-.8-9.4-2-17.4-3.7-23.8-4.6-6-18-8.3-25.8-6-14.8 5-29 1.6-30.5-5.1-.5-6.2-.5-13.6 0-21.9l1.2-29.7c.1-11 0-22.3-.3-33.7-.6-11.5-1.5-22.9-2.6-34l-3.5-31.8c-1-9.8-1.6-19-1.6-27.6.5-8 1.7-15.5 3.8-22.2a58.5 58.5 0 0 1 11-16.6 94.5 94.5 0 0 1 18-12 268 268 0 0 1 21.8-9l20.7-8.3c8.7-4.5 22.2-13.8 26.9-18.5 8-14.3 16-23.7 20.2-25 6-1.7 22.7-5.5 33.5-8.1l26.1-6.6a484 484 0 0 1 29-6.2 165 165 0 0 1 27.9-1.6c8.4 1.2 16 3.6 22.7 7 6.2 4.5 11.5 10 16 16.5 4.1 7 7.7 14.4 10.8 22" opacity=".7"/>
			<path strokeDasharray="0 8" d="m491 241.2 7 19.5a53 53 0 0 0 20.4 18c12 2.1 27.1 9.6 31 15.5a143 143 0 0 1 7 18.8l7.9 27.7c3.2 11 6.8 22.6 10.7 34.9 4.3 12.7 8.9 25.7 13.6 39 4.7 13 9.3 26 13.5 38.4 3.7 11.9 6.5 23 8.2 33.1a55 55 0 0 1-2.9 23.5c-4 5.3-9.9 9.3-17.5 11.9-8.9 1.6-19.3 2-31 1.7-12-.7-24.7-1.8-37.6-3-12.2-.7-23.6-.8-33.7-.3a60.7 60.7 0 0 0-21.3 7.6 32 32 0 0 0-6.8 16 89 89 0 0 0 4.3 20.8c3 7.2 6.2 13.9 9.5 19.8 4.1 12.8-19.6 3.8-32.6 1.2-10-.8-20.8-1-32.3-.3-12.1 1.2-24.7 3-37.3 5.2-12.8 2.3-25.2 4.5-36.9 6.2-11 .9-21 .8-29.7-.6a37.4 37.4 0 0 1-17.6-13.5A81 81 0 0 1 281 556c-.4-10.3-.1-20.7.3-30.5-.2-9.1-.7-17.1-1.7-23.7-3.3-7.1-14.6-12.6-21.8-12-8 1.7-22.5 4.1-28.2 3.3-4.7-3.2-10-16.7-11.3-27-.5-8-.8-17-.9-26.5l-.5-31.5-1-33c-.3-10.9-.5-21.4-.5-31.4.2-9.7.8-18.9 1.9-27.3a98 98 0 0 1 6.7-21.6c3.5-6 7.8-11.1 12.9-15.5a91 91 0 0 1 18.6-10.1c7-2.6 14.3-4.7 21.5-6.5 7-2 13.8-3.7 20.2-5.3 8.6-2.8 22.2-9 27-12.2 9-12.1 17.5-22.7 21.7-25.4a305.7 305.7 0 0 1 81.3-25.2c8.5-.8 16.6-.8 24.2.2a57.1 57.1 0 0 1 19 8.4c5 4.6 9.1 10.2 12.5 16.6 3.2 6.8 5.8 14 8 21.3" opacity=".7"/>
			<path strokeDasharray="8 9" d="M487.5 250.3c2.5 10 8.4 26.4 12.3 32.3 7.4 5.5 15.3 9 23.4 12 9 3 17 8.3 24.2 16.5 7 11.2 13.6 26.5 20.2 45.4 6.9 21.7 14 45.7 21 70.5a327 327 0 0 1 10.4 66.4 39.4 39.4 0 0 1-27.5 30.4c-9 1-19 1-30 0-11.4-1.2-23.2-2.9-35-4.7a428.6 428.6 0 0 0-31.3-2.9c-8.2.6-15.2 1.9-20.7 4-6.8 7.5-8.5 17.4-6.2 28 5 12.4 10.8 22.7 15.9 29.9 3.8 7.1-11.7 6.3-33 4.7-19.2 1-41.3 3.2-64.5 6.3a189 189 0 0 1-60-1.2 38.8 38.8 0 0 1-15-15c-2.6-7.6-3.9-16.1-4-25.5 0-9.8.7-19.5 1.6-28.9.4-8.8.5-16.7.1-23.5-3.8-10.2-10.1-15.8-18.2-17.8-10.8.2-21 .4-29.7-1.2-8.2-4-14-11.9-17.5-23.5a349.5 349.5 0 0 1-4.8-51.8c-.2-20.5.3-41 1.6-60 2.7-18 7.1-33.5 13.8-45.8 4.1-5.4 9-10 14.3-13.9a89.4 89.4 0 0 1 19-8.2c6.9-2 14-3.3 21-4.3 6.8-1.1 13.4-2 19.6-2.8 11.3-2.5 20.5-5 27.6-7.4 5.3-4.3 9.4-8.4 12.8-12.2a56 56 0 0 1 13.6-14.7c7.8-5.8 18-11.3 30.6-16.6a203 203 0 0 1 44.3-11.8 56 56 0 0 1 35.4 10.6 61.6 61.6 0 0 1 9.4 16.4c2.1 6.5 3.9 13.3 5.3 20.3" opacity=".6"/>
			<path strokeDasharray="5 7" d="M486 260.8a142 142 0 0 0 9.1 32.6c6.6 6.6 14.4 12 22.8 16.8 9.7 4.7 19 11.2 27.7 20.3a191.2 191.2 0 0 1 23.7 44.1 615 615 0 0 1 17.6 64.5c3.2 22 4 42 1.4 58.4a43 43 0 0 1-32.2 24.2c-18.1 0-39-3.1-60.7-8.1a224 224 0 0 0-48.5-4.2 21.2 21.2 0 0 0-9.6 20.6c3.2 10.5 7.6 20 11.7 27.5 3 7.4 3.5 12.1.7 14.7-6.3 2.7-16.8 4.5-31.2 6.2-17.5 2.5-37.5 5.2-58.3 7.4-20.4 1-38.3-.6-52-6-9.8-9.4-14.4-23.1-14.4-40.3 1.3-18.4 3.4-35.8 4.5-50.4-2.6-11.2-7.6-18.7-14.7-23-10-2.4-20.4-4.3-29.9-7.2a47.8 47.8 0 0 1-22.4-22.1c-4.5-13-7.1-28.5-8.3-45.6-.3-18.2.7-36.4 3.1-53.6 3.8-16.1 9.5-29.9 17.2-40.7 9.5-9 21-15 34-18 13.8-2.5 27.2-3.3 39.7-3.3a364 364 0 0 0 28.6-4c6.3-3.4 11.6-7.2 16.4-11.1 4.8-5.7 10.4-11.3 17.4-16.9a139.3 139.3 0 0 1 69.2-29.5c11.5.5 21 4.4 28 11.7 5 9.6 7.9 21.6 9.4 35" opacity=".6"/>
			<path strokeDasharray="7 4" d="M486.4 273.6c1 12 3 23 6.4 32.7 5.8 7.9 13 14.8 21.4 21.5a166 166 0 0 1 29 24.2 184 184 0 0 1 25 42.3c6.4 18 11.4 37.3 14.5 56.8 1.2 18.6-.3 35.2-5 48.5a45.8 45.8 0 0 1-34.3 17.1 266.1 266.1 0 0 1-55.7-11.4 312 312 0 0 0-44.8-8.4c-8 3-12 8-13 14.6 1.1 9 3.5 17.8 5.7 25.7 1.4 8.4.8 15.2-2.8 20.4a79.8 79.8 0 0 1-29.8 13.3 358.3 358.3 0 0 1-51.5 8.3 88 88 0 0 1-43.3-9c-7.4-9.6-10.4-22.9-9.5-39 2.1-17.1 4.9-33.6 6.7-48a48 48 0 0 0-11-27.8c-9-4.8-18.7-9-28.3-13.6a70.8 70.8 0 0 1-25.3-22.4 124 124 0 0 1-11.4-39.9c-.7-15.5.4-31.2 3.2-46a92 92 0 0 1 18.8-34.3 74.9 74.9 0 0 1 33.8-13.6c13.3-1.3 26.4-1 38.6 0 11.3-.2 21.3-.6 30-1.4 7.6-2.8 14.4-6.1 20.9-10 6.3-5.7 13.4-11.6 21.5-17.6 9-7 19.1-13.3 30.4-18.9 11.5-5.1 23-8.4 33.7-9.2a28 28 0 0 1 21.3 12.3c3 9 4.4 20.2 4.8 32.8" opacity=".5"/>
			<path strokeDasharray="2 11" d="M488.3 289.5c.1 11.3 1.2 22.3 3.8 32.6 4.8 8.8 11.2 17.1 19 25.4 9.1 8 18.7 17 28 27.4a186.4 186.4 0 0 1 24.4 39.8c5.9 15.6 9.8 32 11.7 48-.2 15-3 28-9 37.8a47.5 47.5 0 0 1-33.8 10 267.5 267.5 0 0 1-50.2-14.4 404.7 404.7 0 0 0-41.2-11.5c-8.3 1.3-13.5 4.7-16.3 9.7-1.2 7.6-1.3 15.7-1.5 23.7-.8 9-3.3 17-8.1 23.8-7 7.1-16.9 13.1-29.3 18-14 4.5-29.4 7.6-44.7 8.7-14-.5-26-4-34.4-10.6a59.7 59.7 0 0 1-5-36.7c3-15.7 6.3-31.2 8.8-45.4a66.4 66.4 0 0 0-7.1-31.3c-7.5-7-16-13.2-25-19.6a108.3 108.3 0 0 1-25.7-23.7c-6.4-10.3-11-22.2-13.4-35-1.2-13-.3-26 2.5-38.1a67.7 67.7 0 0 1 18.6-27.4 74.8 74.8 0 0 1 32.7-9.1c12.7-.1 25.3 1 37.3 2.7 11.4.6 21.9 1 31.5.8 8.8-2 17-4.8 25.2-8.3 8-5.2 16.5-10.7 25.7-16.4 9.4-6.4 19.6-12.3 30.2-17a77 77 0 0 1 28.8-7.1c7 1.4 12.3 5.6 15.4 12.6 1.5 8.3 1.7 18.7 1.1 30.6" opacity=".5"/>
			<path strokeDasharray="6 7" d="M490.8 308.4a144 144 0 0 0 1.3 32c3.7 9.5 9 18.9 15.5 28.3 8 9 16.5 18.7 25 29.4 8.4 11 15.9 23.3 22 36.5a137 137 0 0 1 9.1 39 44.5 44.5 0 0 1-10.5 27.4 49.7 49.7 0 0 1-31.6 3c-14-3.7-29-9.5-44.3-16.5a427 427 0 0 0-37.7-13.7c-8.6 0-15 2-19.6 5.6-3.4 6.3-6 13.5-8.9 21-3.2 8.8-7.7 17-14 24.6a97.2 97.2 0 0 1-29 19.8 126.4 126.4 0 0 1-38 8.4 38 38 0 0 1-26.1-11c-3.3-8.7-3.4-20-.8-33.6 3.5-14.3 7.4-28.7 10.5-42.4 1-12.4 0-23.5-3-33.4a169.5 169.5 0 0 0-20.2-24.5 173 173 0 0 1-23.6-25.2 97.4 97.4 0 0 1-13.8-30.8 76.5 76.5 0 0 1 1.5-30.9A47.2 47.2 0 0 1 272 301c8.7-3.5 19-5.1 30.6-4.8 11.9.9 23.9 2.8 35.7 5a387 387 0 0 0 32.6 3c9.8-1.1 19.4-3 28.8-5.8 9.3-4 18.8-8.6 28.6-13.2 9.8-5.3 19.7-10 29.6-13.7 9-3.3 17.3-4.8 24.2-4.1 5.3 1.7 8.9 6 10.5 12.8.4 7.6-.5 17.2-1.8 28.3" opacity=".5"/>
			<path strokeDasharray="10 5" d="M492.7 330c-1.4 10-1.9 20.4-1.1 31 2.4 9.6 6.3 19.4 11.3 29.4 6.4 9.4 13.3 19.4 20.2 29.9a204.4 204.4 0 0 1 18.4 32.4 92.2 92.2 0 0 1 6.7 30.5c-1.2 8-4.7 14.1-10.5 17.8-7.4 1.8-16.8.9-28-2.6-12-4.7-25-11-38.3-18.2a374.3 374.3 0 0 0-34.4-15 44.7 44.7 0 0 0-22.4 2 132.7 132.7 0 0 0-15.6 17.3 140.2 140.2 0 0 1-19.2 22.8c-8.3 7.4-18 13.8-28.6 18.8a91.3 91.3 0 0 1-31.5 7.3c-8.5-1-15-4.5-18.9-10.7a69.7 69.7 0 0 1 2.8-30c4-12.7 8.4-25.8 12.1-38.7 2-12 2.5-23.4 1-34a147 147 0 0 0-14.2-27.7 311.4 311.4 0 0 1-19.4-26.2c-5.7-8.9-10-18-12.5-27.3-1.7-8.8-1.4-17 .8-24.4A32 32 0 0 1 287 300a79 79 0 0 1 27.8-1c11 1.9 22.3 4.4 33.7 7.3 11.1 2.2 22.1 4 33 5.2 10.3 0 20.6-.8 30.9-2.3 9.9-2.7 20-5.8 30-8.8 9.5-3.7 19-6.8 27.8-9 11.2-2.1 25 3.7 26.6 12.4-.6 7-2.2 15.9-4.1 26.2" opacity=".4"/>
			<path strokeDasharray="9 2" d="M492.9 353c-2 9.3-3.2 19.2-3.5 29.2 1.2 9.5 3.5 19.2 6.8 29 4.6 9.4 9.6 19 14.6 28.7 5.4 9.3 10 18.7 13.7 27.8 4 12.3 1.5 29.6-5.3 32.7a65.5 65.5 0 0 1-23.8-7c-10-5.3-21-11.8-32.4-19-11-6.2-21.6-11.6-31.3-15.7-8.8-2-16.9-2.4-24.3-1.2a122 122 0 0 0-20.6 12.6c-7 6.3-14.5 12.6-22.8 18.7a136.8 136.8 0 0 1-27.3 15.8c-9.2 3.7-18 5.6-25.6 5.5a15.5 15.5 0 0 1-12.7-10.2 78.7 78.7 0 0 1 5.5-26.3c4.4-11 9.1-22.7 13.4-34.5 3-11.3 4.7-22.3 5-33-1.6-9.8-4.4-19.4-8-28.7-4.7-8.8-9.4-17.5-13.7-26.2a106 106 0 0 1-9.6-24c-1.3-10.4 6-25 14.6-28.3 6.8-.6 15.2.2 24.8 2.3 9.9 2.6 20.3 5.7 31 9.1 10.6 3 21.3 5.5 32 7.7a284 284 0 0 0 31.2 1.6c10-1 19.8-2.3 29.4-3.6 9-1.7 17.5-3 25.2-3.6 9.3 0 19.1 7.9 19.3 16.4a395 395 0 0 1-5.6 24.3" opacity=".4"/>
			<path strokeDasharray="4 4" d="M490.4 376c-2.4 8.5-4.3 17.5-5.5 26.8 0 8.8.7 17.9 2.3 27 2.6 8.7 5.6 17.3 8.7 25.9 3.5 8 6.5 15.7 8.7 22.8.8 14.4-15.1 16.6-26.3 10-8.1-5.4-17.2-11.9-27-18.8a250.3 250.3 0 0 0-28-16 84.5 84.5 0 0 0-25-4.3c-7.7 1.5-15.5 4-23.3 7.4a727 727 0 0 1-24.3 13.1c-8.3 4.7-16.7 8.6-25 11.4-11 3-25.8.1-27.9-6.6.8-5.7 3.4-13.3 7.4-22.5 4.7-9.4 9.6-19.5 14.3-30a170 170 0 0 0 8.3-30.4c.4-9.5-.3-18.8-1.7-27.8-2.4-8.5-5-16.8-7.4-24.8-2.7-7.4-4.7-14.4-5.6-20.8-.4-8.2 6.5-18.3 14-19.6 6 .4 13.2 2 21.8 4.8 8.7 3.1 18 6.8 27.8 10.7 9.7 3.5 19.6 6.9 29.7 10 9.8 2.2 19.6 4.1 29.3 5.6l27 1.8c11.6.4 28.9 3.8 33.7 8 1.5 3.3 1.8 8 .8 14a470 470 0 0 1-6.8 22.3" opacity=".3"/>
			<path strokeDasharray="8 8" d="M484.7 397c-4.8 15-7.9 31.3-8.8 47.6 2.6 14.7 5.6 28.5 7.1 39.7 1.6 8.3-.9 12.1-8.2 10-8.7-5.6-21.7-16-38.3-29.3-15.9-11-32.4-19-48.7-23-15.3 1.2-31.2 5-47.1 9.3-14.7 5.7-27.8 8.5-36.9 6.5-4.4-3.5-2.8-13 4.8-28a327.9 327.9 0 0 0 25.5-52c2.7-16.5 3-32.6 2.4-47-2-12.2-1.7-22 2.6-28 5.3-2.8 15.2-1.3 29.8 4.5 15 7.2 32.3 15.7 50.2 23.7 17 6 33.8 11.2 48.8 15.9 12.4 3.2 21.4 8 25.6 15.5.8 7.8-2.6 19.4-8.8 34.7" opacity=".3"/>
			<path strokeDasharray="5 6" d="M476 414.4a286 286 0 0 0-13.2 40c-.4 12-.6 22.6-1.6 30.3-.4 5.3-3.5 6.5-10.1 2.8-7-6.1-17.6-16-31.3-28.2a161.4 161.4 0 0 0-42.7-24.6 241.2 241.2 0 0 0-42.4-1.2c-17.3 2-29.2-9-20.2-25.5 9-12.8 18.7-27.5 26.9-42.6 5.3-14 9-27.5 11.7-39.3 1.2-9.8 3.8-17 8.9-20.8 5.4-1.2 14.2 1.5 26.5 8 12.6 7.5 27 16.5 41.7 25.5 14 7.7 27.5 15 39 22 9.4 6 15.6 12.7 17.5 21.1a92.2 92.2 0 0 1-10.7 32.5" opacity=".3"/>
			<path strokeDasharray="9 10" d="M464.6 426.6c-5.6 11-11 21.9-15.8 31.8-4 12.9-12.2 23.9-20 19.1-6-5.9-14.6-14.8-25.7-25.7a190 190 0 0 0-35.4-25c-12-4.2-24-7.1-34.7-9.4-12.9-2.2-18.8-15.3-9.7-28.7 8.4-10.1 17.7-21.6 26.4-33.2 7-11 12.9-21.3 18-30 4-7.3 8.4-12.2 14.1-14 5.7.2 13.5 3.6 23.6 10.2a738.9 738.9 0 0 1 32.6 25.8c10.7 8.6 20.6 17.1 28.5 25.4a38 38 0 0 1 10 24.2 90.3 90.3 0 0 1-11.9 29.5" opacity=".2"/>
			<path strokeDasharray="3 9" d="M451.5 432.7a265 265 0 0 1-16.7 23.8c-6 8.7-17.6 13.6-25.3 8.2-5.3-5.4-12.2-13.2-20.9-22.6a265 265 0 0 0-27.4-24c-9.2-5.4-18-10.2-25.5-14.5-8.5-5.1-9.7-19.3-1.1-30 7.4-7.7 16-16 24.4-24.3 7.4-7.8 14.4-15 20.8-20.6 5.5-4.7 11.1-7.4 17.1-7.6 5.9 1.1 12.8 4.9 20.7 11.3 8 7 16.2 15.5 24 24.4 7.4 8.5 13.8 17.3 18.4 25.8 3.7 8 5.1 16.2 4 24.5a81 81 0 0 1-12.5 25.6" opacity=".2"/>
			<path strokeDasharray="4 0" d="M438 432.4c-9.5 13.3-20 22-29.6 23.5-7.3-.5-17-9.4-30-25.2-12.8-13.7-26.3-27-35.8-37.7-6.8-8.2-5.8-17.6 5-28.8a194.3 194.3 0 0 1 41.4-28.9c11.2-4.4 22.9-1.8 34.8 9.2 12 12.6 22 29 26.5 44.8a51.7 51.7 0 0 1-12.4 43" opacity=".2"/>
			<path strokeDasharray="9 11" d="M424.9 426.2c-8.2 9.3-17.6 14-26.3 13.1-7.4-1.5-15.7-8.9-24.5-21-9-11-16.8-22.6-21.1-32.5-3-8.5-.5-17 8.4-24.8a83.5 83.5 0 0 1 33.5-16 32 32 0 0 1 28.7 11.7 67.8 67.8 0 0 1 14.6 36.2 45.8 45.8 0 0 1-13.3 33.3" opacity=".1"/>
			<path strokeDasharray="2 2" d="M413.3 415.4c-11.5 11.2-26.6 7.3-37.2-9.3-11-14.7-13.3-32-1.4-41.9 13.7-9.6 32.8-9.3 43.2 4 10.1 15 8.4 36.1-4.6 47.2" opacity=".1"/>
		</g>
	</svg>
);

export default ChaosTwo;
import { motion } from 'framer-motion';

const variants = {
	enter: {
		y: '0.5rem',
		opacity: 0,
	},
	mounted: {
		y: 0,
		opacity: [0, 1, 0],
	},
	exit: {
		y: '-1rem',
		opacity: 0,
	},
};

export function Me(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			clipRule="evenodd"
			fillRule="evenodd"
			strokeMiterlimit={10}
			viewBox="0 0 384 262"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M51.18 162.54c-1.18-.1-2.43-.16-3.5.33-1.82.82-2.69 2.96-2.77 4.95-.09 1.99.44 3.95.56 5.93.13 1.97-.22 4.17-1.69 5.53-1.47 1.36-3.55 1.5-5.5 1.77-2.55.36-5.05.98-7.47 1.87-2.03.74-4.29 2.07-4.38 4.22-.08 1.77 1.34 3.16 2.41 4.57 2 2.63 3 6.08 2.32 9.3-.68 3.23-3 6.1-3.41 9.44a4.1 4.1 0 00.33 2.48c.33.53.76.98 1.26 1.34 1.25.97 2.65 1.74 3.84 2.8 2.47 2.18 3.8 5.37 4.84 8.5A68.94 68.94 0 0140.4 235c2.13-1.37 4.88-1.35 7.16-2.46 4.84-2.37 6.46-9.25 11.57-10.96 2.42-.79 5.37-.33 7.27-2.03a5.7 5.7 0 001.65-3.26c.4-2.22.02-4.5-1.07-6.47-.76-1.36-1.88-2.6-2.12-4.15a6.1 6.1 0 01.92-3.83c1.83-3.34 5.08-5.93 6.07-9.61a8.9 8.9 0 00-3.51-9.4c-.82-.47-1.61-.98-2.37-1.53-1.19-1-1.87-2.49-2.37-3.95-1.19-3.56-1.56-7.51-3.63-10.73-1.86-2.94-5.52-3.79-8.78-4.08z"
				fill="#70a979"
				fillRule="nonzero"
			/>
			<path
				d="M51.15 162.66s4.49 60.21-7.2 70.55"
				fill="none"
				stroke="#535461"
				strokeOpacity={0.6}
				strokeWidth={0.4}
			/>
			<path
				d="M69.12 232.47c0-3.3-2.7-6-6-6H32.89c-3.3 0-6 2.71-6 6v5.97c0 3.3 2.7 6 6 6h30.23c3.3 0 6-2.7 6-6v-5.97z"
				fill="#989c9f"
			/>
			<path
				d="M49.9 218.47s8.33-3.78 17.7-.7m-41.16-31.74s11.49-1.34 25.51 7.19l-25.51-7.2zm25.29 14.38s6.38-10.56 20.1-12.58l-20.1 12.58zm-24.19 10.1s15.93-2.7 23.24 1.8l-23.24-1.8z"
				fill="none"
				stroke="#535461"
				strokeOpacity={0.6}
				strokeWidth={0.4}
			/>
			<motion.path
				animate="mounted"
				d="M329 188.05c-.5.09-1.06.22-1.31.67-.4.7.32 1.5.96 1.97 1.18.9 2.43 1.77 3.24 3.02.8 1.24 1.06 2.98.17 4.18-1.15 1.56-3.89 1.89-4.15 3.8-.17 1.24.9 2.3 1.97 2.9 2.67 1.53 6.1 1.94 8.03 4.33.8-1.64 2.58-2.6 4.35-3 1.76-.4 3.62-.37 5.43-.65.58-.08 1.24-.26 1.5-.79.5-1.02-.94-2.25-.44-3.28.4-.79 1.48-.72 2.3-1.03 1.31-.51 1.85-2.2 1.48-3.56-.37-1.34-1.43-2.43-2.54-3.3-3-2.37-6.6-3.74-10.25-4.74-1.7-.46-3.68-1.19-5.44-1.26-1.68-.08-3.62.45-5.3.74z"
				exit="exit"
				fill="#afafaf"
				fillOpacity={0.25}
				fillRule="nonzero"
				initial="enter"
				transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
				variants={variants}
			/>
			<path
				d="M352.73 216a7.72 7.72 0 00-7.69 7.69 7.73 7.73 0 007.7 7.69 7.72 7.72 0 007.68-7.7 7.72 7.72 0 00-7.69-7.68zm0 12.42a4.76 4.76 0 01-4.74-4.74c0-2.6 2.14-4.75 4.74-4.75s4.74 2.14 4.74 4.75c0 2.6-2.14 4.74-4.74 4.74z"
				fillRule="nonzero"
			/>
			<path
				d="M352.73 216a7.72 7.72 0 00-7.69 7.69 7.73 7.73 0 007.7 7.69 7.72 7.72 0 007.68-7.7 7.72 7.72 0 00-7.69-7.68zm0 12.42a4.76 4.76 0 01-4.74-4.74c0-2.6 2.14-4.75 4.74-4.75s4.74 2.14 4.74 4.75c0 2.6-2.14 4.74-4.74 4.74z"
				fill="#fff"
				fillOpacity={0.09}
				fillRule="nonzero"
			/>
			<path
				d="M323.16 210.09h29.56v29.26a3.89 3.89 0 01-3.85 3.85h-21.85a3.87 3.87 0 01-3.85-3.85V210.1h-.01z"
				fillRule="nonzero"
			/>
			<path d="M0 243.2h383.78v13.01H0z" fill="#5b361e" />
			<path
				d="M252.43 156.16c-4.11-14.93-27.43-25.84-44.98-28.25V114.8h.06v-.5a43.89 43.89 0 0026.47-27.75c1.08-1.96 2.03-4 2.82-6.1 1.88-.67 3.29-3.76 3.29-7.47 0-1.27-.17-2.54-.53-3.76a47.56 47.56 0 00-15.33-41c.15-.77.2-1.55.15-2.33-.4-6.13-6.95-10.3-13.1-10.58a13 13 0 002.2-13.68c-3.92 5.7-11.96 6.32-18.88 6.35 2.99-1.15 4.35-5.29 2.6-7.98-7.24 9.7-21.34 11.49-29.94 19.99-1.87 1.86-3.44 4-4.65 6.35a47.56 47.56 0 00-17.56 42.83 13.04 13.04 0 00-.55 3.8c0 3.73 1.43 6.83 3.32 7.5.8 2.11 1.75 4.15 2.84 6.12a43.87 43.87 0 0026.28 27.65v13.67c-17.6 2.37-41.12 13.36-45.2 28.4-3.51 13-7.27 27.27-9.14 35.66 16.03 11.26 49.65 17.87 70.71 17.87 20.03 0 52.76-5.97 68.31-16.22-1.64-9.23-5.51-24.13-9.19-37.46z"
				fill="url(#b)"
				fillRule="nonzero"
			/>
			<path
				d="M193.31 206.12c19.32 0 50.9-5.76 65.9-15.65-1.62-8.88-5.36-23.26-8.9-36.12-4.52-16.39-33-27.74-50-27.74h-16.37c-17.05 0-45.57 11.42-50.03 27.87-3.4 12.54-7.02 26.3-8.83 34.39 15.45 10.87 47.9 17.25 68.23 17.25z"
				fill="#4a5568"
				fillRule="nonzero"
			/>
			<path
				d="M192.32 110.91a45.92 45.92 0 100-91.84 45.92 45.92 0 000 91.84z"
				fill="#554229"
				fillRule="nonzero"
			/>
			<path
				d="M177.5 103.24h29.42v23.54c0 8.06-6.64 14.7-14.71 14.7a14.78 14.78 0 01-14.71-14.7v-23.54z"
				fillOpacity={0.09}
				fillRule="nonzero"
			/>
			<path
				d="M181.72 102.15h20.99c2.31 0 4.22 1.9 4.22 4.22v19.31c0 8.07-6.64 14.72-14.71 14.72a14.78 14.78 0 01-14.72-14.72v-19.31c0-2.32 1.9-4.22 4.22-4.22z"
				fill="#e8ab98"
				fillRule="nonzero"
			/>
			<path
				d="M177.55 114.35a42.4 42.4 0 0029.43.08v-3.62h-29.43v3.54z"
				fillOpacity={0.09}
				fillRule="nonzero"
			/>
			<path
				d="M192.32 116.32a42.17 42.17 0 100-84.35 42.17 42.17 0 000 84.35z"
				fill="#e8ab98"
				fillRule="nonzero"
			/>
			<path
				d="M162.26 35.78s17.78 36.08 67.9 15.12l-11.64-18.3-20.7-7.43-35.56 10.61z"
				fillOpacity={0.09}
				fillRule="nonzero"
			/>
			<path
				d="M162.26 35.25s17.78 36.08 67.9 15.12l-11.64-18.3-20.7-7.43-35.56 10.61z"
				fill="#554229"
				fillRule="nonzero"
			/>
			<path
				d="M162.12 32.81a24.37 24.37 0 016.04-9.82c8.3-8.2 21.9-9.93 28.87-19.28 1.68 2.6.4 6.58-2.5 7.7 6.67-.04 14.43-.63 18.2-6.13a12.53 12.53 0 01-2.1 13.2c5.92.27 12.24 4.29 12.64 10.2.25 3.95-2.22 7.68-5.46 9.94-3.24 2.26-7.16 3.3-11.02 4.15-11.27 2.48-52.04 12.89-44.67-9.96zm72.37 41.7h-1.12l-21.75 19.36c-20.94-9.82-36.35 0-36.35 0L152.46 75.3l-2.3.3a42.36 42.36 0 0042.16 41.01c23.1 0 42.13-19 42.17-42.1zm-42.24 26.8c-8.2 0-14.85-1.67-14.85-3.72 0-2.05 6.65-3.71 14.85-3.71s14.86 1.66 14.86 3.71-6.65 3.72-14.86 3.72z"
				fill="#554229"
				fillRule="nonzero"
			/>
			<path
				d="M150.13 81.46c2.16 0 3.92-3.3 3.92-7.35 0-4.07-1.76-7.36-3.92-7.36-2.17 0-3.93 3.3-3.93 7.36 0 4.06 1.76 7.35 3.93 7.35zm84.36 0c2.16 0 3.92-3.3 3.92-7.35 0-4.07-1.76-7.36-3.92-7.36-2.17 0-3.93 3.3-3.93 7.36 0 4.06 1.76 7.35 3.93 7.35z"
				fill="#e8ab98"
				fillRule="nonzero"
			/>
			<path
				d="M270.54 161.56a10.6 10.6 0 00-10.6-10.6h-136.1a10.6 10.6 0 00-10.6 10.6v71.04a10.6 10.6 0 0010.6 10.6h136.1a10.6 10.6 0 0010.6-10.6v-71.04z"
				fill="#989c9f"
			/>
			<path
				d="M197 198.32a3.44 3.44 0 011.84-3.13c-.7-1-1.74-1.54-3.13-1.65-1.3-.1-2.74.77-3.26.77-.56 0-1.83-.73-2.82-.73-2.06.03-4.25 1.64-4.25 4.92 0 .96.18 1.96.53 3 .47 1.35 2.18 4.67 3.96 4.62.93-.03 1.59-.67 2.8-.67 1.17 0 1.78.67 2.81.67 1.8-.03 3.34-3.05 3.8-4.4-2.41-1.14-2.29-3.33-2.29-3.4zm-2.1-6.06c1.01-1.2.92-2.28.89-2.67-.89.05-1.92.6-2.5 1.28a3.53 3.53 0 00-.95 2.66c.96.07 1.84-.42 2.56-1.27z"
				fill="#2d3748"
				fillRule="nonzero"
			/>
			<path d="M16.26 256.21h351.25v5.32H16.26v-5.32z" fill="#5b361e" />
			<path d="M16.26 256.21h351.25V258H16.26v-1.78z" fillOpacity={0.09} />
			<path
				d="M347.41 210.09v27.34a5.8 5.8 0 01-5.76 5.77h2.95a5.8 5.8 0 005.77-5.76v-27.35h-2.96z"
				fill="#fff"
				fillOpacity={0.09}
				fillRule="nonzero"
			/>
			<path d="M291.54 0H384v130.77h-92.46z" fill="#ea7616" />
			<path
				d="M351.98 70.76c1.01 0 1.94.18 2.77.53a4.85 4.85 0 012.87 3.5c.1.66.15 1.72.15 3.18v9.66h-4.39v-10c0-.89-.15-1.6-.45-2.14-.4-.77-1.14-1.15-2.24-1.15-1.13 0-2 .38-2.58 1.14a5.22 5.22 0 00-.89 3.25v8.9h-4.28V65.47h4.28v7.86a5.28 5.28 0 014.76-2.57zm14.6 3.57c-1 0-1.77.31-2.32.94-.55.62-.9 1.47-1.04 2.53h6.69c-.07-1.13-.42-2-1.04-2.59a3.2 3.2 0 00-2.3-.88zm0-3.55c1.36 0 2.6.26 3.7.78 1.09.5 2 1.32 2.7 2.42a8.23 8.23 0 011.26 3.4c.11.75.16 1.84.14 3.26h-11.26c.06 1.65.58 2.8 1.55 3.47.6.41 1.31.62 2.15.62a3.04 3.04 0 002.95-1.89h4.4a5.45 5.45 0 01-1.53 2.97c-1.4 1.6-3.38 2.4-5.91 2.4-2.1 0-3.94-.67-5.54-2.02s-2.4-3.54-2.4-6.58c0-2.84.72-5.03 2.16-6.55a7.4 7.4 0 015.62-2.28zm8.82-5.3h4.3v22.25h-4.3V65.49z"
				fillRule="nonzero"
			/>
			<path d="M350.36 99.72l3.83-10.55h-7.67l3.84 10.55z" fill="#fff" />
			<path
				d="M353.72 89.17h4.62l-5.93 16.45h-4.54l-5.9-16.45h4.83l3.56 10.42 3.36-10.42zm11.84 3.1c-1 0-1.77.32-2.32.94a4.67 4.67 0 00-1.03 2.54h6.69c-.07-1.14-.42-2-1.04-2.59a3.2 3.2 0 00-2.3-.88zm0-3.54c1.37 0 2.6.26 3.7.77s2 1.32 2.71 2.43c.65.98 1.06 2.1 1.25 3.4.12.75.16 1.84.14 3.25H362.1c.06 1.66.58 2.81 1.56 3.48.6.4 1.3.61 2.14.61.89 0 1.6-.25 2.16-.75.3-.27.57-.65.8-1.13h4.39a5.46 5.46 0 01-1.52 2.97c-1.41 1.6-3.38 2.4-5.92 2.4-2.1 0-3.94-.67-5.54-2.02s-2.4-3.54-2.4-6.58c0-2.85.73-5.03 2.17-6.55a7.4 7.4 0 015.62-2.28zm-37.38 21.5v-3.07h2.3v-4.59h4.25v4.6h2.67v3.05h-2.67v8.7c0 .67.09 1.09.26 1.25.17.17.7.25 1.57.25.28 0 .56 0 .84-.03v3.22l-2.03.07c-2.03.07-3.42-.28-4.17-1.05-.48-.5-.72-1.25-.72-2.28v-10.13h-2.3zm14.7-5.18h-4.35v-3.97h4.36v3.97zm-4.35 1.96h4.36v16.45h-4.36V107zm16.65 5.9a3.82 3.82 0 00-.62-1.66c-.48-.66-1.23-1-2.25-1-1.45 0-2.44.72-2.97 2.16a9.04 9.04 0 00-.42 3.05c0 1.2.13 2.18.42 2.91.51 1.37 1.48 2.05 2.9 2.05 1 0 1.71-.27 2.14-.81.42-.54.68-1.25.77-2.11h4.39a7.2 7.2 0 01-1.42 3.71c-1.35 1.88-3.35 2.82-5.99 2.82-2.65 0-4.6-.78-5.84-2.35-1.25-1.57-1.87-3.6-1.87-6.11 0-2.83.69-5.03 2.06-6.6 1.38-1.57 3.28-2.35 5.7-2.35 2.07 0 3.76.46 5.07 1.39 1.31.92 2.1 2.56 2.33 4.9h-4.4zm14.73 2.55a4.56 4.56 0 01-1.96.7l-.97.19c-.9.16-1.55.36-1.94.59-.67.4-1 1-1 1.83 0 .73.2 1.26.61 1.59.4.32.9.49 1.49.49.92 0 1.78-.27 2.56-.82.78-.54 1.18-1.53 1.21-2.97v-1.6zm-2.61-2c.8-.1 1.36-.23 1.7-.38.62-.27.93-.67.93-1.23 0-.67-.24-1.14-.7-1.4a4.38 4.38 0 00-2.07-.38c-1.01 0-1.73.26-2.15.76-.3.37-.5.87-.6 1.5h-4.16c.1-1.43.5-2.61 1.21-3.54 1.14-1.45 3.09-2.17 5.86-2.17 1.8 0 3.4.35 4.8 1.07 1.4.71 2.1 2.06 2.1 4.04v7.55c0 .52 0 1.16.02 1.9.03.56.12.94.26 1.15.14.2.35.36.63.5v.63h-4.68a5.96 5.96 0 01-.39-1.94c-.6.65-1.29 1.2-2.05 1.65-.93.53-1.97.8-3.14.8a5.4 5.4 0 01-3.69-1.27 4.55 4.55 0 01-1.45-3.62c0-2.02.77-3.48 2.33-4.39.86-.5 2.12-.84 3.78-1.06l1.46-.18z"
				fillRule="nonzero"
			/>
			<path
				d="M314.95 48.56c1.02 0 1.94.17 2.77.52a4.86 4.86 0 012.87 3.51c.1.65.15 1.71.15 3.18v9.66h-4.39v-10c0-.9-.15-1.6-.45-2.15-.4-.77-1.14-1.15-2.23-1.15-1.14 0-2 .38-2.6 1.14a5.22 5.22 0 00-.87 3.25v8.9h-4.29V43.27h4.29v7.86a5.27 5.27 0 014.75-2.56zm14.6 3.53c-1 0-1.77.31-2.32.93a4.6 4.6 0 00-1.03 2.54h6.68c-.07-1.14-.41-2-1.03-2.59a3.2 3.2 0 00-2.3-.88zm0-3.55c1.37 0 2.6.26 3.7.77 1.1.52 2 1.32 2.71 2.43.65.98 1.06 2.1 1.25 3.4.11.75.16 1.84.14 3.26h-11.26c.06 1.65.58 2.8 1.56 3.47.59.4 1.3.62 2.14.62.88 0 1.6-.26 2.16-.76.3-.27.56-.65.8-1.13h4.39a5.45 5.45 0 01-1.53 2.97c-1.4 1.6-3.38 2.4-5.91 2.4-2.1 0-3.94-.67-5.54-2.02s-2.4-3.54-2.4-6.58c0-2.85.72-5.03 2.17-6.55a7.4 7.4 0 015.62-2.28zm9.09-5.35h4.3v22.24h-4.3V43.18z"
				fill="#fff"
				fillRule="nonzero"
			/>
			<path d="M319.8 76.97l3.84-10.56h-7.67l3.84 10.56z" />
			<path
				d="M323.3 66.4h4.61l-5.93 16.46h-4.54l-5.9-16.45h4.83l3.44 10.56 3.49-10.56zm11.83 3.12c-1 0-1.77.3-2.31.93-.55.63-.9 1.47-1.04 2.54h6.69c-.07-1.14-.42-2-1.04-2.59a3.2 3.2 0 00-2.3-.88zm0-3.55c1.37 0 2.6.26 3.7.77s2 1.32 2.72 2.43a8.3 8.3 0 011.25 3.4c.1.75.15 1.84.13 3.26h-11.25c.06 1.64.57 2.8 1.55 3.47.6.4 1.3.62 2.14.62.89 0 1.6-.26 2.16-.76.3-.27.57-.65.8-1.13h4.4A5.45 5.45 0 01341.2 81c-1.41 1.6-3.38 2.4-5.92 2.4-2.09 0-3.94-.67-5.54-2.02s-2.4-3.54-2.4-6.58c0-2.85.73-5.03 2.17-6.55a7.4 7.4 0 015.62-2.28zM296 87.7v-3.06h2.3v-4.6h4.25v4.6h2.67v3.06h-2.67v8.7c0 .67.09 1.08.26 1.25.17.17.7.25 1.57.25l.84-.03v3.21l-2.04.08c-2.03.07-3.42-.28-4.16-1.06-.48-.49-.72-1.25-.72-2.28V87.7H296zm14.7-5.18h-4.36v-3.97h4.37v3.97zm-4.36 1.96h4.37v16.45h-4.37V84.47zm16.65 5.9a3.82 3.82 0 00-.62-1.66c-.48-.66-1.23-.99-2.24-.99-1.45 0-2.44.72-2.98 2.16a9.01 9.01 0 00-.42 3.05c0 1.2.14 2.17.42 2.9.52 1.38 1.48 2.06 2.9 2.06 1 0 1.72-.27 2.14-.81.43-.55.68-1.25.77-2.12h4.4a7.19 7.19 0 01-1.42 3.72c-1.35 1.88-3.35 2.82-6 2.82-2.64 0-4.59-.79-5.83-2.36-1.25-1.57-1.88-3.6-1.88-6.1 0-2.84.7-5.03 2.07-6.6 1.38-1.57 3.28-2.36 5.7-2.36a8.6 8.6 0 015.07 1.4c1.31.92 2.09 2.55 2.33 4.9H323zm14.74 2.55a4.81 4.81 0 01-1.97.72l-.96.17a6 6 0 00-1.95.6c-.66.39-1 1-1 1.82 0 .73.21 1.27.62 1.6.4.32.9.48 1.48.48a4.4 4.4 0 002.56-.81c.78-.55 1.19-1.54 1.22-2.97v-1.6zm-2.61-2c.8-.1 1.36-.23 1.7-.38.62-.26.92-.67.92-1.22 0-.67-.23-1.14-.7-1.4a4.4 4.4 0 00-2.06-.38c-1.02 0-1.74.25-2.16.75-.3.38-.5.88-.6 1.51h-4.15a6.3 6.3 0 011.2-3.54c1.14-1.45 3.1-2.18 5.86-2.18 1.8 0 3.4.36 4.8 1.07 1.4.72 2.1 2.07 2.1 4.05v7.54c0 .53 0 1.16.03 1.9.03.57.11.95.25 1.15.14.2.36.37.64.5v.63h-4.68c-.12-.3-.21-.61-.27-.93-.05-.3-.1-.63-.12-1-.6.65-1.3 1.2-2.06 1.65-.92.53-1.97.8-3.13.8a5.4 5.4 0 01-3.7-1.28 4.55 4.55 0 01-1.45-3.61c0-2.02.78-3.49 2.34-4.4.86-.49 2.11-.84 3.77-1.05l1.47-.18z"
				fill="#fff"
				fillRule="nonzero"
			/>
			<path
				d="M305.98 7.79a.7.7 0 00.13.35c.12.14.32.22.6.22.18 0 .32-.02.42-.06.2-.07.3-.2.3-.4a.3.3 0 00-.14-.27 1.6 1.6 0 00-.48-.16l-.36-.08a2.34 2.34 0 01-.75-.27c-.24-.16-.35-.41-.35-.75a1 1 0 01.34-.78c.22-.2.55-.3 1-.3.36 0 .67.1.93.29a1 1 0 01.4.84h-.7a.5.5 0 00-.27-.45.91.91 0 00-.42-.08.79.79 0 00-.45.11.36.36 0 00-.12.14.35.35 0 00-.04.18c0 .12.05.21.16.27.07.04.22.1.45.15l.6.14c.26.07.46.15.6.25.2.17.3.4.3.71a1 1 0 01-.36.8c-.24.2-.58.3-1.02.3-.46 0-.81-.1-1.07-.3-.26-.2-.4-.5-.4-.85h.7zm3.85-1.5h.68l.4 1.85.4-1.85h.7l-.75 2.57h-.7l-.4-1.87-.4 1.87h-.7l-.72-2.57h.72l.4 1.84.37-1.84zm3.23-.3h-.68v-.63h.68V6zm-.68.3h.68v2.57h-.68V6.29zm1.86 1.75c0 .12.04.2.08.25.09.1.24.14.47.14a.7.7 0 00.31-.06c.08-.04.12-.1.12-.18a.2.2 0 00-.02-.1.2.2 0 00-.08-.07c-.06-.04-.3-.1-.7-.2a1.67 1.67 0 01-.61-.27.59.59 0 01-.18-.46c0-.24.1-.46.28-.62.19-.17.45-.25.79-.25.32 0 .58.06.78.19.2.13.32.35.35.66h-.67a.4.4 0 00-.08-.2c-.07-.1-.2-.14-.38-.14-.14 0-.25.02-.3.07-.07.04-.1.1-.1.16 0 .08.03.13.1.17.06.03.3.1.7.18.26.07.47.16.6.29.13.12.2.3.2.48 0 .24-.1.47-.29.62-.19.16-.48.25-.87.25-.4 0-.7-.09-.9-.26a.83.83 0 01-.29-.65h.69zm2.68 0c.01.12.04.2.09.25.08.1.24.14.46.14a.7.7 0 00.31-.06c.08-.04.12-.1.12-.18 0-.03 0-.07-.02-.1a.2.2 0 00-.07-.07c-.07-.04-.3-.1-.7-.2-.3-.08-.5-.17-.62-.27a.59.59 0 01-.18-.46c0-.24.1-.45.28-.62.19-.17.45-.25.79-.25.32 0 .58.06.78.19.2.13.32.35.35.66h-.67a.39.39 0 00-.07-.2c-.08-.1-.2-.14-.38-.14-.15 0-.25.02-.31.07-.07.04-.1.1-.1.16 0 .08.04.13.1.17.07.03.3.1.7.18.27.07.47.16.6.29.13.13.2.29.2.48a.8.8 0 01-.28.62c-.2.16-.49.25-.88.25-.4 0-.7-.09-.9-.26a.84.84 0 01-.28-.65h.68zm4.25-2.05v2.27h.67c.35 0 .58-.17.72-.51.07-.19.11-.4.11-.66 0-.36-.06-.63-.17-.82-.1-.19-.33-.28-.66-.28h-.66zm.8-.6c.21 0 .39.03.53.07.24.08.45.23.6.44.11.17.2.36.24.56.05.2.07.4.07.58 0 .46-.1.85-.28 1.17-.25.43-.64.65-1.16.65h-1.5V5.39h1.5zm3.08 3c.2 0 .35-.08.45-.21.1-.14.16-.34.16-.6a.97.97 0 00-.16-.6.54.54 0 00-.45-.2.54.54 0 00-.45.2.97.97 0 00-.16.6c0 .26.05.46.16.6.1.13.25.2.45.2zm1.32-.81c0 .38-.11.7-.33.97-.22.26-.55.4-.99.4-.44 0-.77-.14-.98-.4a1.49 1.49 0 01-.33-.97c0-.37.11-.7.33-.96.21-.28.54-.41.98-.41.44 0 .77.13 1 .4.2.28.32.62.32.97zm.21-.79v-.48h.36V5.6h.66v.71h.42v.48h-.41v1.36c0 .1 0 .17.03.2.03.02.11.04.25.04h.13v.5h-.32c-.31.01-.53-.04-.65-.16-.07-.08-.1-.2-.1-.36V6.8h-.37zm2.4 1.25c.01.12.04.2.09.25.08.1.23.14.46.14.13 0 .24-.02.31-.06.08-.04.12-.1.12-.18 0-.03 0-.07-.02-.1a.2.2 0 00-.07-.07c-.07-.04-.3-.1-.7-.2-.3-.08-.5-.17-.62-.27a.59.59 0 01-.18-.46c0-.24.1-.45.28-.62.19-.17.45-.25.79-.25.32 0 .58.06.78.19.2.13.32.35.35.66h-.67a.4.4 0 00-.08-.2c-.07-.1-.2-.14-.37-.14-.15 0-.25.02-.32.07a.2.2 0 00-.09.16c0 .08.03.13.1.17.07.03.3.1.7.18.27.07.47.16.6.29.13.12.2.3.2.48 0 .24-.1.47-.29.62-.19.16-.48.25-.87.25-.4 0-.7-.09-.9-.26a.83.83 0 01-.28-.65h.68zm5.5-1.55c0-.18-.04-.3-.14-.38a.62.62 0 00-.4-.12h-.67V7h.67c.17 0 .3-.04.4-.12.1-.09.14-.22.14-.4zm.72 0c0 .4-.1.7-.3.87-.21.17-.51.25-.9.25h-.73v1.25h-.72V5.39h1.5c.36 0 .63.09.84.27.2.17.31.45.31.83zm1.89-.26h.09v.7c-.07-.02-.13-.02-.2-.02-.27 0-.45.09-.54.26-.05.1-.08.25-.08.46v1.23h-.67V6.29h.64v.45c.07-.13.16-.25.27-.35a.74.74 0 01.49-.16zm1.5.55a.46.46 0 00-.37.14.73.73 0 00-.16.4h1.04a.51.51 0 00-.16-.4.5.5 0 00-.36-.14zm0-.56c.2 0 .4.04.57.12a1 1 0 01.42.38c.1.15.17.33.2.53.02.17.03.34.02.51h-1.76c.01.26.1.44.25.54.1.07.21.1.33.1.14 0 .25-.04.34-.12.05-.05.1-.1.12-.18h.69a.88.88 0 01-.24.47c-.22.25-.53.37-.92.37-.32 0-.63-.1-.87-.31-.25-.21-.37-.56-.37-1.03 0-.44.11-.78.33-1.02.23-.24.52-.36.88-.36zm2.19 1.82c0 .12.04.2.09.25.08.1.23.14.46.14a.7.7 0 00.31-.06c.08-.04.12-.1.12-.18a.2.2 0 00-.1-.17c-.06-.04-.3-.1-.7-.2a1.61 1.61 0 01-.6-.27c-.13-.11-.19-.26-.19-.46 0-.24.1-.45.28-.62.19-.17.45-.25.79-.25.32 0 .58.06.78.19.2.13.32.35.35.66h-.67a.4.4 0 00-.08-.2c-.07-.1-.2-.14-.37-.14-.15 0-.25.02-.32.07a.2.2 0 00-.09.16c0 .08.03.13.1.17.07.03.3.1.7.18.27.07.47.16.6.29.13.12.2.3.2.48 0 .24-.1.47-.29.62-.19.16-.48.25-.87.25-.4 0-.7-.09-.9-.26a.83.83 0 01-.28-.65h.67zm3.17-1.26a.45.45 0 00-.36.14.72.72 0 00-.16.4h1.04a.59.59 0 00-.16-.4.5.5 0 00-.36-.14zm0-.56c.21 0 .4.04.57.12.18.08.32.2.43.38.1.15.16.33.2.53l.02.51h-1.76c0 .26.09.44.24.54.1.07.22.1.34.1.13 0 .25-.04.33-.12a.4.4 0 00.13-.18h.68c-.01.16-.1.31-.24.47-.22.25-.52.37-.92.37-.32 0-.62-.1-.86-.31-.25-.21-.38-.56-.38-1.03 0-.44.12-.78.34-1.02.23-.24.52-.36.88-.36zm3.09 0a1 1 0 01.65.22c.17.14.25.37.25.69v1.73h-.68V7.3a.78.78 0 00-.06-.31c-.06-.14-.19-.2-.37-.2-.23 0-.39.1-.47.29a1 1 0 00-.07.39v1.39h-.67V6.3h.65v.37c.09-.13.17-.23.25-.29.15-.1.33-.16.52-.15zm1.26.57v-.48h.36V5.6h.66v.71h.42v.48h-.42v1.36c0 .1.01.17.04.2.03.02.11.04.25.04h.13v.5h-.32c-.32.01-.53-.04-.65-.16a.53.53 0 01-.11-.36V6.8h-.36zm2.4 1.25c0 .12.04.2.08.25.09.1.24.14.47.14a.7.7 0 00.31-.06c.08-.04.12-.1.12-.18a.2.2 0 00-.1-.17c-.06-.04-.3-.1-.7-.2a1.6 1.6 0 01-.61-.27.59.59 0 01-.18-.46c0-.24.1-.45.28-.62.19-.17.45-.25.78-.25.32 0 .59.06.79.19.2.13.31.35.35.66h-.68a.4.4 0 00-.07-.2c-.07-.1-.2-.14-.38-.14-.14 0-.25.02-.3.07-.07.04-.1.1-.1.16 0 .08.03.13.1.17.06.03.3.1.7.18.26.07.46.16.6.29.13.12.2.3.2.48 0 .24-.1.47-.29.62-.19.16-.48.25-.88.25s-.7-.09-.89-.26a.83.83 0 01-.29-.65h.68zm-44.3 4.33h.89l-.44-1.37-.45 1.37zm.05-2.16h.82l1.23 3.47h-.79l-.22-.71h-1.28l-.24.71h-.76l1.24-3.47zm4.63.6v2.27h.67c.34 0 .58-.17.72-.5.07-.2.1-.41.1-.67 0-.35-.05-.62-.16-.81-.11-.2-.33-.29-.66-.29h-.67zm.8-.6a2 2 0 01.53.07c.24.08.45.24.59.45.12.17.2.36.25.56.04.2.06.39.06.57 0 .46-.09.85-.27 1.17-.26.44-.64.65-1.17.65h-1.5v-3.47h1.5zm3.08 3c.2 0 .34-.07.45-.21.1-.14.16-.34.16-.6a.96.96 0 00-.16-.6.53.53 0 00-.45-.2.54.54 0 00-.46.2.96.96 0 00-.16.6c0 .26.06.46.16.6.11.14.26.2.46.2zm1.31-.8c0 .37-.1.7-.32.96-.22.27-.55.4-.99.4-.44 0-.77-.13-.99-.4a1.49 1.49 0 01-.32-.97c0-.37.1-.69.32-.96s.55-.4.99-.4c.44 0 .77.13.99.4.21.27.32.6.32.96zm2.02-.38a.59.59 0 00-.1-.25.43.43 0 00-.35-.16c-.23 0-.38.11-.47.34-.05.15-.07.31-.06.47 0 .2.02.34.06.46.08.21.23.32.46.32.15 0 .26-.04.33-.13.07-.1.11-.21.12-.33h.69c-.02.21-.1.41-.23.58-.2.3-.52.44-.93.44-.41 0-.72-.12-.91-.37-.2-.24-.3-.56-.3-.95 0-.44.11-.79.33-1.03.21-.24.51-.37.89-.37.32 0 .58.07.79.22.2.14.32.4.36.77h-.69zm1.81-.92v1.55c0 .11.01.23.05.33.07.13.19.2.37.2.23 0 .38-.1.47-.28a1 1 0 00.06-.4v-1.4h.68v2.57h-.65v-.36l-.05.07a.93.93 0 01-.4.3c-.1.03-.22.05-.34.05-.38 0-.63-.14-.76-.41a1.58 1.58 0 01-.11-.67v-1.55h.68zm5.15-.05a.75.75 0 01.78.63c.02.08.02.2.02.37v1.62h-.69v-1.63a.53.53 0 00-.05-.24c-.06-.12-.17-.18-.33-.18-.18 0-.31.07-.38.23a.8.8 0 00-.06.3v1.52h-.67v-1.53a.86.86 0 00-.05-.33c-.06-.12-.17-.19-.33-.19-.2 0-.32.07-.39.2-.04.1-.06.2-.05.3v1.55h-.68v-2.56h.65v.38a.96.96 0 01.24-.29.8.8 0 01.5-.15.8.8 0 01.48.13c.1.08.17.18.22.3a.85.85 0 01.33-.33 1 1 0 01.46-.1zm2.43.54a.45.45 0 00-.36.15.73.73 0 00-.16.4h1.04a.58.58 0 00-.16-.41.5.5 0 00-.36-.14zm0-.55c.22 0 .4.04.58.12.17.08.31.2.42.38.1.15.17.32.2.53.02.11.02.28.02.5h-1.76c.01.26.1.44.25.54.1.07.21.1.33.1.12 0 .24-.04.34-.12.05-.04.1-.1.12-.17h.69a.9.9 0 01-.24.46c-.22.25-.53.38-.92.38-.32 0-.63-.11-.87-.32-.25-.2-.37-.55-.37-1.03 0-.44.11-.78.33-1.02.23-.24.52-.35.88-.35zm3.1 0a1 1 0 01.65.21c.17.14.25.37.25.7v1.72h-.69v-1.56c0-.1-.01-.21-.05-.31-.07-.13-.2-.2-.38-.2-.23 0-.38.1-.47.3a1 1 0 00-.06.38v1.4h-.67v-2.57h.64v.38c.07-.11.15-.21.25-.29.15-.1.34-.16.52-.16zm1.26.57v-.48h.35v-.72h.67v.72h.41v.48h-.41v1.35c0 .1.01.17.04.2.02.03.1.04.24.04h.13v.5h-.31c-.32.02-.54-.04-.65-.16-.08-.08-.12-.2-.12-.35v-1.58h-.36zm3.28.81c-.1.06-.2.1-.3.11l-.16.03c-.1.02-.2.05-.3.1a.3.3 0 00-.16.28c0 .11.04.2.1.25.06.05.15.08.23.07a.7.7 0 00.4-.12c.12-.09.19-.24.2-.47v-.25h-.01zm-.4-.31l.26-.06c.1-.04.14-.1.14-.19 0-.1-.03-.18-.1-.22a.7.7 0 00-.33-.06c-.16 0-.27.04-.33.12a.5.5 0 00-.1.24h-.65c0-.2.07-.4.2-.56.17-.22.47-.34.9-.34.29 0 .53.06.75.17.22.11.33.32.33.63v1.48c0 .06.02.12.05.18.02.03.06.06.1.07v.1h-.74a.74.74 0 01-.04-.14l-.02-.16c-.09.1-.2.19-.32.26a.97.97 0 01-.49.12.84.84 0 01-.57-.2.71.71 0 01-.23-.56c0-.32.12-.55.37-.69.13-.07.33-.13.58-.16l.23-.03zm3.06-1.07h.09v.7l-.2-.02c-.26 0-.44.1-.54.27-.05.1-.07.25-.07.45v1.23h-.68v-2.57h.64v.45c.1-.17.2-.29.27-.35a.74.74 0 01.5-.16zm.59 3.12h.28c.04 0 .1-.02.14-.05a.33.33 0 00.11-.17c.04-.08.05-.14.04-.16l-.94-2.68h.75l.56 1.9.53-1.9h.71l-.88 2.53c-.17.49-.3.79-.4.9-.1.12-.3.18-.6.18h-.3v-.55zm3.97-3.96H345v.61h-1.74v.8h1.53v.6h-1.53v1.46h-.72v-3.47zm3.58.6h-.68v-.62h.68v.62zm-.68.3h.68v2.57h-.68v-2.57zm1.35-.9h.67v3.47h-.67v-3.47zm4.2.85a.9.9 0 01.33.06c.23.1.4.32.44.56.02.09.03.22.03.38l-.01 1.62h-.69v-1.63a.53.53 0 00-.04-.24c-.06-.12-.17-.18-.33-.18-.19 0-.32.07-.39.23-.04.1-.06.2-.05.3v1.52h-.68v-1.53a.86.86 0 00-.05-.33c-.05-.12-.16-.19-.33-.19-.19 0-.32.07-.38.2a.8.8 0 00-.06.3v1.55h-.68v-2.56h.65v.38c.09-.14.17-.23.24-.29a.8.8 0 01.5-.15c.2 0 .36.04.48.13.1.08.17.18.22.3a.86.86 0 01.33-.33 1 1 0 01.46-.1zm-44.83 4.58v.76h.85c.13 0 .26-.02.37-.08.1-.06.15-.16.15-.3 0-.17-.07-.28-.2-.33a1.33 1.33 0 00-.4-.05h-.77zm0 1.34v.92h.85c.16 0 .27-.02.36-.06.15-.07.23-.22.23-.43a.4.4 0 00-.22-.38.9.9 0 00-.36-.05h-.86zm1-1.95c.42.01.72.13.9.37a1 1 0 01.16.53c0 .21-.05.39-.16.51a.82.82 0 01-.26.2c.16.06.3.16.4.3.09.15.13.32.13.52a1 1 0 01-.15.55.95.95 0 01-.64.45c-.17.03-.33.05-.5.04h-1.57v-3.47h1.68zm1.83 3.97h.28c.05-.01.1-.03.14-.06a.33.33 0 00.11-.17c.04-.08.05-.13.04-.15l-.94-2.68h.75l.56 1.9.53-1.9h.71l-.88 2.52c-.17.49-.3.8-.4.9-.1.13-.3.18-.6.18H309V19zm6.3-2.88a.68.68 0 00-.4-.5.99.99 0 00-.4-.08c-.27 0-.5.1-.68.32-.18.21-.27.53-.27.95 0 .43.1.73.29.9.18.18.42.27.66.27.25 0 .45-.07.6-.2a.91.91 0 00.29-.56h-.8v-.58h1.44v1.86h-.48l-.07-.43c-.1.14-.24.25-.38.35-.21.12-.46.18-.7.18-.46 0-.84-.16-1.13-.48-.31-.32-.46-.76-.46-1.32s.15-1 .46-1.35c.3-.34.72-.5 1.23-.5.44 0 .8.1 1.06.33.27.22.42.5.46.84h-.71zm2.79 1.14a.6.6 0 01-.31.1l-.15.04a.7.7 0 00-.3.09.31.31 0 00-.16.28c0 .12.03.2.1.25.06.05.13.08.23.08.14 0 .28-.05.4-.13s.18-.24.19-.46v-.25zm-.41-.32a.98.98 0 00.26-.05c.1-.05.15-.11.15-.2 0-.1-.04-.17-.11-.21a.7.7 0 00-.32-.06c-.16 0-.27.04-.34.11a.48.48 0 00-.1.24h-.64c0-.2.07-.4.19-.55.17-.23.48-.34.91-.34.28 0 .53.05.75.16.22.12.33.33.33.63v1.48c0 .06.01.12.04.18l.1.08v.1h-.73a.75.75 0 01-.04-.15l-.02-.16c-.1.1-.2.2-.32.26a.95.95 0 01-.5.13.84.84 0 01-.57-.2.7.7 0 01-.22-.57c0-.31.12-.54.36-.68.13-.08.33-.14.59-.17l.23-.03zm3.07-1.06h.09v.69l-.2-.01c-.27 0-.45.09-.54.26-.05.1-.08.25-.08.46v1.22h-.67v-2.56h.64v.45c.1-.18.19-.3.27-.36a.74.74 0 01.49-.15zm.58 3.12h.28l.15-.06c.04-.03.07-.08.1-.17a.4.4 0 00.05-.15l-.94-2.68h.74l.56 1.9.53-1.9h.72l-.88 2.52c-.17.49-.3.8-.4.9-.1.13-.3.18-.6.18h-.31V19zm3.97-.5v-3.47h.72v1.33h1.36v-1.33h.72v3.47h-.72v-1.55H326v1.55h-.72zm4.1-2.56v1.54c0 .15.02.26.06.34.06.13.18.19.36.19.23 0 .38-.1.47-.28a1 1 0 00.06-.4v-1.4h.68v2.57h-.65v-.36l-.05.07a.93.93 0 01-.4.3.91.91 0 01-.33.05c-.38 0-.64-.13-.77-.4a1.56 1.56 0 01-.11-.68v-1.54h.68zm2.8 1.74c.02.13.05.21.1.26.08.09.23.13.46.13a.7.7 0 00.31-.06c.08-.03.12-.1.12-.17a.2.2 0 00-.1-.17c-.06-.04-.3-.11-.7-.2a1.46 1.46 0 01-.6-.28c-.13-.1-.19-.26-.19-.46 0-.23.1-.46.28-.6.19-.18.45-.26.79-.26.32 0 .58.06.78.19.2.13.32.35.35.66h-.67a.4.4 0 00-.08-.2c-.07-.1-.2-.14-.37-.14-.15 0-.25.02-.32.07a.2.2 0 00-.09.16c0 .07.03.13.1.16.07.04.3.1.7.19.27.06.47.16.6.29.13.12.2.3.2.48 0 .24-.1.47-.29.62-.19.16-.48.24-.87.24-.4 0-.7-.08-.9-.25a.83.83 0 01-.29-.65h.69zm1.9-1.24v-.48h.36v-.72h.66v.72h.42v.48h-.42v1.36c0 .1.02.17.04.2.03.02.11.03.25.03h.13v.5l-.32.01c-.31.01-.53-.04-.65-.16a.53.53 0 01-.11-.36v-1.58h-.36zm3.08-.5h.68l.4 1.85.4-1.85h.7l-.75 2.56h-.7l-.4-1.86-.4 1.86h-.7l-.72-2.56h.72l.4 1.84.37-1.84zm3.23-.3h-.68V15h.68v.62zm-.68.3h.68v2.56h-.68v-2.56zm1.07.5v-.48h.36v-.72h.66v.72h.42v.48h-.42v1.36c0 .1.01.17.04.2.03.02.11.03.25.03h.13v.5l-.32.01c-.32.01-.53-.04-.65-.16-.08-.08-.11-.2-.11-.36v-1.58h-.36z"
				fillRule="nonzero"
			/>
		</svg>
	);
}

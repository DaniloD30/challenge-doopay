import React from 'react';

interface Props {
	color: string;
	text: string;
	length: number;
}

export default function CardDashboard({ text, color, length }: Props) {
	return (
		<h1 className={`border-solid border-2 border-sky-500 ${color} rounded-lg p-3`}>
			{text} {length}
		</h1>
	);
}

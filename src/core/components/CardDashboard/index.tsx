import React from 'react';

interface Props {
	color: string;
	text: string;
	length: number;
}

export default function CardDashboard({ text, color, length }: Props) {
	const isTotal = text.includes('Total');
	const textColor = isTotal ? 'text-black' : color;

	return (
		<>
			<div className="flex flex-col gap-2">
				<h1 className={`text-gray-400 font-semibold`}>{text}</h1>
				<div>
					<h1 className={`text-5xl font-semibold ${textColor}`}>
						{length}
						{isTotal ? '' : '%'}
					</h1>
				</div>
			</div>
		</>
	);
}

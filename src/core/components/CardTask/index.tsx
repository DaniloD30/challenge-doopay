import React from 'react';

interface Props {
	title: string;
	indexCard: number;
}
export default function Card({ title, indexCard }: Props) {
	return (
		<div className="flex flex-col w-56 h-56 bg-slate-600 p-2">
			<h1 className="text-white text-lg">{title}</h1>
			<div className=" flex items-center justify-center h-24">
				<button
					className="bg-slate-500 
                text-cyan-50 rounded-md h-12 w-24 
                hover:bg-slate-950">
					Pending
				</button>
			</div>
		</div>
	);
}

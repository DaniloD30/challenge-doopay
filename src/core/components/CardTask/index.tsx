import { useListContext } from '@/core/hooks/ListContext';
import React, { useMemo } from 'react';

interface Props {
	title: string;
	isPending: boolean;
	indexCard: number;
}
export default function Card({ title, isPending, indexCard }: Props) {
	const { handleChangeStatus } = useListContext();
	const status = useMemo(() => (isPending ? 'Pending' : 'Done'), [isPending]);
	return (
		<div className="flex flex-col w-56 h-56 bg-slate-600 p-2">
			<h1 className="text-white text-lg">{title}</h1>
			<div className=" flex items-center justify-center h-24">
				<button
					onClick={() => handleChangeStatus(indexCard)}
					className="bg-slate-500 
                text-cyan-50 rounded-md h-12 w-24 
                hover:bg-slate-950">
					{status}
				</button>
			</div>
		</div>
	);
}

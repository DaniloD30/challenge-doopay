import { useListContext } from '@/core/hooks/ListContext';
import React, { useMemo } from 'react';

interface Props {
	title: string;
	isPending: boolean;
	indexCard: number;
}
export default function Card({ title, isPending, indexCard }: Props) {
	const { handleChangeStatus } = useListContext();
	const colorText = useMemo(
		() => (!isPending ? 'text-slate-400 ' : 'text-black'),
		[isPending],
	);
	return (
		<div className="flex items-center justify-between h-3 border-2 rounded-lg p-7 w-[630px]">
			<h1 className={`text-lg text-ellipsis overflow-hidden ${colorText}`}>
				{title}
			</h1>
			{isPending ? (
				<button
					onClick={() => handleChangeStatus(indexCard)}
					className="bg-green-600
				text-sm
				font-semibold
                text-white rounded-md
				p-2
				h-10
                hover:bg-green-900">
					COMPLETAR
				</button>
			) : null}
		</div>
	);
}

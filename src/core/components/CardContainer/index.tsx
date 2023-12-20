'use client';

import React from 'react';
import { useListContext } from '@/core/hooks/ListContext';
import Card from '../CardTask';

export default function CardContainer() {
	const { tasks } = useListContext();
	return (
		<div className="flex flex-col items-center justify-center gap-10 p-5 mt-6">
			{tasks.map((item, index) => (
				<Card
					key={index}
					isPending={item.isPending}
					title={item.name}
					indexCard={index}
				/>
			))}
		</div>
	);
}

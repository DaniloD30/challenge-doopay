'use client';

import React from 'react';
import { useListContext } from '@/core/hooks/ListContext';
import Card from '../CardTask';

export default function CardContainer() {
	const { tasks } = useListContext();
	return (
		<div className="flex gap-6 w-[80%] flex-wrap p-5">
			{tasks.map((item, index) => (
				<Card
					key={`${index}-${item.name}`}
					isPending={item.isPending}
					title={item.name}
					indexCard={index}
				/>
			))}
		</div>
	);
}

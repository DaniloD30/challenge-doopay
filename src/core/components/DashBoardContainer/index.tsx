'use client';

import React, { useMemo } from 'react';
import { useListContext } from '@/core/hooks/ListContext';
import CardDashboard from '../CardDashboard';

export default function DashBoardContainer() {
	const { tasks, percentValues } = useListContext();

	const colorGreen = 'text-green-500';
	const colorRed = 'text-red-500';

	const colorPending = useMemo(
		() => (percentValues.pending >= 50 ? `${colorRed}` : `${colorGreen}`),
		[percentValues],
	);
	const colorDone = useMemo(
		() => (percentValues.done >= 50 ? `${colorGreen}` : `${colorRed}`),
		[percentValues],
	);
	return (
		<div className="flex flex-wrap items-center justify-center mt-16 gap-24">
			<CardDashboard
				color="text-gray-400"
				text="Total de Tarefas"
				length={tasks.length}
			/>
			<CardDashboard
				color={colorDone}
				text="Concluídas"
				length={+percentValues.done.toFixed(1)}
			/>
			<CardDashboard
				color={colorPending}
				text="Pendentes"
				length={+percentValues.pending.toFixed(1)}
			/>
		</div>
	);
}

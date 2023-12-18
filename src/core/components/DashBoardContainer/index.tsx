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
		<div className="flex gap-6 p-4">
			<CardDashboard color="" text="Tarefas Adicionadas:" length={tasks.length} />
			<CardDashboard
				color={colorPending}
				text="Tarefas Pendentes:"
				length={tasks.filter(a => a.isPending).length}
			/>
			<CardDashboard
				color={colorDone}
				text="Tarefas Concluídas:"
				length={tasks.filter(a => !a.isPending).length}
			/>
		</div>
	);
}

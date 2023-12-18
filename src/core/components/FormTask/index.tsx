'use client';

import { useListContext } from '@/core/hooks/ListContext';
import { Task } from '@/core/interfaces/TaskInterfaces';
import React, { useCallback, useState } from 'react';

export default function FormTask() {
	const [task, setTask] = useState<Task>({
		name: '',
		isPending: true,
	});
	const { handleAddTask } = useListContext();
	const handleAdd = useCallback((e: string) => {
		setTask(prev => ({ ...prev, name: e }));
	}, []);

	return (
		<div className="flex flex-col p-4">
			<h1 className="text-xl">Adicione uma tarefa</h1>
			<div className="flex gap-5">
				<input
					placeholder="Nome"
					className="border-l-lime-950 w-40"
					onChange={e => handleAdd(e.target.value)}></input>
				<button
					onClick={() => handleAddTask(task)}
					className="bg-slate-700 text-cyan-50 rounded-md h-12 w-24 hover:bg-slate-950">
					Adicionar
				</button>
			</div>
		</div>
	);
}

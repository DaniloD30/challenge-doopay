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
		<>
			<div className="flex items-center justify-center gap-5 mt-14">
				<input
					placeholder="Escreva uma nova tarefa"
					className="border-solid border-2 border-gray-200 rounded-lg p-2 w-96"
					onChange={e => handleAdd(e.target.value)}
				/>

				<button
					disabled={task.name === ''}
					onClick={() => handleAddTask(task)}
					className="bg-indigo-600
					p-3 w-56
					text-sm
					font-semibold
					text-white rounded-md
					hover:bg-indigo-800 disabled:cursor-not-allowed">
					ADICIONAR
				</button>
			</div>
		</>
	);
}

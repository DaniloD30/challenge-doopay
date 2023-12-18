'use client';

import React, {
	ReactNode,
	createContext,
	useCallback,
	useState,
	useContext,
} from 'react';
import { Task } from '../interfaces/TaskInterfaces';

interface ListContextProps {
	handleAddTask: (task: Task) => void;
	handleChangeStatus: (indexTask: number) => void;
	tasks: Task[];
}

interface ProviderProps {
	children: ReactNode;
}

export const ListContext = createContext({} as ListContextProps);

export function ListProvider({ children }: ProviderProps) {
	const [tasks, setTasks] = useState<Task[]>([]);

	const handleAddTask = useCallback((task: Task) => {
		setTasks(prev => [...prev, task]);
	}, []);

	const handleChangeStatus = useCallback(
		(indexTask: number) => {
			const newArr = [...tasks];
			newArr[indexTask].isPending = !newArr[indexTask].isPending;
			setTasks(newArr);
		},
		[tasks],
	);

	return (
		<ListContext.Provider value={{ handleAddTask, handleChangeStatus, tasks }}>
			{children}
		</ListContext.Provider>
	);
}

export function useListContext() {
	const context = useContext(ListContext);

	return context;
}

'use client';

import React, {
	ReactNode,
	createContext,
	useCallback,
	useState,
	useContext,
	useEffect,
} from 'react';
import { PercentValues, Task } from '../interfaces/TaskInterfaces';

interface ListContextProps {
	handleAddTask: (task: Task) => void;
	handleChangeStatus: (indexTask: number) => void;
	handlePercent: () => void;
	percentValues: PercentValues;
	tasks: Task[];
}

interface ProviderProps {
	children: ReactNode;
}

export const ListContext = createContext({} as ListContextProps);

export function ListProvider({ children }: ProviderProps) {
	const initialTasks = useCallback(() => {
		const getStorageTasks = localStorage.getItem('tasks');
		if (getStorageTasks !== null) {
			try {
				const tasksStorage = JSON.parse(getStorageTasks);
				return tasksStorage;
			} catch (error) {
				console.error(error);
			}
		}

		return [];
	}, []);

	const [tasks, setTasks] = useState<Task[]>(initialTasks);
	const [percentValues, setPercent] = useState<PercentValues>({
		done: 0,
		pending: 0,
	});

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

	const handlePercent = useCallback(() => {
		if (tasks.length > 0) {
			const newArrPending = tasks.filter(a => a.isPending);
			const newArrDone = tasks.filter(a => !a.isPending);
			setPercent({
				pending: (newArrPending.length / tasks.length) * 100,
				done: (newArrDone.length / tasks.length) * 100,
			});
		}
	}, [tasks]);

	const handleOrder = useCallback(() => {
		const newArr = tasks.sort((a, b) => {
			if (a.isPending && !b.isPending) {
				return -1;
			}
			if (!a.isPending && b.isPending) {
				return 1;
			}
			return 0;
		});
		setTasks(newArr);
	}, [tasks]);

	useEffect(() => {
		handlePercent();
		handleOrder();
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks, handlePercent, handleOrder]);

	return (
		<ListContext.Provider
			value={{
				handlePercent,
				percentValues,
				handleAddTask,
				handleChangeStatus,
				tasks,
			}}>
			{children}
		</ListContext.Provider>
	);
}

export function useListContext() {
	const context = useContext(ListContext);

	return context;
}

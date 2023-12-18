'use client';

import React, {
	ReactNode,
	createContext,
	useCallback,
	useState,
	useContext,
	useEffect,
} from 'react';
import { Task } from '../interfaces/TaskInterfaces';

interface ListContextProps {
	handleAddTask: (task: Task) => void;
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

	return (
		<ListContext.Provider value={{ handleAddTask }}>
			{children}
		</ListContext.Provider>
	);
}

export function useListContext() {
	const context = useContext(ListContext);

	return context;
}

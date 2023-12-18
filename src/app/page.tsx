import CardContainer from '@/core/components/CardContainer';
import DashBoardContainer from '@/core/components/DashBoardContainer';
import FormTask from '@/core/components/FormTask';
import React from 'react';

export default function Home() {
	return (
		<main>
			<h1>Lista de Tarefas</h1>
			<FormTask />
			<DashBoardContainer />
			<CardContainer />
		</main>
	);
}

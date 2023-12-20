import CardContainer from '@/core/components/CardContainer';
import DashBoardContainer from '@/core/components/DashBoardContainer';
import FormTask from '@/core/components/FormTask';
import Header from '@/core/components/Header';
import React from 'react';

export default function Home() {
	return (
		<main className="min-h-screen">
			<Header />
			<DashBoardContainer />
			<FormTask />
			<CardContainer />
		</main>
	);
}

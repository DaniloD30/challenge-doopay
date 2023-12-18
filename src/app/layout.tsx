import React from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ListProvider } from '@/core/hooks/ListContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Lista de Tarefas',
	description: 'Minha lista de tarefas.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-BR">
			<ListProvider>
				<body className={inter.className}>{children}</body>
			</ListProvider>
		</html>
	);
}

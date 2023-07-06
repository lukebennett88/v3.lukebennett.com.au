'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider({
	children,
	...consumerProps
}: ThemeProviderProps) {
	return <NextThemesProvider {...consumerProps}>{children}</NextThemesProvider>;
}

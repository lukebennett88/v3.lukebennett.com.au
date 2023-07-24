import { clsx } from 'clsx';
import { useTheme } from 'next-themes';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '~/components/dropdown-menu';
import { ComputerIcon } from '~/components/icons/computer';
import { MoonIcon } from '~/components/icons/moon';
import { SunIcon } from '~/components/icons/sun';
import { focusClasses } from '~/lib/classes';

export function ThemeSwitcher() {
	const { setTheme } = useTheme();
	return (
		<div className="flex flex-1 justify-end gap-4">
			<DropdownMenu>
				<DropdownMenuTrigger
					className={clsx(
						'flex h-9 w-9 items-center justify-center rounded-full',
						focusClasses,
					)}
				>
					<SunIcon className="h-4 w-4 dark:hidden" />
					<MoonIcon className="hidden h-4 w-4 dark:block" />
					<span className="sr-only">Change theme</span>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					{[
						{
							label: 'Light',
							theme: 'light',
							icon: SunIcon,
						},
						{
							label: 'Dark',
							theme: 'dark',
							icon: MoonIcon,
						},
						{
							label: 'System',
							theme: 'system',
							icon: ComputerIcon,
						},
					].map(({ label, theme, icon: Icon }) => (
						<DropdownMenuItem asChild key={theme}>
							<button
								className="flex items-center gap-2"
								onClick={() => setTheme(theme)}
							>
								<Icon className="h-4 w-4" />
								{label}
							</button>
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}

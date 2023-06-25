'use client';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export const DropdownMenu = DropdownMenuPrimitive.Root;

export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

export const DropdownMenuContent = forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(function DropdownMenuContent(
	{ className, sideOffset = 4, ...props },
	forwardedRef
) {
	return (
		<DropdownMenuPrimitive.Portal>
			<DropdownMenuPrimitive.Content
				ref={forwardedRef}
				sideOffset={sideOffset}
				className={clsx(
					'z-50 min-w-min max-w-max overflow-hidden rounded-lg p-1 shadow-md',
					'border bg-white',
					'dark:border-gray-700 dark:bg-gray-800',
					className
				)}
				{...props}
			/>
		</DropdownMenuPrimitive.Portal>
	);
});

export const DropdownMenuItem = forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
		inset?: boolean;
	}
>(function DropdownMenuItem({ className, inset, ...props }, forwardedRef) {
	return (
		<DropdownMenuPrimitive.Item
			ref={forwardedRef}
			className={clsx(
				'relative flex w-full cursor-default select-none items-center rounded px-2 py-1.5 text-sm outline-none transition-colors',
				'data-[highlighted]:bg-teal-700 data-[highlighted]:text-white',
				'dark:data-[highlighted]:bg-teal-500 dark:data-[highlighted]:text-gray-950',
				'focus:bg-bg-gray-200 focus:text-accent-foreground',
				inset && 'pl-8',
				className
			)}
			{...props}
		/>
	);
});

export function TailwindBreakpoints() {
	return (
		<div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-700 text-white">
			<div className="sm:hidden">Base</div>
			<div className="hidden sm:block md:hidden">SM</div>
			<div className="hidden md:block lg:hidden">MD</div>
			<div className="hidden lg:block xl:hidden">LG</div>
			<div className="hidden xl:block 2xl:hidden">XL</div>
			<div className="hidden 2xl:block">2XL</div>
		</div>
	);
}

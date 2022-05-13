export function Header() {
	return (

		<header className="flex items-center h-14 text-base leading-5 border-b border-brand-600">
			<span className="py-4 text-left pl-4 w-80 border-r border-brand-600">Fernanda Jeronymo</span>

			<nav className="px-8">
				<ul className="py-4 flex justify-self-auto">
					<li className="px-4">
						<a href="">_home</a>
					</li>
					<li className="px-4">
						<a href="">_about</a>
					</li>
					<li className="px-4">
						<a href="">_projects</a>
					</li>
				</ul>
			</nav>

			<a href="#" className="px-4 justify-end">_contact</a>
		</header>

	)
}
import Image from "next/image";

export default function Navbar() {

	const navbarOptions = [
		{
			name: 'Why Not?',
			href: 'whynot'
		},
		{
			name: 'About Us',
			href: 'aboutus',
		},
		{
			name: 'Gallery',
			href: 'gallery'
		},
		{
			name: 'Testimomests',
			href: 'testimomests',
		}
	]

	return (
		<header>
			<input type="checkbox" name="hbr" id="hbr" className="hbr peer" hidden aria-hidden="true" />
			<nav className="fixed z-10 w-full bg-opacity-70 backdrop-blur navbar peer-checked:navbar-active drop-shadow-md ">
				<div className="container m-auto px-2 md:px-12 lg:px-7">
					<div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
						<div className="w-full px-6 flex justify-between lg:w-max md:px-0">
							<a href="#" aria-label="logo" className="flex space-x-2 items-center">
								<Image
									alt="logo"
									src="/assets/images/logo.svg"
									width={149}
									height={43}
								/>
							</a>
							<label htmlFor="hbr" className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
								<div aria-hidden="true" className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
								<div aria-hidden="true" className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
							</label>
						</div>
						<div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 mx-6 space-y-20 p-6 rounded-xl shadow-lg bg-white lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none">
							<div className="text-gray-600 lg:pr-4">
								<ul className="space-y-6 tracking-wide font-medium text-lg lg:text-sm lg:flex lg:space-y-0">
									{
										navbarOptions.map((option) => (
											<li key={option.href}>
												<a href={option.href} className="block md:px-4 transition text-white hover:text-azulClaro">
													<span>{option.name}</span>
												</a>
											</li>
										))
									}
								</ul>
							</div>

							<button
								type="button"
								title="Start buying"
								className="w-full py-2.5 px-5 text-center rounded-md transition bg-azulClaro  sm:w-max" >
								<span className="block text-white font-semibold lg:text-sm hover:text-rojo">
									Pricing
								</span>
							</button>
						</div>
					</div>
				</div>
			</nav>
		</header>
	)
}

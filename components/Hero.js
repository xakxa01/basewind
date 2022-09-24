import Image from "next/image";
import CounterDown from "./CounterDown";

export default function Hero() {
	return (
		<div className="pt-24">
			<div className="flex">
				<Image
					src='/assets/images/Frame 11.svg'
					alt='decoration1'
					width={178}
					height={100}
				/>
			</div>
			<div className="container px-8 md:px-12 xl:max-w-5xl mx-auto lg:px-7 xl:px-0  md:flex md:justify-center ">
				<div className="md:flex md:items-center md:justify-between md:gap-12 pt-30 ">
					<div className="md:w-7/12 ">
						<h1 className="font-bold text-4xl xl:text-7xl w-12/12 text-transparent bg-clip-text bg-gradient-to-r from-[#c0c0aa] to-[#1cefff]">
							Get your website with a 30% off
						</h1>

						<CounterDown />

					</div>
					<div className="mt-12 h-56 mr-0 md:-mr-24 overflow-hidden sm:h-72 md:h-auto md:mt-0 lg:mr-0 lg:-mt-12 md:w-3/12 ">
						<Image
							src="/assets/images/logo hero.svg"
							alt="logo hero"
							width={300}
							height={508}
						/>
					</div>
				</div>
			</div>
			<div className="flex justify-end">
				<Image
					src='/assets/images/Frame 10.svg'
					alt='decoration1'
					width={178}
					height={100}
				/>
			</div>
		</div >
	)
}

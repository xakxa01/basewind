import Image from 'next/image'
import React from 'react'

export default function Why() {
	return (
		<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row fy-between">
			<div className="flex flex-col p-6 rounded-sm lg:max-w-md xl:max-w-xl lg:text-left">
				<div>
					<Image
						src="/assets/images/Group 47580.svg"
						alt="icon"
						width={102}
						height={88}
					/>
				</div>
				<h1 className="text-5xl font-bold leading-none sm:text-6xl text-white uppercase">
					why do you
					need a <span className='text-rojoClaro'>website?</span>
				</h1>
				<p className="mt-6 mb-8 text-lg sm:mb-12 font-medium text-white">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet at duis dui suscipit. Magna sit sed eu facilisi. Massa aliquet in ac sollicitudin phasellus purus.
					<br /> <br />
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet at duis dui suscipit. Magna sit sed eu facilisi. Massa aliquet in ac sollicitudin phasellus purus.
				</p>
			</div>
			<div className="flex items-center justify-center p-5 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
				<div className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
					<Image
						src="/assets/images/Frame 47579.png"
						alt="image"
						width={404}
						height={625}
					/>
				</div>
			</div>
		</div>
	)
}
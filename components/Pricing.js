import Image from "next/image"

export default function Pricing() {

	const pricingInfo = [
		{
			src: '/assets/images/logo3 1.svg',
			title: 'base silver',
			pricingMain: 90,
			pricingMouth: 30,
			skill: [
				'support',
				'hosting',
				'loading fazt',
				'SEO Optimized',
				'responsive'
			]
		},
		{
			src: '/assets/images/logo3 2.svg',
			title: 'base golden',
			pricingMain: 150,
			pricingMouth: 60,
			skill: [
				'support',
				'hosting',
				'loading more fazt',
				'SEO more Optimized',
				'responsive',
				'Analytics'
			]
		}
	]

	return (
		<div className="h-screen">
			<div className="[clip-path:polygon(0_0,100%_20%,100%_100%,0_100%)] bg-celeste w-8/12 flex justify-center h-[48rem]">
				<div className="w-screen mx-20 ">
					<h1 className="uppercase font-bold text-7xl text-negro mt-32">Pricing</h1>
					<div className="flex mt-4">
						{
							pricingInfo.map(data => (
								<div key={data.title} className="bg-white flex flex-col items-center w-80 mx-5 pb-2 text-negro">
									<div className="mt-5">
										<Image
											src={data.src}
											alt={data.title}
											width={82}
											height={135}
										/>
									</div>

									<h2 className="font-bold text-2xl ">{data.title}</h2>

									<div className="mt-3">
										<span className="text-5xl font-bold">${data.pricingMain}</span>
										<span className="text-lg font-bold ml-1">${data.pricingMouth}/mo</span>
									</div>

									<button className="bg-[#0B9CDB] w-[21rem] mt-7 text-white font-semibold uppercase py-1">
										Contactanos
									</button>

									<ul className="mt-2">
										{data.skill.map(list => (
											<li key={list} className="font-semibold list-disc">{list}</li>
										))}
									</ul>

								</div>
							))
						}
					</div>
				</div>
			</div>
			<div className="[clip-path:polygon(0_0,100%_0,100%_15%,0_10%)] w-8/12 h-screen bg-rojoClaro -mt-1"></div>
		</div>
	)
}

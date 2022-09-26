export default function CounterDown() {
	const times = ['Days', 'Hours', 'Minutes', 'Seconds'];
	return (
		<div className="flex pt-5">
			<div className="text-yellow-100">
				<div className="text-6xl text-center flex w-full items-center justify-center">
					{times.map(time => (
						<div key={time}>
							<div className="font-semibold uppercase text-sm leading-none mb-3">{time}</div>
							<div className="mx-1 p-2 bg-white rounded-2xl flex justify-center items-center">
								<h3 className="font-bold leading-none text-transparent bg-clip-text bg-gradient-to-r from-negro to-toNegro" x-text="days">00</h3>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

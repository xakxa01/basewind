import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Pricing from '../components/Pricing'

function Main() {

	const classname = 'bg-gradient-to-r from-negro to-toNegro'

	return (
		<div className='pb-96 bg-gradient-to-r from-negro to-toNegro'>
			<Navbar />
			<Hero />
			<Pricing />
		</div>
	)
}

export default Main
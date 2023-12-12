import { motion } from 'framer-motion'

const CTA = () => {
	return (
		<div className='cta'>
			<motion.a
				initial={{ y: 0 }}
				animate={{ y: [0, -20, 0] }}
				transition={{ duration: 1, repeat: Infinity }}
				viewport={{ once: false }}
				href='/Maaz.pdf'
				download
				className='btn'
			>
				Download CV
			</motion.a>
			<motion.a
				initial={{ y: -20 }}
				animate={{ y: [-20, 0, -20] }}
				transition={{ duration: 1, repeat: Infinity }}
				href='#contact'
				className='btn btn-primary'
			>
				Let's Talk
			</motion.a>
		</div>
	)
}

export default CTA

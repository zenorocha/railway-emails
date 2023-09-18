import React from 'react'
import { Section, Img } from '@react-email/components'

export default function Header() {
	return (
		<Section>
			<Img
				src='https://assets.fortmatic.com/MagicLogos/8eeffc1c730b47be82dfd26b87599fb9/e6254bceb7fe09c710818830f482b1d4.png'
				alt='Logo'
				width={69}
				height={69}
				style={{
					width: '69px',
					height: '69px',
				}}
			/>
		</Section>
	)
}

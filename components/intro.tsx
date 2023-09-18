import React from 'react'
import { Section } from '@react-email/components'
import * as s from './styles'

export default function Intro() {
	return (
		<Section style={{ padding: '18px 0' }}>
			<p style={{ ...s.text, margin: '0 0px' }}>
				Click the button below to log in to <b>Railway.</b>
			</p>
			<p style={{ ...s.text, margin: '8px 0 0px' }}>This button will expire in 20 minutes.</p>
		</Section>
	)
}

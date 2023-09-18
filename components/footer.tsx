import React from 'react'
import { Section } from '@react-email/components'
import * as s from './styles'

export default function Footer() {
	return (
		<Section>
			<p style={{ ...s.text, margin: '42px 0 0 0', fontWeight: 'bold' }}>- Railway Team</p>
		</Section>
	)
}

import React from 'react'
import { Section, Link } from '@react-email/components'
import * as s from './styles'

export default function Details({
	browser,
	date,
	email,
	link,
}: {
	browser: string
	date: string
	email: string
	link: string
}) {
	return (
		<Section>
			<p style={{ ...s.text, margin: '32px 0 0 0' }}>
				Button not showing?{' '}
				<Link href={link} style={{ color: s.colors.purple, fontWeight: 'bold' }}>
					Click here
				</Link>
			</p>
			<p style={{ ...s.text, margin: '28px 0 0 0', lineHeight: '24px' }}>
				Confirming this request will securely log you in using <b>{email}.</b>
			</p>
			<p style={{ ...s.text, margin: '26px 0 0 0', lineHeight: '24px' }}>
				This login was requested using <b>{browser}</b> at <b>{date}.</b>
			</p>
		</Section>
	)
}

import React from 'react'
import { Button } from '@react-email/components'
import * as s from './styles'

export default function Btn({ text, link }) {
	return (
		<Button pY={10} pX={20} style={s.button} href={link}>
			{text}
		</Button>
	)
}

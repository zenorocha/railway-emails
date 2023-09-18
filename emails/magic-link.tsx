import * as React from 'react'
import { Body, Container, Head, Html, Preview } from '@react-email/components'
import { Header, Intro, Details, Footer, Button, styles } from '../components/'

interface MagicLinkProps {
	link: string
	email: string
	browser: string
	date: string
}

export const MagicLinkEmail = ({
	link = 'https://railway.app/',
	email = 'zeno@resend.com',
	browser = 'Chrome, Mac OS X',
	date = '07:33:33 PDT on August 17, 2023',
}: MagicLinkProps) => (
	<Html>
		<Head />
		<Preview>Log in to Railway</Preview>
		<Body style={styles.main}>
			<Container style={styles.container}>
				<Header />
				<Intro />
				<Button text='Log in to Railway' link={link} />
				<Details browser={browser} date={date} link={link} email={email} />
				<Footer />
			</Container>
		</Body>
	</Html>
)

export default MagicLinkEmail

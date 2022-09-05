import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { cartContext } from '../../contexts/cartContext'
import './Footer.css'

const Footer = () => {
	return (
		<div className='footer-1'>
			<div style={{ height: '15vh' }}></div>
			<div className='footer-2'>
				lololol
				<div className='footer-3'>
					<div className='footer-4'>
						<Typography variant='h5'>Lorem, ipsum dolor.</Typography>
						<br />
						<Typography variant='h2'>Lorem ipsum dolor sit amet.</Typography>
					</div>
					<div className='footer-5'>
						<Button className='footer-btn1'>Get started</Button>
					</div>
				</div>
			</div>
			<div
				className='respons'
				style={{
					backgroundColor: '#192136',
					height: '35vh',
					display: 'flex',
					justifyContent: 'space-evenly',
					width: '100%',
				}}
			>
				<div
					className='for-hover'
					style={{
						marginTop: '50px',
						color: 'white',
						display: 'flex',
						justifyContent: 'space-evenly',
						flexDirection: 'column',
					}}
				>
					<Typography
						variant='h5'
						style={{ marginBottom: '20px' }}
					></Typography>
					<Typography variant='subtitle'>Home</Typography>
					<Typography variant='subtitle'>Get in touch</Typography>
					<Typography variant='subtitle'>FAQs</Typography>
				</div>
				<div
					className='for-hover'
					style={{
						marginTop: '50px',
						color: 'white',
						display: 'flex',
						justifyContent: 'space-evenly',
						flexDirection: 'column',
					}}
				>
					<Typography variant='h5' style={{ marginBottom: '20px' }}>
						About us
					</Typography>
					<Typography variant='subtitle'>Home</Typography>
					<Typography variant='subtitle'>Get in touch</Typography>
					<Typography variant='subtitle'>FAQs</Typography>
				</div>
				<div
					className='for-hover'
					style={{
						marginTop: '50px',
						color: 'white',
						display: 'flex',
						justifyContent: 'space-evenly',
						flexDirection: 'column',
					}}
				>
					<Typography variant='h5' style={{ marginBottom: '20px' }}>
						Lorem ipsum dolor sit amet.
					</Typography>
					<Box>
						<TextField
							size='small'
							variant='outlined'
							label='Email'
							style={{
								height: '30px',
								marginRight: '10px',
								color: 'white',
							}}
						/>
						<Button
							style={{ backgroundColor: 'rgb(109, 73, 245)', color: 'white' }}
						>
							Subscribe
						</Button>
					</Box>
				</div>
			</div>
		</div>
	)
}

export default Footer

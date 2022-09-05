import React, { useContext } from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import { headerContext } from '../../contexts/headerContext'
import { useNavigate } from 'react-router-dom'
import { authContext } from '../../contexts/authContext'
import { Button, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const Sidebar = () => {
	const { user, logOut, admin } = useContext(authContext)
	const { sidebar, toggleSidebar } = useContext(headerContext)
	const navigate = useNavigate()
	return (
		<div className={sidebar ? 'sidebar sidebar--open' : 'sidebar'}>
			<div className='sidebar-container'>
				{user ? (
					<li
						onClick={() => {
							toggleSidebar()
							navigate(`/`)
						}}
					>
						My Account: {user.email}
					</li>
				) : null}

				<li
					onClick={() => {
						toggleSidebar()
						navigate(`/`)
					}}
				>
					HOME <ArrowForwardIosIcon />
				</li>
				<li
					onClick={() => {
						toggleSidebar()
						navigate(`/mens`)
					}}
				>
					MENS <ArrowForwardIosIcon />
				</li>
				<li
					onClick={() => {
						toggleSidebar()
						navigate(`/womens`)
					}}
				>
					WOMANS <ArrowForwardIosIcon />
				</li>
				<li
					onClick={() => {
						toggleSidebar()
						navigate(`/cart`)
					}}
				>
					CART
					<ArrowForwardIosIcon />
				</li>
				<li
					onClick={() => {
						toggleSidebar()
						navigate(`/favorite`)
					}}
				>
					FAVORITE
					<ArrowForwardIosIcon />
				</li>
				<li
					onClick={() => {
						toggleSidebar()
						navigate(`/impression`)
					}}
				>
					IMPRESSIONS
					<ArrowForwardIosIcon />
				</li>
				<li
					onClick={() => {
						toggleSidebar()
						navigate(`/add-for-mens`)
					}}
				>
					ADD FOR MEN'S <ArrowForwardIosIcon />
				</li>
				{admin ? (
					<li
						onClick={() => {
							toggleSidebar()
							navigate(`/add-for-womens`)
						}}
					>
						ADD FOR WOMEN'S <ArrowForwardIosIcon />
					</li>
				) : null}

				{user ? (
					<li className='auth'>
						<Button
							variant='outlined'
							style={{
								borderRadius: '20px',
								color: 'black',
								border: '1px solid black',
								fontWeight: '600',
							}}
							onClick={() => {
								logOut()
							}}
						>
							Log out
						</Button>
					</li>
				) : (
					<li className='auth'>
						<Button
							variant='outlined'
							style={{
								borderRadius: '20px',
								color: 'black',
								border: '1px solid black',
								fontWeight: '600',
							}}
							onClick={() => {
								{
									navigate(`/log-in`)
									toggleSidebar()
								}
							}}
						>
							Log In
						</Button>
						<Typography>or</Typography>
						<Button
							onClick={() => {
								navigate(`/sign-up`)
								toggleSidebar()
							}}
							variant='outlined'
							style={{
								borderRadius: '20px',
								color: 'green',
								border: '1px solid green',
								fontWeight: '600',
							}}
						>
							Sign Up
						</Button>
					</li>
				)}
			</div>
		</div>
	)
}

export default Sidebar

import React, { useContext, useEffect, useState } from 'react'
import { styled, alpha } from '@mui/material/styles'
import {
	Badge,
	Box,
	Button,
	Container,
	IconButton,
	Menu,
	MenuItem,
	Typography,
} from '@mui/material'
import InputBase from '@mui/material/InputBase'
import AccountCircle from '@mui/icons-material/AccountCircle'
import navmenu from './images/navmenu.png'
import { Link, useNavigate } from 'react-router-dom'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import './Header.css'
import { headerContext } from '../../contexts/headerContext'

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
		width: 'auto',
	},
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
}))

export default function Header() {
	const [navColor, setnavColor] = useState('transparent')
	const listenScrollEvent = () => {
		window.scrollY > 50 ? setnavColor(' #8c8c8c9c') : setnavColor('transparent')
	}

	useEffect(() => {
		window.addEventListener('scroll', listenScrollEvent)
		return () => {
			window.removeEventListener('scroll', listenScrollEvent)
		}
	}, [])

	const { toggleSidebar } = useContext(headerContext)
	const [anchorEl, setAnchorEl] = React.useState(null)
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)
	const navigate = useNavigate()

	const isMenuOpen = Boolean(anchorEl)
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

	const handleProfileMenuOpen = event => {
		setAnchorEl(event.currentTarget)
	}

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null)
	}

	const handleMenuClose = () => {
		setAnchorEl(null)
		handleMobileMenuClose()
	}

	const handleMobileMenuOpen = event => {
		setMobileMoreAnchorEl(event.currentTarget)
	}

	const menuId = 'primary-search-account-menu'
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>Profile </MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
			<MenuItem
				onClick={() => {
					AddPhotoAlternateIcon()
					navigate('/add-film')
				}}
			>
				<AddPhotoAlternateIcon />
			</MenuItem>
			<MenuItem>
				<Badge badgeContent={17} color='error'>
					Notification
				</Badge>
			</MenuItem>
		</Menu>
	)

	const mobileMenuId = 'primary-search-account-menu-mobile'

	return (
		<Box
			className='tool-bar'
			style={{
				backgroundColor: navColor,
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<Box
				style={{
					width: '1000px',
					paddingLeft: '20px',
					paddingRight: '20px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-around',
				}}
			>
				<Box className='tengizText'>
					<Typography
						className='tengizTyp'
						onClick={() => navigate(`/`)}
						noWrap
						style={{
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							fontSize: '1.25rem',
						}}
					>
						GUCCI
					</Typography>
				</Box>
				<Box style={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
					<Box className='header-box'>
						<Typography
							className='text'
							fontWeight={400}
							onClick={() => navigate(`/`)}
						>
							HOME
						</Typography>
					</Box>
					<Box className='header-box'>
						<Typography
							className='text'
							fontWeight={400}
							onClick={() => navigate(`/mens`)}
						>
							MEN'S
						</Typography>
					</Box>
					<Box className='header-box'>
						<Typography
							className='text'
							fontWeight={400}
							onClick={() => navigate(`/womens`)}
						>
							WOMEN'S
						</Typography>
					</Box>
				</Box>
				<Box style={{ display: 'flex' }}>
					{/* <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle className="acc-icon" sx={{ fontSize: 45 }} />
          </IconButton> */}
					{/* <Button
            onClick={handleProfileMenuOpen}
            variant="contained"
            style={{ borderRadius: "20px" }}
            color="success"
          >
            Sign up
          </Button> */}
					<Box onClick={() => toggleSidebar()}>
						<MenuRoundedIcon style={{ fontSize: '40px' }} className='burger' />
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

import React, { useContext, useEffect, useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardMedia,
	Container,
	IconButton,
	Typography,
} from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { useNavigate } from 'react-router-dom'
import { favoriteContext } from '../../contexts/favoriteContext'
import BookmarkRemoveSharpIcon from '@mui/icons-material/BookmarkRemoveSharp'
import { favoriteContextWomen } from '../../contexts/favoriteContextWomen'
import { Parallax } from 'react-parallax'
import '../HomePage/HomePage.css'
// import b1 from "../IMGS/banner/b1.jpg";
import b1 from '../IMGS/banner/b17.jpg'

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein }
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
]

export default function Favorite() {
	const { getFavorite, favorite, deleteFromFavorite } =
		useContext(favoriteContext)
	const { getWomenFavorite, favoriteWomen, deleteFromWomenFavorite } =
		useContext(favoriteContextWomen)
	console.log(favoriteWomen)
	useEffect(() => {
		getFavorite()
	}, [])
	useEffect(() => {
		getWomenFavorite()
	}, [])
	const navigate = useNavigate()
	return (
		<div>
			<section id='page-header7'>
				<h2>#formakers</h2>
				<p>Save more with coupons $ up to 70% off!</p>
			</section>
			<Container style={{ marginTop: '150px', marginBottom: '90px' }}>
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label='simple table'>
						<TableHead>
							<TableRow style={{ backgroundColor: '#e1e1e1' }}>
								<TableCell>Favorite For Men</TableCell>
								<TableCell align='center'>Price</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{favorite &&
								favorite?.favorites.map(row => (
									<TableRow
										key={row.item.id}
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
									>
										<TableCell component='th' scope='row'>
											<div style={{ display: 'flex' }}>
												<Card
													style={{
														borderRadius: '10px',
														backgroundColor: 'none !important',
													}}
													sx={{ maxWidth: 90 }}
												>
													<CardActionArea>
														<CardMedia
															onClick={() => navigate(`/mens/${row.item.id}`)}
															component='img'
															height='130'
															image={row.item.image}
															alt={row.item.title}
														/>
													</CardActionArea>
												</Card>
												<div
													onClick={() => navigate(`/mens/${row.item.id}`)}
													className='favorite-hover'
													style={{
														display: 'flex',
														justifyContent: 'center',
														flexDirection: 'column',
														paddingLeft: '15px',
														width: '100%',
													}}
												>
													<p style={{ fontWeight: '600' }}>{row.item.title}</p>
													<p>Size: M</p>
													<p>Color: Black</p>
												</div>
											</div>
										</TableCell>
										<TableCell align='center'>
											$ {row.item.price}
											<Button
												style={{ width: '100%', color: '#5c5c5c' }}
												onClick={() => deleteFromFavorite(row.item.id)}
												aria-label='delete'
											>
												<BookmarkRemoveSharpIcon />
											</Button>
										</TableCell>
									</TableRow>
								))}
						</TableBody>
					</Table>
				</TableContainer>
			</Container>
			<Container style={{ marginTop: '90px', marginBottom: '800px' }}>
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label='simple table'>
						<TableHead>
							<TableRow style={{ backgroundColor: '#e1e1e1' }}>
								<TableCell>Favorite For Women</TableCell>
								<TableCell align='center'>Price</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{favoriteWomen &&
								favoriteWomen?.womenFavorites.map(row => (
									<TableRow
										key={row.item.id}
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
									>
										<TableCell component='th' scope='row'>
											<div style={{ display: 'flex' }}>
												<Card
													style={{
														borderRadius: '10px',
														backgroundColor: 'none !important',
													}}
													sx={{ maxWidth: 90 }}
												>
													<CardActionArea>
														<CardMedia
															component='img'
															height='130'
															image={row.item.image}
															alt={row.item.title}
														/>
													</CardActionArea>
												</Card>
												<div
													onClick={() => navigate(`/womens/${row.item.id}`)}
													className='favorite-hover'
													style={{
														display: 'flex',
														justifyContent: 'center',
														flexDirection: 'column',
														paddingLeft: '15px',
														width: '100%',
													}}
												>
													<p style={{ fontWeight: '600' }}>{row.item.title}</p>
													<p>Size: M</p>
													<p>Color: Black</p>
												</div>
											</div>
										</TableCell>
										<TableCell align='center'>
											$ {row.item.price}
											<Button
												style={{ width: '100%', color: '#5c5c5c' }}
												onClick={() => deleteFromWomenFavorite(row.item.id)}
												aria-label='delete'
											>
												<BookmarkRemoveSharpIcon />
											</Button>
										</TableCell>
									</TableRow>
								))}
						</TableBody>
					</Table>
				</TableContainer>
			</Container>
		</div>
	)
}

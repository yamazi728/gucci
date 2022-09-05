import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './HomePage.css'
import {
	Fullpage,
	FullpageSection,
	FullPageSections,
} from '@ap.cx/react-fullpage'
import { Button, Card, CardActionArea, Paper, Rating } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import f1 from './img/features/f1.png'
import f2 from './img/features/f2.png'
import f3 from './img/features/f3.png'
import f4 from './img/features/f4.png'
import f5 from './img/features/f5.png'
import f6 from './img/features/f6.png'
import g1 from './img/products/f1.jpg'
import g2 from './img/products/f2.jpg'
import g3 from './img/products/f3.jpg'
import g4 from './img/products/f4.jpg'
import g5 from './img/products/f5.jpg'
import g6 from './img/products/f6.jpg'
import g7 from './img/products/f7.jpg'
import g8 from './img/products/f8.jpg'
import g9 from './img/products/n1.jpg'
import g10 from './img/products/n2.jpg'
import g11 from './img/products/n3.jpg'
import banner1 from './img/hero4.png'
import banner2 from './img/b2.jpg'

import { Parallax } from 'react-parallax'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
	useEffect(() => {
		AOS.init()
		AOS.refresh()
	}, [])
	const navigate = useNavigate()
	return (
		<>
			{/* First block */}
			<Parallax
				style={{ width: '100%' }}
				bgImage='https://images7.alphacoders.com/617/617537.jpg'
				strength={-400}
			>
				<section id='hero'>
					<div className='hero-text'>
						<h4>Trade-in-offer</h4>
						<h2>Super value deals</h2>
						<h1 id='h-color'>On all products</h1>
						<p id='p-h-color'>Save more with coupons & up to 70% off!</p>
						<Button onClick={() => navigate(`/mens`)} variant='outlined'>
							Shop Now
						</Button>
					</div>
				</section>
			</Parallax>

			{/* First block end */}
			{/* -------------------------------------------- */}
			<section
				id='feature'
				className='section-p1'
				// data-aos="flip-up"
				// data-aos-duration="1500"
			>
				<div className='fe-box'>
					<img src={f1} alt='lol' />
					<h6>Free Shipping</h6>
				</div>
				<div className='fe-box'>
					<img src={f2} alt='lol' />
					<h6>Online Order</h6>
				</div>
				<div className='fe-box'>
					<img src={f3} alt='lol' />
					<h6>Save Money</h6>
				</div>
				<div className='fe-box'>
					<img src={f4} alt='lol' />
					<h6>Promotions</h6>
				</div>
				<div className='fe-box'>
					<img src={f5} alt='lol' />
					<h6>Happy Sell</h6>
				</div>
				<div className='fe-box'>
					<img src={f6} alt='lol' />
					<h6>24/7 Support</h6>
				</div>
			</section>
			{/* ---------------------------------------------------- */}
			<section id='product1' className='section-p1'>
				<h2>Featured Products</h2>
				<p>Summer Collection New Morden Design</p>
				<div className='pro-container'>
					<div className='pro'>
						<CardActionArea style={{ borderRadius: '25px' }}>
							<img src={g2} alt='' />
						</CardActionArea>
						<div className='des'>
							<span className='sp'>adidas</span>
							<h5>Cartoon Astronaut T-Shirts</h5>
							<div className='star'>
								<Rating name='size-medium' defaultValue={2} />
							</div>
							<h4>$78</h4>
						</div>
						<ShoppingCartIcon className='cart' />
					</div>
					<div className='pro'>
						<CardActionArea style={{ borderRadius: '25px' }}>
							<img src={g3} alt='' />
						</CardActionArea>
						<div className='des'>
							<span className='sp'>adidas</span>
							<h5>Cartoon Astronaut T-Shirts</h5>
							<div className='star'>
								<Rating name='size-medium' defaultValue={2} />
							</div>
							<h4>$78</h4>
						</div>
						<ShoppingCartIcon className='cart' />
					</div>
					<div className='pro'>
						<CardActionArea style={{ borderRadius: '25px' }}>
							<img src={g4} alt='' />
						</CardActionArea>
						<div className='des'>
							<span className='sp'>adidas</span>
							<h5>Cartoon Astronaut T-Shirts</h5>
							<div className='star'>
								<Rating name='size-medium' defaultValue={2} />
							</div>
							<h4>$78</h4>
						</div>
						<ShoppingCartIcon className='cart' />
					</div>
					<div className='pro'>
						<CardActionArea style={{ borderRadius: '25px' }}>
							<img src={g5} alt='' />
						</CardActionArea>
						<div className='des'>
							<span className='sp'>adidas</span>
							<h5>Cartoon Astronaut T-Shirts</h5>
							<div className='star'>
								<Rating name='size-medium' defaultValue={2} />
							</div>
							<h4>$78</h4>
						</div>
						<ShoppingCartIcon className='cart' />
					</div>
					<div className='pro'>
						<CardActionArea style={{ borderRadius: '25px' }}>
							<img src={g6} alt='' />
						</CardActionArea>
						<div className='des'>
							<span className='sp'>adidas</span>
							<h5>Cartoon Astronaut T-Shirts</h5>
							<div className='star'>
								<Rating name='size-medium' defaultValue={2} />
							</div>
							<h4>$78</h4>
						</div>
						<ShoppingCartIcon className='cart' />
					</div>
				</div>
			</section>
			{/* ----------------------------------------------------------- */}

			<Parallax
				style={{ height: '40vh' }}
				bgImage='https://wallpaperaccess.com/full/2825704.gif'
				strength={400}
			>
				<section id='banner' className='section-m1'>
					<h4>Repair Services</h4>
					<h2>
						Up to <span>70% Off</span> - All t-Shirts & Accessories
					</h2>
					<Button data-aos='flip-up' variant='outlined' color='inherit'>
						Explore More
					</Button>
				</section>
			</Parallax>
			{/* ----------------------- */}

			<section id='product1' className='section-p1' data-aos='flip-right'>
				<h2>New Arrival</h2>
				<p>Summer Collection New Morden Design</p>
				<div className='pro-container' data-aos='flip-left'>
					<div className='pro'>
						<CardActionArea style={{ borderRadius: '25px' }}>
							<img src={g1} alt='' />
						</CardActionArea>
						<div className='des'>
							<span className='sp'>adidas</span>
							<h5>Cartoon Astronaut T-Shirts</h5>
							<div className='star'>
								<Rating name='size-medium' defaultValue={2} />
							</div>
							<h4>$78</h4>
						</div>
						<ShoppingCartIcon className='cart' />
					</div>
					<div className='pro'>
						<CardActionArea style={{ borderRadius: '25px' }}>
							<img src={g2} alt='' />
						</CardActionArea>
						<div className='des'>
							<span className='sp'>adidas</span>
							<h5>Cartoon Astronaut T-Shirts</h5>
							<div className='star'>
								<Rating name='size-medium' defaultValue={2} />
							</div>
							<h4>$78</h4>
						</div>
						<ShoppingCartIcon className='cart' />
					</div>
					<div className='pro'>
						<CardActionArea style={{ borderRadius: '25px' }}>
							<img src={g3} alt='' />
						</CardActionArea>
						<div className='des'>
							<span className='sp'>adidas</span>
							<h5>Cartoon Astronaut T-Shirts</h5>
							<div className='star'>
								<Rating name='size-medium' defaultValue={2} />
							</div>
							<h4>$78</h4>
						</div>
						<ShoppingCartIcon className='cart' />
					</div>
					<div className='pro'>
						<CardActionArea style={{ borderRadius: '25px' }}>
							<img src={g4} alt='' />
						</CardActionArea>
						<div className='des'>
							<span className='sp'>adidas</span>
							<h5>Cartoon Astronaut T-Shirts</h5>
							<div className='star'>
								<Rating name='size-medium' defaultValue={2} />
							</div>
							<h4>$78</h4>
						</div>
						<ShoppingCartIcon className='cart' />
					</div>
					<div className='pro'>
						<CardActionArea style={{ borderRadius: '25px' }}>
							<img src={g5} alt='' />
						</CardActionArea>
						<div className='des'>
							<span className='sp'>adidas</span>
							<h5>Cartoon Astronaut T-Shirts</h5>
							<div className='star'>
								<Rating name='size-medium' defaultValue={2} />
							</div>
							<h4>$78</h4>
						</div>
						<ShoppingCartIcon className='cart' />
					</div>
					<div className='pro'>
						<CardActionArea style={{ borderRadius: '25px' }}>
							<img src={g6} alt='' />
						</CardActionArea>
						<div className='des'>
							<span className='sp'>adidas</span>
							<h5>Cartoon Astronaut T-Shirts</h5>
							<div className='star'>
								<Rating name='size-medium' defaultValue={2} />
							</div>
							<h4>$78</h4>
						</div>
						<ShoppingCartIcon className='cart' />
					</div>
					<div className='pro'>
						<CardActionArea style={{ borderRadius: '25px' }}>
							<img src={g7} alt='' />
						</CardActionArea>
						<div className='des'>
							<span className='sp'>adidas</span>
							<h5>Cartoon Astronaut T-Shirts</h5>
							<div className='star'>
								<Rating name='size-medium' defaultValue={2} />
							</div>
							<h4>$78</h4>
						</div>
						<ShoppingCartIcon className='cart' />
					</div>
					<div className='pro'>
						<CardActionArea style={{ borderRadius: '25px' }}>
							<img src={g8} alt='' />
						</CardActionArea>
						<div className='des'>
							<span className='sp'>adidas</span>
							<h5>Cartoon Astronaut T-Shirts</h5>
							<div className='star'>
								<Rating name='size-medium' defaultValue={2} />
							</div>
							<h4>$78</h4>
						</div>
						<ShoppingCartIcon className='cart' />
					</div>
					<div className='pro'>
						<CardActionArea style={{ borderRadius: '25px' }}>
							<img src={g4} alt='' />
						</CardActionArea>
						<div className='des'>
							<span className='sp'>adidas</span>
							<h5>Cartoon Astronaut T-Shirts</h5>
							<div className='star'>
								<Rating name='size-medium' defaultValue={2} />
							</div>
							<h4>$78</h4>
						</div>
						<ShoppingCartIcon className='cart' />
					</div>
					<div className='pro'>
						<CardActionArea style={{ borderRadius: '25px' }}>
							<img src={g5} alt='' />
						</CardActionArea>
						<div className='des'>
							<span className='sp'>adidas</span>
							<h5>Cartoon Astronaut T-Shirts</h5>
							<div className='star'>
								<Rating name='size-medium' defaultValue={2} />
							</div>
							<h4>$78</h4>
						</div>
						<ShoppingCartIcon className='cart' />
					</div>
				</div>
			</section>
			{/* ------------------------------ */}
		</>
	)
}

export default HomePage

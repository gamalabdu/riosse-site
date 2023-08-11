import React, { useEffect } from 'react'
import './styles.css'
import { FaInstagram } from 'react-icons/fa'
import { AiOutlineYoutube } from 'react-icons/ai'
import { TbBrandSpotify } from 'react-icons/tb'
import { FaTiktok } from 'react-icons/fa'
import logo  from '../../assets/logos/riosseLogo.png'
import './styles.css'
import riosseHome from '../../assets/videos/riosseHome.mp4'

function Home() {

	const riosseInfo = {
		name: 'Riosse',
		instagram: 'https://www.instagram.com/elriosse/',
		youtube: 'https://www.youtube.com/@elriossee',
		spotify: 'https://open.spotify.com/artist/2j5iC8hR6INKeqJ2D1Zjiv?si=3DbVD0WMTHep0juOR8sZYg',
		tiktok: 'https://www.tiktok.com/@elriosse',
	}


	const goToLink = (linkType: string) => {
		switch (linkType) {
			case 'youtube':
				return (window.location.href = `${riosseInfo.youtube}`)
			case 'instagram':
				return (window.location.href = `${riosseInfo.instagram}`)
			case 'spotify':
				return (window.location.href = `${riosseInfo.spotify}`)
			case 'tiktok':
					return (window.location.href = `${riosseInfo.tiktok}`)
			default:
				break
		}
	}


	return (
		<div className='home-container'>

			<video src={riosseHome} autoPlay loop muted playsInline={true} disablePictureInPicture={true} />

			{/* <h1>RIOSSE</h1> */}
			
			<img src={logo} style={{ width:"40vw"}} />

			<div
				className='artistSocialsContainer'>
				<button className='artistSocials' onClick={() => goToLink('instagram')}>
					<FaInstagram />
				</button>
				<button className='artistSocials' onClick={() => goToLink('youtube')}>
					<AiOutlineYoutube />
				</button>
				<button className='artistSocials' onClick={() => goToLink('spotify')}>
					<TbBrandSpotify />
				</button>
				<button className='artistSocials' onClick={() => goToLink('tiktok')}>
					<FaTiktok />
				</button>
			</div>
		</div>
	)
}

export default Home

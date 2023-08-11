import React, { useState } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { AiOutlineYoutube } from 'react-icons/ai'
import { TbBrandSpotify } from 'react-icons/tb'
import { BsFacebook } from 'react-icons/bs'
import epkPic from '../../assets/photos/rio2.jpg'
import riosseArtistCover from '../../assets/photos/rio4.jpg'
import './styles.css'
import SecretPage from '../SecretPage/SecretPage'
import { Link } from 'react-router-dom'

const Epk = () => {

	const works = [
		{
			title: "VERANO '23 ",
			type: 'spotify',
			year: '2023',
			link: 'https://open.spotify.com/album/5iDXUlfHxM3SQTPE1COs39?si=GMh64M50RE-VB9YJsO6jFA',
			albumWork: require('../../assets/photos/riosseVerano.jpeg'),
		},
		
	]

	const metrics = [
		{
			social: 'Instagram',
			followers: '1,000 +',
			icon: <FaInstagram />,
			type: 'Followers',
			link: 'https://www.instagram.com/elriosse/',
		},
		{
			social: 'Spotify',
			followers: '6,000 +',
			icon: <TbBrandSpotify />,
			type: 'Streams',
			link: 'https://open.spotify.com/artist/2j5iC8hR6INKeqJ2D1Zjiv?si=3DbVD0WMTHep0juOR8sZYg',
		},
		{
			social: 'TikTok',
			followers: '6,000 +',
			icon: <FaTiktok />,
			type: 'Likes',
			link: 'https://www.tiktok.com/@elriosse',
		},
		{
			social: 'YouTube',
			followers: '300 +',
			icon: <AiOutlineYoutube />,
			type: 'Subscribers',
			link: 'https://www.youtube.com/@elriossee',
		},
	]



	const goToLink = (linkType: string) => {

		const link = metrics.find(
			(metric) => metric.social.toLowerCase() === linkType.toLowerCase()
		)?.link

		switch (linkType.toLowerCase()) {
			case 'youtube':
				return (window.location.href = `${link}`)
			case 'instagram':
				return (window.location.href = `${link}`)
			case 'spotify':
				return (window.location.href = `${link}`)
			case 'tiktok':
				return (window.location.href = `${link}`)
			case 'facebook':
				return (window.location.href = `${link}`)
			default:
				break
		}
	}

	const [password, setPassword] = useState<boolean>(false)

	if ( !password ) {
		return <SecretPage password={password} setPassword={setPassword} />
	}


	return (

		<div className='epk-container'>

			<img className='video' src={epkPic} />

			<div className='epk-inner'>

			<Link to='/home' preventScrollReset={true} reloadDocument >
			   <div className='back-home'> Back Home </div> 
			</Link>
				

				<div style={{ fontSize: '3em', color: 'white', textAlign:"center" }}> EPK </div>

				<div className='top-info'>
					<div className='cover-art'>
						<img src={riosseArtistCover} />
					</div>

					<div className='artist-info'>
						<div> @riosse </div>
						<div> 7 songs | 1 release </div>
						<div className='roles'>
							<div>Writer</div>
							<div>·</div>
							<div>Vocalist</div>
							<div>·</div>
							<div>Producer</div>
						</div>
					</div>
				</div>

				<div className='bio'>
					<div className='bio-text'>
					    Riosse (Rodrigo Ríos García), nacido en Monterrey, es un canta-autor
						y productor que mezcla sonidos de distintos géneros como: Pop
						Alternativo, Trap, Dance/House, creando una vibra / atmósfera
						específica alrededor de cada proyecto. 
					</div>
				</div>

				<div className='works'>
					{works.map((work) => {
						return (
							<div key={work.title} className='works-tile'>
								<img src={work.albumWork} />
								<div className='works-info'>
									<div>{work.title}</div>
									<div> Single · {work.year} </div>
								</div>
								<div
									className='metric-icon-play'
									onClick={() => goToLink(work.type)}>
									<AiFillPlayCircle />
								</div>
							</div>
						)
					})}
				</div>

				<div className='metrics'>
					{metrics.map((metric) => {
						return (
							<div key={metric.social} className='metric-block'>
								<div className='metric-info'>
									<div
										className='metric-icon'
										onClick={() => goToLink(metric.social)}>
										{metric.icon}
									</div>
									<div> {metric.followers} </div>
									<div>{metric.type}</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>

	)
}

export default Epk

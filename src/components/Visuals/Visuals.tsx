import React from 'react'
import './styles.css'
import rio3 from '../../assets/photos/rio3.jpg'

const Visuals = () => {
	const visuals = [
		{
			name: "RIOSSE - Vi Ai Pi (Visualizer) | Verano '23",
			link: 'https://www.youtube.com/embed/8x88JBMJJEE?controls=0',
		},
		{
			name: "RIOSSE - 10 (Visualizer) | Verano '23",
			link: 'https://www.youtube.com/embed/MIjxn8ltpsw?controls=0',
		},
		{
			name: "RIOSSE - Guantera (Visualizer) | Verano '23",
			link: 'https://www.youtube.com/embed/l9uA8TDHq7Q?controls=0',
		},
		{
			name: "RIOSSE - VEINTI (Visualizer) | Verano '23",
			link: 'https://www.youtube.com/embed/MzzUBEA6vNY?controls=0',
		},
		{
			name: "RIOSSE - Coronita (Visualizer) | Verano '23",
			link: 'https://www.youtube.com/embed/r6AKD5AO8xk?controls=0',
		},
		{
			name: "RIOSSE - Finde (Visualizer) | Verano '23",
			link: 'https://www.youtube.com/embed/u8O31NUR578?controls=0',
		},
		{
			name: "RIOSSE - De Pari (Visualizer) | Verano '23",
			link: 'https://www.youtube.com/embed/O0kx0TTNwE8?controls=0',
		},
	]

	return (
		<div className='visuals-container'>
			<img className='video' src={rio3} />

			<h1 className='visuals-title'>Visuals</h1>

			<div className='visuals-div'>
				{visuals.map((video) => {
					return (
					
							<iframe
                                 className='youtube-video'
								// src={'https://www.youtube.com/embed/Rb6Scz-5YOs?autoplay=1&mute=1'}
                                src={video.link}
								// title='YouTube video player'
								// onLoad={() => resizeIframe(this)}
								allow='accelerometer; autoplay '></iframe>
						
					)
				})}
			</div>
		</div>
	)
}

export default Visuals

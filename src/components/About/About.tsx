import React from 'react'
import riosseClose from '../../assets/photos/riosseClose.jpg'
import './styles.css'

const About = () => {
	return (
		<div className='about-container'>
			<img className='back-image' src={riosseClose} />

			<div className='about-container-2'>
				<div className='about-title'>ABOUT</div>

				<div className='about-text'>
					<div>
						Riosse (Rodrigo Ríos García), nacido en Monterrey, es un canta-autor
						y productor que mezcla sonidos de distintos géneros como: Pop
						Alternativo, Trap, Dance/House, creando una vibra / atmósfera
						específica alrededor de cada proyecto. 
						<br/>
						<br/>
						Su visión de la música está
						fuertemente basada en interpretar, escribir y componer no solo desde
						las experiencias de su vida, sino de la cultura mexicana que lo vio
						crecer, integrando elementos que diferencian su proyecto por la
						tropicalización de sonidos al estilo de nuestro país. 
						<br/>
						<br/>
						Tras haber
						producido y escrito canciones para él mismo y otros artistas, ha
						trabajado de manera independiente para su carrera musical y ahora
						está listo para explotar la escena musical, pintando una imagen más
						clara de la dirección de la música en México.
					</div>
				</div>

				{/* <div className='heart'>
					<img src={heartHandDrawn} />
				</div> */}
			</div>
		</div>
	)
}

export default About

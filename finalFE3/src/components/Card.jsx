/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { GlobalContext } from './utils/global.context.jsx'
import { Link } from 'react-router-dom'
import image from "../assets/doctor.jpg";

// Cambios: desde acá
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';
// Cambios: hasta acá



const Card = ({ dentista }) => {
  const { addFav, removeFav, favs } = useContext(GlobalContext)

  const { id, name, username } = dentista
  const isFavorito = favs.some((fav) => fav.id === id)

  const handleAddFav = (e) => {
    e.preventDefault()
    if (isFavorito) {
      removeFav(id)
    } else {
      addFav(id)
    }
  }

  return (
      <div className='containerOdontologos'>
        <Link  to={`/detail/${id}`}>
          <div className='cardsOdontologos'>
            <img src={image} className='cardsOdontologosImagen' alt='doctor' />
            <p className='cardsOdontologosName'> {name} </p>
            <p className='cardsOdontologosUsername'>{username}</p>

            {/* Cambios: desde acá */}
          <div
            data-tip={isFavorito ? 'Eliminar de favoritos' : 'Agregar a favoritos'}
            data-for={`star-tooltip-${id}`}
            onClick={handleAddFav}
            style={{ cursor: 'pointer' }}
          >
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: isFavorito ? 'yellow' : 'inherit' }}
            />
          </div>
          <ReactTooltip id={`star-tooltip-${id}`} effect="solid" />

            {/* Cambios: hasta acá */}

          </div>
        </Link>
      </div>
        )
}

export default Card

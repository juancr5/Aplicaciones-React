import PropTypes from 'prop-types';

// devuelve la tarjeta con eL titulo y la imagen del gif
const GifItem = ({ title, url, id }) => {

    return (
        <div className="card animate__animated animate__fadeInDownBig">
            <p>{title}</p>
            <img src={url} alt={title}/>
        </div>
    )
}

// Esta linea hace obligatorio el formato requerido en la variable 
GifItem.propTypes = {
    title: PropTypes.string.isRequired, 
    url  : PropTypes.string.isRequired, 
  }

export default GifItem;
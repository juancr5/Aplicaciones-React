import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';
import GifItem from './GifItem';

//Cuadricula con las tarjetas
const GifGrid = ({ category }) => {

    //useFetchGifs recibe la data de las imagenes y su estado isLoading desde en la api
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                //Si isLoading esta en true va a ejecutar la segunda parte de la instruccion
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}


export default GifGrid;
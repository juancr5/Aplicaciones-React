// devuelve la tarjeta con eL titulo y la imagen del gif
export const GifGridItem = ({ title, url, id }) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <p>{title}</p>
            <img src={url} alt={title}/>
        </div>
    )
}
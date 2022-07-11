import { useEffect, useState } from 'react';
import { getGifsService } from '../helpers/getGifService';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //
    const getImages = async () => {
        const newImages = await getGifsService(category);
        setImages(newImages);
        setIsLoading(false);
    }

    //La finalidad de useEffect hacer la petición solo una vez http una vez cuando se redibuja el componente
    useEffect(() => {
        getImages();
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        images,
        isLoading
    }

}
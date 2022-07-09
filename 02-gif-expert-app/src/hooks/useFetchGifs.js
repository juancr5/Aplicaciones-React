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

    useEffect(() => {
        getImages();
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        images,
        isLoading
    }

}
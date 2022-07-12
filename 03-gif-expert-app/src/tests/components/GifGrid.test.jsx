import { render, screen } from '@testing-library/react';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    
    const category = 'Dragon Ball Z';

    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ category } /> );
        expect( screen.getByText( 'Cargando...' )).toBeTruthy();
        expect( screen.getByText( category )).toBeTruthy();

    });

    test('debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={ category } /> );
        expect( screen.getAllByRole('img').length ).toBe(2);
        
    });

});
import { shallow } from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom'
import { GifGrid } from '../../../components/GifGrid';
import { useFetchGifs } from '../../../hooks/useFetchGifs';
jest.mock('../../../hooks/useFetchGifs');

describe('Pruebas en el <GifGrid/>', () => {
    
    const category = 'One Punch';

    test('1.- Debe de mostrarse correctamente ', () => {
    
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true

        });

        const wrapper = shallow(<GifGrid category= { category }/>);
        expect( wrapper ).toMatchSnapshot();
    })

    test('2.- Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        
       
        const gifs = [{
            id: 'ABC',
            url: 'https://local',
            title: 'cualquier cosa'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false

        });

        const wrapper = shallow(<GifGrid category= { category }/>)
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists()).toBe(false);
        expect( wrapper.find('GifGridItem').length).toBe( gifs.length );
    })
    
    
})

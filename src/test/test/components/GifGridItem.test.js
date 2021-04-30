import React from 'react';
import { shallow } from "enzyme"
import { GifGridItem } from "../../../components/GifGridItem"


describe('pruebas en <GifGridItem />', () => {
    
    const title = 'un titulo';
    const url = 'https://localhost/algo.jpg'
    const wrapper = shallow(<GifGridItem title= {title} url={url}/>)

    test('1.- Debe de mostar el componente correctamente ', () => {
        
        
        expect ( wrapper ).toMatchSnapshot();
    })

    test('2.- Debe de tener un parrafo con el title', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe( title );
    })
    
    test('3.- Debe de obtener la imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img');
        expect( img.prop('src')).toBe( url );
        expect( img.prop('alt')).toBe( title );
        
    })

    test('4.- Debe de tener card', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect( className.includes('card')).toBe( true );
        
    })
    
    
})

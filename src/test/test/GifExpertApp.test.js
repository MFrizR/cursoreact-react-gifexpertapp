import { shallow } from 'enzyme';
import React from 'react';
import { GifExpertApp } from '../../GifExpertApp';

describe('Pruebas en el GifExpertApp', () => {
    
    test('1.- El componente se debe mostrar correctamente ', () => {
        
        const wrapper = shallow(<GifExpertApp/>);
        expect( wrapper ).toMatchSnapshot();
    })
    
    test('2.- Debe de mostrar una lista de categorias ', () => {
        
        const categories = ['dragon','vegeta'];
        const wrapper = shallow(<GifExpertApp defaultCategories = {categories}/>);
        expect( wrapper ).toMatchSnapshot();
       // expect( wrapper.find('GifGrid').length ).toBe( categories.length);
       expect( wrapper.find('GifGrid').length ).toBe(1);
    })
    
})

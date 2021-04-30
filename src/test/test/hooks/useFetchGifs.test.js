import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from '../../../hooks/useFetchGifs.js'

describe('Pruebas en el hooks useFetchGifs', () => {
    
    test('1.- Debe de retornar el estado inicial ', async() => {

       // const { data, loading} = useFetchGifs( category );
        const { result } = renderHook( () => useFetchGifs('One'))
        const { data, loading }= result.current;
        await waitForNextUpdate();
        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
    })

    test('2.- Debe de retornar un arreglo de imagenes ', async() => {
        
        const {result,waitForNextUpdate} = renderHook( () => useFetchGifs('One'));
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect( data.length ).toEqual([]);
        expect( loading ).toBe(true);
    })
    
    
})

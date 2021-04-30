import { getGifs } from '../../../helpers/getGifs'

describe('2.- Pruebas con getGifs Fetch', () => {
    
    test('1.- Debe de traer 10 elementos ', async () => {
       
        const gifs = await getGifs('One Punch');

        expect ( gifs.length ).toBe( 10 );
    })

    test('2.- Debe de traer 0 elementos ', async () => {
       
        const gifs = await getGifs('');

        expect ( gifs.length ).toBe( 0 );
    })
    
})

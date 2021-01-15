import axios from 'axios';
import { deleteHttp, getHttp, postHttp, putHttp } from '../http';

jest.mock('axios');

describe('http services', () => {

    test('Should get services with params', () => {
        const filter = "samsung";
        (axios.get).mockResolvedValueOnce({});
        const query = `?q=${filter}`
        return getHttp('ITEMS',query).then(data => {
            expect(data).toEqual({});
        });
    });

    test('Should get services without params', () => {
        (axios.get).mockResolvedValueOnce({});
        return getHttp('ITEMS').then(data => {
            expect(data).toEqual({});
        });
    });

    test('Should post services', () => {
        (axios.post).mockResolvedValueOnce({});
        return postHttp('ITEMS',{}).then(data => {
            expect(data).toEqual({});
        });
    });

    test('Should put services', () => {
        (axios.put).mockResolvedValueOnce({});
        return putHttp('ITEMS',"1",{}).then(data => {
            expect(data).toEqual({});
        });
    });

    test('Should delete services', () => {
        (axios.delete).mockResolvedValueOnce({});
        return deleteHttp('ITEMS',"1").then(data => {
            expect(data).toEqual({});
        });
    });

});
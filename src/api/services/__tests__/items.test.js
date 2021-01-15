import axios from "axios";
import api from '../index';

jest.mock('axios');

describe('http services', () => {

    test('Should get items service with samsung filter', async () => {
        const filter = "samsung";
        (axios.get).mockResolvedValueOnce({data: {}});
        const data = await api.items.getItems(filter);
        expect(data).toEqual({});
    });

    test('Should get item service by id', async () => {
        const filter = "MLA901507324";
        (axios.get).mockResolvedValueOnce({data: {}});
        const data = await api.items.getItemById(filter);
        expect(data).toEqual({});
    });

});
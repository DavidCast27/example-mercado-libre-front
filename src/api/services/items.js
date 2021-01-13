import { getHttp } from '../common/http';
import _get from 'lodash/get';

const getItems = (filter) => {
    const query = `?q=${filter}`
    return getHttp('ITEMS',query).then(res => {
        return _get(res, 'data');
    });
};

const getItemById = (id) => {
    const param = `/${id}`;
    return getHttp('ITEMS', param).then(res => {
        return _get(res, 'data');
    });
};

const items = {
    getItems,
    getItemById
};

export default items;

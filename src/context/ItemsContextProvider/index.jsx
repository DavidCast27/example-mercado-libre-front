import { useEffect, useState } from 'react'
import _get from 'lodash/get';

import ItemsContext from './ItemsContext';
import api from '../../api/services';
import { useLocation } from 'react-router-dom';

function ItemsContextProvider({children}) {

    const [data, setData] = useState({items:[], categories:[]})
    const searchLocation = useLocation().search;

    const _getItems = async () => {
        const searchParams = new URLSearchParams(searchLocation); 
        const search = searchParams.get('search');
        if(search){
            setData({items:[], categories:[]});
            const res = await api.items.getItems(search);
            const items = _get(res, 'items', []);
            const categories = _get(res, 'categories', []);
            setData({items,categories});
        }        
    }

    useEffect(() => {
        _getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchLocation]);

    return (
        <ItemsContext.Provider value={data}>
            {children}
        </ItemsContext.Provider>
    )
}


export default ItemsContextProvider


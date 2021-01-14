import { useContext, useEffect, useState } from 'react';
import ContentWrapper from '../../components/ContentWrapper';
import ListItem from '../../components/ListItem';
import './SearchResults.scss';
import ItemsContext from '../../context/ItemsContextProvider/ItemsContext';

function SearchResults() {
    const [items, setItems] = useState([]);
    const itemsContext = useContext(ItemsContext);

    useEffect(() => {
        if(itemsContext){
            setItems(itemsContext.items);
        }
    }, [itemsContext]);

    const _getItems = (
        <ul>
            {
                items.map((item, key) => {
                    const isLast = items.length - 1 === key;
                    return (
                        <ListItem key={key}
                            isLast={isLast}
                            { ...item } />
                    );
                })
            }
        </ul>
    );

    const _itemsNotFound = (<h2 className="searchresults__itemsnotfound"> No se encontraron elementos de acuerdo a la busqueda </h2>)

    return (
        <ContentWrapper>
            {items.length !== 0
                ? _getItems 
                : _itemsNotFound}
        </ContentWrapper>
    );
}

export default SearchResults;

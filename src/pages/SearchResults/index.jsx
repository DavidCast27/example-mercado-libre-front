import { useContext, useEffect, useState } from 'react';
import ContentWrapper from '../../components/ContentWrapper';
import ListItem from '../../components/ListItem';
import ItemsContext from '../../context/ItemsContextProvider/ItemsContext';
import './SearchResults.scss';

function SearchResults() {
    const [items, setItems] = useState([]);
    const itemsContext = useContext(ItemsContext);

    useEffect(() => {
        if (itemsContext) {
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

    return (
        <ContentWrapper>
            { items &&  _getItems }
        </ContentWrapper>
    );
}

export default SearchResults;
